import React from "react";
import Login from "./Components/Login/Login";
import SignUp from "./Components/Signup/Signup";
import { Route, Switch } from "react-router-dom";

function App() {
  return(
    <div>
    <Switch>
       <Route exact path="/login" component={Login} />
       <Route exact path="/signup" component={SignUp} />
       {/* <Route component={error}/> */}
      </Switch>   
       {/* <SignUp />
       <Login /> */}
       </div>
  );
}

export default App;
