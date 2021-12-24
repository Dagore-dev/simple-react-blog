import { useEffect, useState } from "react";

export default function useFetch ( url ) {

    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(false);
    const [error, setError] = useState(null);

    function handleFetch () {
        
        const ac = new AbortController();

        fetch(url, { signal: ac.signal })
            .then(res => {
                if(!res.ok)
                {
                    throw Error('Could not fetch data for that resource');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name==='AbortError') {
                    console.log('Fetch aborted');
                }
                else {
                    setError(err.message);
                    setIsPending(false);
                }
            })

    }
    
    useEffect(handleFetch, [url]);

    return { data, isPending, error };
}