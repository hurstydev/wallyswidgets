import React, { Component } from 'react';
import PackList from './PackList'

class WidgetCalculator extends Component {

  constructor(props){
    super(props);

    // Set the default states
    this.state = {
      packList: [],
      quantity: 0,
      packs:    props.packs
    };

    // Bind this to the functions
    this.handleChange   = this.handleChange.bind(this);
    this.calculatePacks = this.calculatePacks.bind(this);

  }

  componentDidMount(){
    this.calculatePacks();
  }

  calculatePacks(){

  	// Declare an array to hold the required packs
  	var packList = [];

    // Get the required targe
    var target = Number( this.state.quantity );

  	// Declare a variable to determine any non-divisible amount
  	var remainder = target;

  	// Defensively copy the array and sort descending
  	var packSizes = this.state.packs
  		.slice()
  		.sort( function( a, b ){ return b - a; } );

  	// Loop though each of the pack sizes
  	for( var i = 0; i < packSizes.length; i++ ){

  		// Set the remainder to be the modulus of the current
  		// remainder by the current pack size
  		remainder %= packSizes[i];

  	}

  	// If there was an amount that didn't fit in a pack
  	if( remainder > 0 ){

  		// Increase the target by the difference in the smallest pack size
  		target += Number( packSizes.slice(-1) ) - remainder;

  	}

  	// Loop through all the pack sizes
  	for( var j = 0; j < packSizes.length; j++ ){

  		// Get the current pack size
  		var currentPackSize = packSizes[j];

  		// Count the number of full packs at this size are needed
  		var occurances = Math.floor( target / currentPackSize );

  		// Reduce the target by the allocated amounts
  		target -= currentPackSize * occurances;

  		// Set the pack count in the object
  		packList.push( {
          packSize: currentPackSize,
          quantity: occurances
      } );

  	}

  	// Return the pack object
    this.setState( {
        packList: packList
    } );

  }

  handleChange( event ) {

    // Get the changed ref
    let quantity = event.target.value

    // Enforce type
    if( /^\d{0,10}$/.test( quantity ) ){

      // Update the quantity
      this.setState(
        { quantity: quantity },
        this.calculatePacks
      );

    }

  }

  render() {

    return (

      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">

            <div className="panel panel-default">
              <div className="panel-heading">
                <h3 className="panel-title">Pack Calculator</h3>
              </div>
              <div className="panel-body">

                <div className="row">
                  <div className="col-sm-6">
                    <h4>Instructions</h4>
                    <p>This utility will calculate the minimum number of required packs, for the qiven quantity</p>
                    <input type="number" value={this.state.quantity} onChange={this.handleChange} className="form-control input-md" ></input>
                  </div>
                  <div className="col-sm-6">
                    <PackList packs={this.state.packList}></PackList>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    );

  }

}

WidgetCalculator.propTypes = {
  packList: React.PropTypes.array,
  quantity: React.PropTypes.number,
  packs:    React.PropTypes.array
};

export default WidgetCalculator;
