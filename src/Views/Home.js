import useFetch from '../Hooks/useFetch';
import BlogList from '../Components/BlogList';

export default function Home () {

    const {data: blogs, isPending, error} = useFetch('https://damp-everglades-99244.herokuapp.com/blogs');

    return(
        <main className="home">
            
            <h1>Principal</h1>
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {<BlogList blogs={blogs} title='Todos los artículos'/>}

        </main>
    );
}