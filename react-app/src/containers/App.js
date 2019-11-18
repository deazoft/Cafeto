import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
/* COMPONENTS */
//import Navigation from './components/Navigation';
import Form from '../componentes/Form';
import movieSelector from '../componentes/moviesSelector';
import movieSelectd from '../componentes/movieSelected';


export default () => (
    <Router>
       

        <Switch>
            <Route exact path="/" component={Form} />
            <Route path="/movies" component={movieSelector}/>
            <Route path="/movie/:id" component={movieSelectd}/>
            <Route render={() => (
                <div className="container col-md-6 my-5">
                    <h2 className="text-center text-danger">
                        404 Not found
                    </h2>
                </div>
            )} />
        </Switch>
    </Router>
);
