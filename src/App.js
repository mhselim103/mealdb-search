import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Restaurant from './Components/Restaurant/Restaurant';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Notfound from './Components/Notfound/Notfound';
import Features from './Components/Features/Features';
import MealDetails from './Components/MealDetails/MealDetails';


function App() {
  return (
    <div className="container">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/home">
            <Restaurant></Restaurant>
          </Route>
          <Route exact path="/">
            <Restaurant />
          </Route>
          <Route exact path="/restaurants/:idMeal">
              <MealDetails></MealDetails>
          </Route>
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/features">
            <Features></Features>
          </Route>
          <Route path="*">
            <Notfound></Notfound>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
