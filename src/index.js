import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content'
//import App from './App';


class Lifecycle extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      data: 0
    }
    this.setNewValue = this.setNewValue.bind(this)
  }

  setNewValue() {
    this.setState({ data: this.state.data + 1 })
  }

  render(){
    return (
      <div>
        <button onClick={ this.setNewValue }>Keep Adding</button>
        <Content Number={ this.state.data }></Content>
      </div>
      
    )
  }
}

ReactDOM.render(<Lifecycle />, document.getElementById('root'))

setTimeout(() => {
  ReactDOM.unmountComponentAtNode(document.getElementById('root'));}, 10000)





    
  
  

