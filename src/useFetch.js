import { useState,useEffect } from "react";



const useFetch = (url) => {
    const [data,setData] = useState();
    const [isPending,SetIsPending] = useState (true);
    const [error,setError] = useState (null);

    useEffect(() => {
        const abortController = new AbortController();
     
          fetch(url,{ signal: abortController.signal }) 
            .then((res) => {
              if (!res.ok) {
                throw Error('failed to fetch');
              }
              return res.json();
            })
            .then((data) => {
              setData(data)
              SetIsPending(false)
              setError(null)
              console.log(data);
              
            })
            .catch(err => {
                if (err.name === "AbortError"){
               console.log('Fetch aborted');

                } else {
                  SetIsPending(false);
                  setError(err.message);
                }
            });
     
    
        return () => abortController.abort();
       
      }, [url]);



    return {data,isPending,error}
}

export default useFetch;