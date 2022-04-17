import { useEffect, useState } from 'react';

const useServices = () => {
    const [services, setServices] =useState([]);
    useEffect(()=>{
        fetch('https://raw.githubusercontent.com/YeBenLing-ZAMAN/fakedata/main/assignment10.json')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[])
    // console.log(services);
    return [services];
};

export default useServices;