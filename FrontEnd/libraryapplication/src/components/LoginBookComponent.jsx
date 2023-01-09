import React from 'react';
import './Styles/LoginForm.css'
 
function Login(){
  let name='';
  let password='';
  
let logInSubmission=(event)=>{
  event.preventDefault();
  if(name==='User'){
    if(password==='0000'){
      localStorage.setItem("valid",1)
      let val=JSON.parse(localStorage.getItem("val"));
      if(val===1){
        window.location.href='/add/books';
      }else{
        window.location.href='/book/update';
      }
    }else{
      alert("Invalid Password")
    }
  }
  else{
    alert("Wrong User name")
  }
}
const nameHandler=(e)=>{
  name=e.target.value
}
const passwordHandler=(e)=>{
  password=e.target.value 
}
  return (
    <form action="#" method="" className="box">
      <h1>login</h1>
      <input type="text" name="" placeholder="Username" onChange={nameHandler} />
      <input type="password" name="" placeholder="Password" onChange={passwordHandler} />
      <input type="submit" value="Login" onClick={logInSubmission}/>
    </form>
  );
};

export default Login;
