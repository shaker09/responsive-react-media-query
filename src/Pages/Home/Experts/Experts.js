import React from 'react';
import Expert from '../Expert/Expert';


const experts = [
    {
        id:"1",
        img: 'https://i.ibb.co/g9W73q1/mechanic-1.jpg',
        name: 'Shakib Al Hasan',
        expertise:'-Engine Expert-'
    },
    {
        id:"2",
        img: 'https://i.ibb.co/5GFqQrp/mechanic-2.jpg',
        name: 'Tamim Iqbal',
        expertise:'-Wheel Experts-'
    },
    {
        id:"3",
        img: 'https://i.ibb.co/fXVWVp7/mechanic-3.jpg',
        name: 'Soumya Sarkar',
        expertise:'-Biri Cigarette Ane-'
    },
    {
        id:"4",
        img: 'https://i.ibb.co/KrX1Wmr/mechanic-4.jpg',
        name: 'Liton Das',
        expertise:'-Hudai Vab Nei-'
    },
    {
        id:"5",
        img: 'https://i.ibb.co/1zVctWX/mechanic-5.jpg',
        name: 'Mahmudullah',
        expertise:'-Paint Experts-'
    }
]

const Experts = () => {
    return (
        <div id="experts" className="container mt-5">
            <h2 className="text-primary">Our experts </h2>
            <div className="row">
                {
                    experts.map(expert => <Expert
                    key={expert.id}
                    expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;