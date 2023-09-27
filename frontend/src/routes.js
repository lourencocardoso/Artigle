import React from "react";
import { isaAutenticated } from "./auth";
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom'
import Home from "./pages/home";
import VisualizeCard from "./pages/card/index";
const Routes = ()=> (
   <BrowserRouter>
          <Switch>
            <Route exact path="/"  component={()=> <Home />}/>
            <Route exact path="/card"  component={()=>< VisualizeCard />}/>
           
          </Switch>
   </BrowserRouter>
)

export default Routes;