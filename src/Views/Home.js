import useFetch from '../Hooks/useFetch';
import BlogList from '../Components/BlogList';

export default function Home () {

    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs');

    return(
        <main className="home">
            
            <h1>Principal</h1>
            
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {<BlogList blogs={blogs} title='Todos los artículos'/>}

        </main>
    );
}