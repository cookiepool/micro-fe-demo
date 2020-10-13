import React from 'react';
import { HashRouter as Router, Link, Switch } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import routes from './router/router';

import styles from './App.scss';

import PreLoading from './components/preLoading/PreLoading';

// 做一个判断
const base = window.__POWERED_BY_QIANKUN__ ? "/react-proj-child" : "";

function App() {
  return (
    <div className={ styles['app'] }>
      <Router basename={ base }>
        <div className={ styles['nav'] }>
          <Link to={ '/'}><span>Home</span></Link>
          <span className={ styles['line'] }></span>
          <Link to={ '/about'}><span>About</span></Link>
        </div>
        <div className={ styles['content'] }>
          <Switch>
            <React.Suspense fallback={ <PreLoading />}>
              { renderRoutes(routes) }
            </React.Suspense>
          </Switch>
        </div>
        
      </Router>
    </div>
    
  );
}

export default App;
