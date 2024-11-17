const StopPropagationComponent = () => {
    const manejarClickDiv = () => {
        console.log('Div clickeado')
    };

    const manejarClickBoton = (event) => {
        event.StopPropagation();
        console.log('Boton clickeado');
    };

    return (
        <div onClick = {manejarClickDiv} style={{padding : '20', border: '1 solid black'}}>
        <button onClick={manejarClickBoton}>Haz click en el boton</button>
        </div>
    );
    
}

export default StopPropagationComponent;