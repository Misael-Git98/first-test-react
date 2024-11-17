import { useState, useEffect } from "react";

const TextH2 = () => {
    const [text, setText] = useState("");

    const handelText = (evento) => {

        setText (evento.target.value);
    }

    useEffect(  () => {
        console.log("Componente montado")

    }, []); // AGREGAR UN ARRAY VACIO 

    useEffect(  () => {
        console.log("Text modificado!")

    }, [text]);

    return (
        <div>
            <input type="text" onChange={handelText} />

            <h2>{text}</h2>
        </div>
    )
};

export default TextH2;

// montaje = mounting
// actualizacion = update
// desmontaje = unmounting