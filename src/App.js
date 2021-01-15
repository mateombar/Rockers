import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BadgeNew from './pages/BadgeNew';
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
            <Route exact path="/rockers/new" component={BadgeNew} />
            <Route component={NotFound}/>
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
