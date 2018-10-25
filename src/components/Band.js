import React, { Component } from 'react';

class Band extends Component {
import { connect } from 'react-redux'

  render() {
    return(
      <div>
        Band Component
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  addBand: name => dispatch({ type: "DELETE_BAND", action.id })
})

export default connect(mapDispatchToProps)(Band)

