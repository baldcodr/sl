import React, { Component } from 'react';
import './App.scss';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from './pages/home';
import Music from './pages/music';
import Video from './pages/video';
import Merch from './pages/merch';
import Donate from './pages/Donate';
import './pages/signup';
import Signup from './pages/signup';



class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    };
  }
  render() {
    return (
			<React.Fragment>
				<BrowserRouter>
					<Switch>
						<Route exact path='/' component={Home} />
						<Route path='/donate' component={Donate} />
						<Route path='/music' component={Music} />
						<Route path='/video' component={Video} />
						<Route path='/merch' component={Merch} />
						<Route path='/signup' component={Signup} />
					</Switch>
				</BrowserRouter>
			</React.Fragment>
		);
  }
}

export default App;