import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMessage } from './actions/actions';
import { UPDATE_MESSAGE } from './actions/constants';

const mapStateToProps = store => ({
  message: store.AppReducer.message
});

const mapDispatchToProps = dispatch => ({
  updateMessage: () => dispatch(updateMessage(UPDATE_MESSAGE))
})

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.message}</div>
        <button onClick={this.props.updateMessage.bind(this)}>Update Message</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);