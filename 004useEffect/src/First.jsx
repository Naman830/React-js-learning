import {useState, useEffect} from 'react';

const First = () => {
    const[count, setCount] = useState(0)

    useEffect(() => {
        document.title = `Count : ${count}`

        console.log("Count...");
    }, [count])


    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default First;
