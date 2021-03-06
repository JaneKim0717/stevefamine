import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import NavBar from './components/navbar/NavBar';
import {HomePage} from './components/pages/HomePage';
import Projects from './components/pages/Projects';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Blog from './components/pages/Blog'
import Footer from './components/pages/Footer';
import Terms from './components/pages/Terms';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Switch>
        <Route path='/' exact component={HomePage}/>
        <Route path='/projects' exact component={Projects} />
        <Route path='/blog' exact component={Blog} />
        <Route path='/about' exact component={About} />
        <Route path='/contact' exact component={Contact} />
        <Route path='/terms' exact component={Terms} />
      </Switch>
      <Footer />

    </Router>
    </>
  );
}

export default App;
