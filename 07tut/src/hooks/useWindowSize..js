import { useState, useEffect } from 'react';
// Custom hooks cannot be used inside other hooks, but react native 
// hooks can be used inside of custom hooks. 
const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: undefined, 
        height: undefined
    });

    useEffect(() => {

        const handleResize = () => {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        // Call function once at load time. 
        handleResize(); 

        // Continue to call handleResize when window is resized by user. 
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize); 
    }, [])
    return windowSize; 
}

export default useWindowSize; 