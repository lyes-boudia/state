import react from "react"
import { useState } from "react";
import user from "./user.png"
import './App.css';

class App extends  react.Component{
  state = {
    person: {
      fullName: "JHON",
      imgProfile: user,
      profession: "software developper",
      bio: "I am developper..."
    },
    counter: 0,
    show: false
  }
  incrementCounter = () => {
    const {counter} = this.state
    this.setState({counter: counter + 1})
  }
  componentDidMount () {
    setInterval(this.incrementCounter, 1000)
  }
  handleClick = () => this.setState({show: !this.state.show})
render() {
  const styleprofile = {
    color: '#FFFFFF',
    display: 'flex',
    margin: '40px 60px',
    textAlin: 'start',
    justifyitem: 'center'
  }
  return (
    <div className="App">
      <h1>The Component has mounted</h1>
      <h2>{this.state.counter}</h2>
      <button onClick={this.handleClick}>{this.state.show ? 'Hide profile': 'Show profile'}</button>
      {(this.state.show) &&
   <div style={styleprofile}>
    <div>
      <img src={user} alt="Profile"></img>
    </div>
    <div style={{margin: '20px 50px'}}>
<h1>{this.state.person.fullName}</h1>
<h3>{this.state.person.profession}</h3>
<span>{this.state.person.bio}</span>

    </div>
    </div>
}
    </div>
  );
}
}

export default App;
