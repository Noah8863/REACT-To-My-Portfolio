import Footer from './components/Footer'
import Header from './components/header'
import Projects from './components/projects'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./App.scss";

function App() {
    return (
        <Router>
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