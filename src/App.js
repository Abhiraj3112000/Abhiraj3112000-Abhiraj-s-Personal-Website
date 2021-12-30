import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Academics from "./components/pages/Academics";
import Achievements from './components/pages/Achievements';
import Contact from "./components/pages/Contact";
import Experience from "./components/pages/Experience";
import Hireme from "./components/pages/Hireme";
import About from "./components/pages/About";
import Footer from "./components/Footer";
import Hobbies from "./components/pages/Hobbies";
import Tools from "./components/pages/Tools";


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/academics' component={Academics} />
          <Route path='/achievements' component={Achievements} />
          <Route path='/experience' component={Experience} />
          <Route path='/contact' component={Contact} />
          <Route path='/hireme' component={Hireme} />
          <Route path='/about' component={About} />
          <Route path='/hobbies' component={Hobbies} />
          <Route path='/tools' component={Tools} />
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
