import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header'
import Home from './Components/Home/Home'
import Courses from './Components/Courses/Courses'
import About from './Components/About/About'
import Notfound from './Components/Notfound/Notfound';
import Footer from './Components/Footer/Footer';




function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/courses'>
            <Courses></Courses>
          </Route>
          <Route path='/about'>
            <About></About>
          </Route>
          <Route path='*'>
            <Notfound></Notfound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
