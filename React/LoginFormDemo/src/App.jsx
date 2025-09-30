// Build a password input with a button
// When button is clicked - toggle password plain text visibility

import { useState } from "react";

const App = () => {
    const [ visState, setVisState ] = useState(false);

    const handleClick = () => {
        setVisState(!visState);
    }

    return ( <>
            <h1>App in password reveal</h1>
            <input type={ visState ? 'password' : 'text' } placeholder={'Enter password'} name={'pw'} />
            <button onClick={handleClick}>Show/hide</button>
        </> );
}

export default App;