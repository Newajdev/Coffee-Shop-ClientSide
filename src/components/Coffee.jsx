import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Coffee = () => {
    const coffee = useLoaderData()
    const {  Name, Chef, Price } = coffee;
    return (
        <div>
            <h1 className="text-4xl font-black text-green-800">{Name}</h1>
            <h1 className="text-4xl font-black text-green-800">{Chef}</h1>
            <h1 className="text-4xl font-black text-green-800">{Price}</h1>
        </div>
    );
};

export default Coffee;