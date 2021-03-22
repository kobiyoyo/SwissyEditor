// React
import React from 'react';

// Router
import { Route, Switch } from 'react-router-dom';
import FileDetail from './components/Files/FileDetail';
import FileDisplay from './components/Files/FileDisplay';

// Component
import FileList from './components/Files/FileList';
import Footer from './components/Pages/Footer';
const App: React.FC = () => (
  <main>
    <Switch>
      <Route path="/files" component={FileList} exact />
      <Route path="/file-display/:id" component={FileDisplay} exact />
      <Route path="/file/:id" component={FileDetail} exact />
    </Switch>

  </main>

);

export default App;
