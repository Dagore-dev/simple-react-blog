import { Link } from "react-router-dom";

export default function BlogList ( { blogs, title } ) {

    return(
        
        <section>
            
            <h2>{title}</h2>

            {
                blogs.map(
                    ( { id, title, author } ) => <article className="blog-preview" key={id}>
                        <Link to={`/blog/${id}`}>
                            
                            <h3>{title}</h3>

                            <p>Escrito por {author}</p>
                            
                        </Link>
                    </article>
                )
            }
        </section>

    );
}