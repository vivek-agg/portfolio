import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import Screen3 from './screens/Screen3';

const App = () => (
  <>
    <Screen1 />
    <Screen2 />
    <Screen3 />
  </>
);

ReactDOM.render(<App />, document.getElementById('root'));
