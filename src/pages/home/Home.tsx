import React from 'react';
import {useEffect} from "react";

const Home = () => {
    useEffect(() => {
        console.log(process.env.REACT_APP_BASE_MAPBOX_API)
    }, [])

    return (
        <div>
            Home
        </div>
    );
};

export default Home;
