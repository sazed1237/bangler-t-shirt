import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const tshirts = useLoaderData();
    console.log(tshirts)
    return (
        <div>
            
            <h2>this is home: {tshirts.length}</h2>
            {
                tshirts.map(tshirt => tshirt)
            }
        </div>
    );
};

export default Home;