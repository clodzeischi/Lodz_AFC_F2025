import {useForm} from 'react-hook-form';
import {yupResolver} from "@hookform/resolvers/yup/src/index.js";
import { object, string, number} from "yup";

export const App = () => {

    const userSchema = object({
        fname: string()
            .required('This field is required')
            .min(5, 'Must be 5 characters or more'),
        state: string()
            .required()
            .oneOf(['TX', 'OK', 'NM'], 'Invalid state pick')
    });

    const { register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors}
    } = useForm({resolver: yupResolver(userSchema)});

    const onSubmit = (data2) => {
        console.log(data2);
        reset();
    }

    const handleChange = (event) => {
        console.log(`${event.target.name} : ${event.target.value}`);
        setValue(event.target.name, event.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>First name:
                    <input type='text' {...register('fname')} onChange={handleChange}/>
                    {errors.fname && <span>{errors.fname.message}</span>}
                </label>
                <br />
                <label>Age:
                    <input type='number' {...register('age')} onChange={handleChange}/>
                </label><br />
                <label>Email:
                    <input type='email' {...register('email')} onChange={handleChange}/>
                </label><br />
                <label htmlFor='state'>State:
                    <select id='state' {...register('state')}>
                        <option value=''>--select state--</option>
                        <option value='TX'>TX</option>
                        <option value='OK'>OK</option>
                        <option value='NM'>NM</option>
                    </select>
                    {errors.state && <span>{errors.state.message}</span>}
                </label><br />
                <button type='submit'>Submit</button>
            </form>
        </>
    );
}