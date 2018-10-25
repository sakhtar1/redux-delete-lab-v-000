import React, { Component } from 'react';

import { connect } from 'react-redux'

const Band = (props) => {
  const bands = props.bands.map((band, index) =>
    <li delete={this.props.delete)key={index.id}>{band} </li> ); 

  return (
    <div>
     {bands}
    </div>
  )

};

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "DELETE_BAND", action.id })
})

export default connect(mapDispatchToProps)(Band)
