import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Layout from './components/Layout';
import RockerNew from './pages/RockerNew';
import RockerEdit from './pages/RockerEdit';
import RockerDetails from './pages/RockerDetails';
import About from './pages/About';
import NotFound from './pages/NotFound';

import Rockers from './pages/Rockers';
import Home from './pages/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rockers" component={Rockers} />
            <Route exact path="/rockers/new" component={RockerNew} />
            <Route exact path="/rockers/:rockerId/details" component={RockerDetails} />
            <Route exact path="/rockers/:rockerId/edit" component={RockerEdit} />
            <Route exact path="/about" component={About} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
