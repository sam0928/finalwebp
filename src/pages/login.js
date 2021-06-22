import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Redirect } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAuth, setIsAuth] = useState(true);

  if(!isAuth){
    return <Redirect to = "/dashboard" />
  }

  function validateForm() {
    return email.length > 0 && password.length > 0 && email.includes('@');
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Form.Group size="lg" controlId="password">
          <Form.Label>Password: </Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <br></br>
        <Button block size="lg" type="submit" disabled={!validateForm()} onClick = {() => setIsAuth(false)}>
          Login
        </Button>
      </Form>
    </div>
  );
}

// import React , { useState } from "react";
// import { Redirect } from "react-router-dom";

// const Login = () => {
//   const [isAuth, setIsAuth] = useState(true);

//   if(!isAuth){
//     return <Redirect to = "/dashboard" />
//   }
  
//     return<div>
//       <h3>This is Login page.</h3>
//       <input placeholder = "Enter email" type = "text" /><br />
//       if ("text") {
        
//       }
//       <input placeholder = "Enter password" type = "password" /><br /><br />
//       <button onClick = {() => setIsAuth(false)}>Login</button><br/><br/>
// </div>
// }

// export default Login;
