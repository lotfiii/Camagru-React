import React, { Component } from 'react';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Home from './container/Home/Home';
import Profile from './container/Profile/Profile' ;
import NotFound from './components/NotFound';
import Logo from './components/logo';
import InfoPerso from './container/Profile/InfoPerso';
import Connexion from './container/connexion/connexion';
import Gallery from './container/Gallery/Gallery'
import CreatPicture from './container/Creat_picture/CreatPicture';

class Routes extends Component{
    render (){
        return(
            <div>
                <Router history={browserHistory} >
                    <Route path="/" component={Home} />
                    <Route path="/Profile" component={InfoPerso}/>
                    <Route path="/Connexion" component={Connexion}/>
                    <Route path="/Gallery" component={Gallery}/>
                    <Route path="/Creat-picture" component={CreatPicture}/>
                    <Route path="*" component={NotFound}/>
                </Router>
            </div>
        )
    }
}

export default Routes;