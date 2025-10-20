import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

    const [members, setMembers] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleOnSubmit = (e) => {
        e.preventDefault();
        setMembers([...members, inputValue]);
    }

    const onChangeValue = (e) => {
        setInputValue(e.target.value);
    }
    
  return (
    <>
        <div className='input-box'>
          <form onSubmit={handleOnSubmit}>
              <input type='text' name='text' onChange={onChangeValue}/>
              <button type='submit'>Submit</button>
          </form>
        </div>
        <div className='task-table'>
            <table>
                <tbody>
                    {members.map((value, index) => {
                        return (
                            <tr>
                                <td>{index}.</td>
                                <td>{value}</td>
                            </tr>
                            )
                    })}
                </tbody>
            </table>
        </div>
    </>
  )
}

export default App
