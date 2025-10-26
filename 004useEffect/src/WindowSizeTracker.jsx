import { useState, useEffect } from "react";

const WindowSizeTracker = () => {
    const [width, setWidth] = useState(window.innerWidth)

useEffect(() => {
    const handleResize = () => {
        setWidth(window.innerWidth)
    }

    window.addEventListener("resize", handleResize)

    return () => {
        window.removeEventListener("resize", handleResize)     
        console.log("UnSUbscribe from resize event");
        
    };
}, []);

    return (
        <div>
            <h1>Window WIdth Tracker</h1>            
            <p>Current WIdth : {width}px</p>

        </div>
    );
}

export default WindowSizeTracker;
