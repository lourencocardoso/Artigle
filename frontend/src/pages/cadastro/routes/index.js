import { Fragment } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Signup from "../Signup";
import Signin from "../Signin";
import Home from "../Home";
import useAuth from "../hooks/index";

const Private = ({Item}) =>{
  const { signed } = useAuth();

  return signed > 0 ? <Item /> : <Signin />
}

 const RoutesApp = () => {
  return(
    <BrowserRouter>
    <Switch>
      <Route exact path="/home"  component={()=> <Private Item={Home}/>}/>
      <Route  path="/signin"  component={()=> <Signin />}/>
      <Route exact path="/signup"  component={()=> <Signup />}/>
      <Route exact path="*"  component={()=> <Signin />}/>
    </Switch>
</BrowserRouter>
  );
}

export default RoutesApp