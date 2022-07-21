import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer'
import Header from './components/header'
import Projects from './components/projects'
import Contact from './components/contact'
import './App.scss';

function App() {
    return (
        <Router>
                {/* Added a swtich component so the DOM makes sure that it only loads ONE page */}
                <Switch>
                    <Route exact path="/">
                        <Header />
                        <Projects />
                        <Footer />
                    </Route>
                    <Route exact path="/contact">
                        <Contact />
                    </Route>
                </Switch>
        </Router>
    )
}

export default App;