import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateMessage } from './actions/actions';
import { UPDATE_MESSAGE } from './actions/constants';
import './stylesheets/AppStyles.css';
import Column from './components/Column.jsx';

const mapStateToProps = store => ({
  message: store.AppReducer.message
});

const mapDispatchToProps = dispatch => ({
  updateMessage: () => dispatch(updateMessage(UPDATE_MESSAGE))
})

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      titles: ['Winnie', 'Bob', 'Thomas', 'George'],
      headerColors: ['#8E6E95', '#39A59C', '#344758', '#E8741E'],
      cards: {
        Winnie: ['Task 1', 'Task2'],
        Bob: ['Task3', 'Task4'],
        Thomas: ['Task5', 'Task6'],
        George: ['Task7', 'Task8']
      }
    }
    
    this.addTask = this.addTask.bind(this);
  }

  addTask(e) {
    e.preventDefault();
    const eventTarget = e.target;
    const output = window.prompt('What task would you like to add?');
    if (output.length > 0) {
      this.setState(prevState => {
        const cardsObj = prevState.cards;
        cardsObj[eventTarget.name].push(output);
        return Object.assign({}, prevState, { cards: cardsObj })
      })
    }
  }

  render() {

    const titles = this.state.titles.map((name, i) => {
      return (<Column key={i + name} title={name} addTask={this.addTask} hColor={this.state.headerColors[i]} tasks={this.state.cards[name]}/>)
    })

    return (
      <div className='container' >
        {titles}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);