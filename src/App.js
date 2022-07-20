import Footer from './components/Footer'
import Header from './components/header'
import Projects from './components/projects'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";

function App() {
    return (
        <Router>
            <NavBar />
            <main>
                <Switch>
                    <Route path="/">
                        <Header />
                        <Projects />
                        <Footer />
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}

export default App;