import {useState} from "react";

export const App = () => {

    const initialFormState = {
        fname: "",
        age: 0,
        email: ""
    }

    const [formData, setFormData] = useState(initialFormState);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("submitting " + formData.fname + " " + formData.age);
    }

    const handleChange = (e) => {
        setFormData(
            {...formData,
            [e.target.name] : e.target.value});
    }

    return (
        <>
            <h1>Form!</h1>
            <form onSubmit={handleSubmit} method="get">
                <label>First name:
                <input type="text" name="fname" placeholder="Enter name" onChange={handleChange}/>
                </label>
                <label>Age:
                <input type="number" name="age" value={formData.age} onChange={handleChange} />
                </label>
                <label>Email:
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </>
    );
}