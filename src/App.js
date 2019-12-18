import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import People from "./components/pages/People.jsx";
import styled from "styled-components";
import "font-awesome/css/font-awesome.css";
import "./App.css";
const Profile = lazy(() => import("./components/pages/Profile.jsx"));

const Container = styled.div`
  border-top: 0.7rem solid #6050dc;
`;

function App() {
  return (
    <Suspense fallback={<h1>loading...</h1>}>
      <Container>
        <Switch>
          <Route exact path="/" component={People}></Route>
          <Route exact path="/profile/:id" component={Profile}></Route>
        </Switch>
      </Container>
    </Suspense>
  );
}

export default App;
