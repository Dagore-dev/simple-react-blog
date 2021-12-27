import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Create () {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('usuario');
    const [body, setBody] = useState('');
    const [isPending, setIsPending] = useState(false);
    const navigate = useNavigate();
    
    function handleSubmit ( e ) {

        e.preventDefault();

        const blog = {
            title,
            author,
            body
        };

        setIsPending(true);

        fetch(
            'https://damp-everglades-99244.herokuapp.com/blogs',
            {
                method: 'POST',
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(blog)
            }
        )
            .then( () => {
                setIsPending(false);
                navigate('/')
            } )

    }

    return (
        <main className="create">
            
            <h1>Crea una nueva publicación</h1>
            
            <form onSubmit={handleSubmit}>

                <label>
                    Nombre
                    <input type='text' required value={author} onChange={ (e) => setAuthor(e.target.value) } />
                </label>

                <label>
                    Título para la publicación
                    <input type='text' required value={title} onChange={ (e) => setTitle(e.target.value) }/>
                </label>

                <label>
                    Cuerpo
                    <textarea required value={body} onChange={ (e) => setBody(e.target.value) }/>
                </label>

                {!isPending && <button>Add Blog</button>}
                {isPending && <button disabled>Adding Blog</button>}
            </form>

        </main>
    );
}