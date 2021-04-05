// React
import React from 'react';

// Router
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FileForm from '../components/Files/FileForm';
import FileDetail from '../components/Files/FileDetail';

// Files Component
import FileList from '../components/Files/FileList';

// Pages Component
import Footer from '../components/Pages/Footer';
import NavBar from '../components/Pages/NavBar';
import Home from '../components/Pages/Home';
// Router

const App: React.FC = () => (
  <Router>
    <main>

      <NavBar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/files" component={FileList} exact />
        <Route path="/display/:id" component={FileDetail} exact />
        <Route path="/display/edit/:id" component={FileForm} exact />
        <Route path="/add/" component={FileForm} exact />
      </Switch>
      {/* <Footer /> */}
    </main>
  </Router>

);

export default App;
