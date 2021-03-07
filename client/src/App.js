import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Wrapper from './components/Wrapper/wrapper';
import Footer from './components/Footer/footer';
import PushDiv from './/components/Footer/pushDiv';
import Landing from './components/pages/Landing/landing';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Router>
            <div className='App'>
                <Wrapper />
                <div className='appContainer'>
                    <Switch>
                        <Route exact path={["/", "/landing"]}>
                            <Landing />
                        </Route>
                    </Switch>
                </div>
                <PushDiv />
            </div>
            <Footer />
        </Router>
    );
}

export default App;
