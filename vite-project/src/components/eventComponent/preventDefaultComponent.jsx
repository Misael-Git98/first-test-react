const PreventDefaultComponent = () => {
    const manejarEnvio = {event} => {
        event.preventDefault(); //Evita que el formulario se envie
        console.log('El formulario no se ha enviado');
    };

    return (
        <form onSubmit={manejarEnvio}>
            <label>
              Nombre:
                <input type="text" name="nombre" />
            </label>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default PreventDefaultComponent;