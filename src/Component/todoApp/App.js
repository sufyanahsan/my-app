import { useRef } from 'react';
import '../style/App.css';

const App = () => {

    let myValue = useRef()

    const getvalue = () => {
        console.log("=======>>>>>>>", myValue.current.value);
    }

    return (
        <div>
            <input id="myinput" ref={myValue} />
            <button onClick={getvalue}>Click</button>
        </div>
    );
}

export default App;
