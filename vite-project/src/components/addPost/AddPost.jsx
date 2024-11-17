import { useState } from "react";
import './AddPost.css';

const AddPost = () => {

    const[blog, setBlog] = useState({
        autor : '',
        titulo : '',
        descripcion : '',
    });

    const handleChange = (event, type) => {
        console.log(event.target.value);
        console.log(type);
        setBlog();
        setBlog ((prevState) => {
            console.log(prevState);
            return {
                ...prevState,
                [type]: event.target.value,
            };
        });
    };

    const handleSubmit = (event) => {
    
        event.preventDefault();
        event.stopPropagation();
        console.log('handleSubmit');
        if (blog.autor && blog.descripcion && blog.titulo){
            console.log('handleSubmit')
        };
    };

    return (
        <>
        <form className="form-blog" action="" onSubmit={handleSubmit}>

            <label className="label-blog" htmlFor="">Autor</label>

            <input className="input-blog" type="text" value={blog.autor} onChange={(event) => handleChange(event, 'autor')}/>
            
            <label className="label-blog" htmlFor="">Titulo</label>
            
            <input className="input-blog" type="text" value={blog.titulo} onChange={(event) => handleChange(event, 'titulo')} />
            
            <label className="label-blog" htmlFor="">Descripcion</label>
            
            <input className="input-blog" type="text" value={blog.descripcion} onChange={(event) => handleChange(event, 'descripcion')} />
            
            <textarea name="" id=""></textarea>
            
            {/*<label htmlFor="">Fecha de publicacion</label>*/}

            <button className="btn-blog" type="submit">Confirmar</button>
        </form>
        </>
    );
};

export default AddPost;