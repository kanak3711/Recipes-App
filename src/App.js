import React from 'react';
import './App.css';
import {Navbar,NavbarBrand} from 'reactstrap';
import Main from './components/MainComponent';
import{DISHES} from './shared/dishes';
class App extends React.Component {
  
render(){
  return (
    <div className="App">
      <Main />
    </div>
  );
 }
}

export default App;
