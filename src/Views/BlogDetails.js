import { useNavigate, useParams } from "react-router-dom";
import useFetch from '../Hooks/useFetch';

export default function BlogDetails () {

    const { id } = useParams();
    const { data: { title, author, body }, isPending, error } = useFetch(`https://damp-everglades-99244.herokuapp.com/blogs/${id}`);
    const navigate = useNavigate();

    function handleClick () {

        fetch(
            `https://damp-everglades-99244.herokuapp.com/blogs/${id}`,
            {method: 'DELETE'}
        )
            .then(() => navigate('/'))

    }
    
    return(
        <main className="blog-details">
            
            <h1>Artículo completo</h1>

            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}

            <article>

                <h2>{title}</h2>

                <p>Escrito por {author}</p>

                <p>
                    {body}
                </p>

                <button onClick={handleClick}>Eliminar</button>

            </article>

        </main>
    );
}