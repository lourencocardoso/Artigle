import React from "react";
import { useRouteMatch } from "react-router-dom";
import Button from "./components/Button";
import Input from "./components/Input";
import useAuth from "./hooks";
import * as C from "./styles";


const Home = () => {
  const { signout } = useAuth();
  const navigate = useRouteMatch();

  return (
    <C.Container>
      <C.Title>Home</C.Title>
      <Button Text="Sair" onClick={() => [signout(), navigate("/")]}>
        Sair
      </Button>
    </C.Container>
  );
};

export default Home