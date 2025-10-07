import { useState } from "react";

const App = () => {
    const [ visState, setVisState ] = useState(false);

    return ( <>
            <h1>App in password reveal</h1>
            <input type={ visState ? 'password' : 'text' } placeholder={'Enter password'} name={'pw'}
                onMouseEnter={ () => setVisState(false)}
                onMouseLeave={ () => setVisState(true)} />
        </> );
}

export default App;