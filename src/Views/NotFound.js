import { Link } from "react-router-dom";

export default function NotFound () {

    return(
        <main>
            
            <h1>Error 404</h1>

            <p>
                La página que busca no existe o no ha sido encontrada.
            </p>

            <Link to={'/'}>A la página principal</Link>
        </main>
    );
}