import React, { Component } from 'react';
import museum from './img/museum.jpg';
import bridge from './img/bridge.jpg';
import house from './img/house.jpg';

class Photographs extends Component {
    render() {
        return (
            <>
                <h4>Notable Places</h4>
                <span className='photo'>
                    <img src={museum} alt="Minuteman Museum"></img>
                    <img src={bridge} alt="Old North Bridge"></img>
                    <img src={house} alt="Thoreau House"></img>
                </span>
            </>
        );
    }
}
  
export default Photographs;