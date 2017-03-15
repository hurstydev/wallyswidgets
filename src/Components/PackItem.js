import React, { Component } from 'react';
import Box                  from '../box.svg';

class PackItem extends Component {

  render() {
    return (

      <tr>
        <td><img src={Box} className="box" alt="Box Icon" /></td>
        <td>{this.props.pack.packSize}</td>
        <td>{this.props.pack.quantity}</td>
      </tr>

    );
  }
}

export default PackItem;
