import React , { useState } from "react";
import { Redirect } from "react-router-dom";

const Dashboard = () => {
  const [isAuth, setIsAuth] = useState(true);

  if(!isAuth){
    return <Redirect to = "/login" />
  }
    return<div>
      <h3>Welcome</h3>
      <button onClick = {() => setIsAuth(false)}>Logout</button><br/><br/>
      {/* <div>isAuth: {isAuth.toString()}</div> */}
</div>
}

export default Dashboard;