import React from "react"
import './App.css';

class App extends React.Component {
  constructor()
  {
    super()
    this.state={
      loginState:false
    }

  }

  handlelog=()=>{
    if(!this.state.loginState)
    this.setState({loginState:true})
    else
    this.setState({loginState:false})
  }

  render(){
   let  condition=this.state.loginState;
   
   //using variable to store the element and  using if/else outside of jsx to render specific components
   
   let button
  if(condition)
    button=<LoginButton onClick={this.handlelog}/>
  else
    button=<LogoutButton  onClick={this.handlelog}/>

  return (
    <div className="App">
      <Greetings value={this.state.loginState}/>
     {button}
    </div>
  );
  }
}

function LoginButton(props)
{
  return <button onClick={props.onClick}> Log in </button>
}

function LogoutButton(props)
{ 
  return <button onClick={props.onClick}> Log Out </button>
  
}

function Greetings(prop)
{
// using ternary operator to handle if/else condition inside jsx 
  return(
    <h2>{prop.value? "Please log in" : "Welcome"}</h2>
  )
}

export default App;
