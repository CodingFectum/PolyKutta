import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './pages/home/home'
import WhitePaper from './pages/whitepaper/whitepaper'
import PageNotFound from './pages/404/error'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/whitepaper" component={WhitePaper} />
          
          <Route component={PageNotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
