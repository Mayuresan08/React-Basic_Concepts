
import './App.css';
import React  from 'react';

class App extends React.Component
{ 
  constructor()
  {
    super()
    this.state={counter:0}
    this.increment=this.increment.bind(this)
  }

increment()
{
  
  this.setState(prevState=>{
    return  {counter: prevState.counter+1}
  })
  console.log(this.state.counter)
}
componentDidUpdate()
{
  console.log(this.state.counter)
}
decrement=()=>
{
  if(this.state.counter >0)
  {
  this.setState(prevState=>{
    return { counter: prevState.counter-1}
  })
   }
}

reset=()=>{
  this.setState({counter:0})
}

  render()
  {
    return(
      <div className="container">
        <div className="innerContainer">
          <h2>Counter</h2>
           <input type="text" id="counterValue" disabled value={this.state.counter}></input> 
           <div className="buttonClass">
             <div><button onClick={this.increment}>+</button></div>
             <div><button  onClick={this.decrement}>-</button></div>
           </div>
           <div className="reset" onClick={this.reset}><button>reset</button></div>
        </div>
      </div>
    )
  }
}

export default App;
