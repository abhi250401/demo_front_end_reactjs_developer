
import Form from './Components/Form';
import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Form} exact />





      </Switch>
    </div>
  );
}

export default App;
