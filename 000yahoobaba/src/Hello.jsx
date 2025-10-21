function Hello() {


    const getName = (yourname) => {
        return yourname;
    }

    function handleClick() {
        alert("BUtton was clicked I love it!!!!!")
    }

    const handleInput = (event)  => {
        console.clear()
        console.log("Value :", event.target.value
        );
    }

    const handleMouseOver = () =>{
        console.log('Mouse is over the text');
    }

    const handleDoubleClick = () => {
        console.log('Mouse is double click');
    }

    const name = "NamanBaba"
    const name1 = "NamanBaba"


    return(
        <>
            {/* function using */}
            <h1>Hello {getName(name)}</h1>
            <h2>Bye {getName(name1)}</h2>

            {/* DOUBLE EVENT USING */}
            <p onMouseOver={handleMouseOver} onDoubleClick={handleDoubleClick}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam tempore fugiat tempora ducimus pariatur explicabo nam molestiae corrupti architecto consectetur!</p>

            {/* FUNCTION USING WITH EVENT */}
            <button onClick={handleClick}>Click me</button>
            <button onClick={() => alert("Hello from inline function ")}>Say Hello</button>
            <input type="text" onChange={handleInput} placeholder="Type Something..." />
        </>
    )
}

export default Hello