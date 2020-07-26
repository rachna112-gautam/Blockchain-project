import React from 'react';
import Join from './Join';
import Advertise from './Advertise';
import ViewDetails from './ViewDetails';
const Container = () => {
    return (
        <div className="container">

            <Join></Join>
            <Advertise></Advertise>
            <ViewDetails></ViewDetails>
        </div>
    )
}

export default Container;
