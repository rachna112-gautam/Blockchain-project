import React from 'react';
import Join from './Join';
import Advertise from './Advertise';
import ViewDetails from './ViewDetails';
import './../../App.css'
const Container = () => {
    return (
        <div className="container">
           <ul className="ul-list">
              <li className="list"><Join></Join></li>
            <li className="list"><Advertise></Advertise></li>
            <li className="list"><ViewDetails></ViewDetails></li>
            </ul>
        </div>
    )
}

export default Container;
