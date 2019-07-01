import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// synchronous components
import Loading from '../components/loading/index.js';

// asynchronous components
const Home = lazy(() => import('../pages/home/index.js'));
const App = lazy(() => import('../pages/app/index.js'));

const BasicRoute = () => (
  <Router> 
    <Suspense fallback={<Loading />}>
      <Route exact path="/" component={App}/>
      <Route path="/home/:id" component={Home}/>
    </Suspense>
  </Router>
);


export default BasicRoute;