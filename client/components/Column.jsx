import React from 'react';
import Cards from './Cards.jsx';
import '../stylesheets/ColumnStyles.css'

class Column extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {

    const cards = this.props.tasks.map((task, i) => {
      return(<Cards key={i + task} task={task}/>)
    })

    return (
      <div className='column'>
        <h2 style={{backgroundColor: this.props.hColor}}>{this.props.title}</h2>
        <div>
          {cards}
        </div>
        <button name={this.props.title} onClick={(e) => this.props.addTask(e)} >Add Card</button>
      </div>
    )
  }
}

export default Column;