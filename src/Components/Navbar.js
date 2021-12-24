import { Link } from "react-router-dom";
export default function Navbar () {


    return (
        <nav className="navbar">

            <h2>Estudiando DAW</h2>
            
            <ul>
                <li><Link to={'/'}>Principal</Link></li>
                <li><Link to={'/create'}>Crea una publicación</Link></li>
            </ul>

        </nav>
    ); 
}