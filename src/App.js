import Movies from './components/movies';
import React from 'react';
import {Route,Redirect} from 'react-router-dom';
import Customers from './components/customers';
import NotFound from './components/notFound';
import Rental from './components/rentals';
import { Switch } from 'react-router-dom';
import NavBar from './components/navBar';
import MovieForm from './components/movieForm';
import './App.css';
import LoginForm from './components/loginForm';
import RegisterForm from './components/registerForm';





function App() {
  return (
   <React.Fragment>
    <NavBar></NavBar>
    <main className='container'>
    <Switch>
    <Route path='/movies/:id' component={MovieForm}></Route>
    <Route path="/movies/new" component={MovieForm}></Route>
    <Route path="/movies" component={Movies}></Route>
    <Route path="/customers" component={Customers}></Route>
    <Route path="/not-found" component={NotFound}></Route>
    <Route path="/rentals" component={Rental}></Route>
    <Route path='/login' component={LoginForm}></Route>
    <Route path='/register' component={RegisterForm}></Route>
    <Redirect from='/' exact to='/movies'></Redirect>
    <Redirect to='/not-found'></Redirect>
    </Switch>
    </main>
    </React.Fragment> 
   
  );
}

export default App;
