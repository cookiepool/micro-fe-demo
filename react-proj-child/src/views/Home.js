import React from 'react';
import styles from '../assets/css/home.scss';

import logo from '../assets/logo.svg';

class Home extends React.Component {
  render() {
    return (
      <div className={ styles['all-wraper'] }>
        <img src={logo} className={ styles['logo'] } alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </div>
    )
  }
}

export default Home;