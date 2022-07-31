import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

export default function NotLogged() {
    const [count, setCount] = useState(5);

    useEffect(() => {
        const id = setInterval(() => setCount((old) => old - 1), 1000);
        return () => clearInterval(id);
    }, []);
    
    if(count === 0){
        return <Navigate to='/' replace/>    
    }

    return <h1>You need to be logged to see or create posts, redirecting to Home in {count}...</h1>
}