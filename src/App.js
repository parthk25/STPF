import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Aboutus from './pages/Aboutus';
import Portfolio from './pages/Portfolio';
import Services from './pages/Services';
import Contact from './pages/Contact';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Wedd from './pages/Wedd';
import Other from './pages/Other';
import Prewedd from './pages/Prewedd';
import Footer from './pages/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
            {/* <Portfolio />
            <Services />
            <Contact /> */}
          </Route>
          <Route path="/about">
            <Aboutus />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/wedd">
            <Wedd/>
          </Route>
          <Route path="/prewedd">
            <Prewedd/>
          </Route>
          <Route path="/other">
            <Other/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
