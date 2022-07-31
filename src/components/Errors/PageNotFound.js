import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function PageNotFound() {
    const [count, setCount] = useState(5);

    useEffect(() => {
        const id = setInterval(() => setCount((old) => old - 1), 1000);
        return () => clearInterval(id);
    }, []);
    
    if(count === 0){
        return <Navigate to='/' replace/>    
    }

    return <h1>Page not found, redirecting to Home in {count}...</h1>
}