import React from 'react';
import {BrowserRouter, Switch,  Route, Redirect} from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import Sudoku from './pages/sudoku/Sudoku';
import Contact from './pages/contact/Contact';
import Readme from './pages/readme/Readme';


const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Sudoku} />
          <Route path={'/contact'} component={Contact} />
          <Route path={'/readme'} component={Readme} />
          <Redirect to={'/'} />
        </Switch>
      </BrowserRouter>
    </Provider> 
  )
}

export default App;


