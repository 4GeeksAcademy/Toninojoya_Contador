import React, {useEffect, useState} from "react";

export const Contador = () => {
    
    
    const [counter, setCounter] = useState(0)
    
    
    useEffect(() =>{
        const interValid = setInterval(()=>{
        console.log("demian")
        setCounter(counter + 1)
    }, 1000)
        return () => clearInterval(interValid)

}, [counter])

    return (
        <h1>Hola {counter}</h1>
    );
};
