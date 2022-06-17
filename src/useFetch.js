//we stored this function here so we call it in multiple files if we want

import {useState,useEffect} from 'react';

const useFetch=(url)=>{
    //declared useState to store data and other info
    const [data, setdata] = useState(null);
    const [isPending, setisPending] = useState(true);
    const [error, seterror] = useState(false);
    useEffect(()=>{
        //to abort the fetch we make a new object of abort controller and sign an argument to the fetch then use .abort() in the return to abort the fetch
        const abortCont=new AbortController();
        //fetching data from json file and setting the value of it to data to output it later
        fetch(url,{signal:abortCont.signal})
        .then(res=>{if(!res.ok){throw Error('couldnt fetch the data from that resource')}return res.json()})
        .then(data=>{setisPending(false);setdata(data)})
        .catch(err=>{
            if(err.name==="AbortError"){
                console.log("aborted")
            }
            else{
            setisPending(false);
            seterror(err.message)}
        });
            
            return ()=>abortCont.abort();    
    },[url]);
    return {data,isPending,error};

}
export default useFetch

// we make props in the tag here to pass the values to the blogList component