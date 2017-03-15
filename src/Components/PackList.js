import React, { Component } from 'react';
import PackItem             from './PackItem';

class PackList extends Component {

  render() {

    let packItems;
    if( this.props.packs ){
      packItems = this.props.packs.map( ( pack ) => {
        return(
          <PackItem key={pack.packSize} pack={pack}></PackItem>
        )
      });
    }

    return (
      <table className="table">
        <thead>
          <tr>
            <th className="col-xs-1"></th>
            <th className="col-xs-5">Pack</th>
            <th className="col-xs-6">Quantity</th>
          </tr>
        </thead>
        <tbody>
          {packItems}
        </tbody>
      </table>

    );
  }
}

export default PackList;
