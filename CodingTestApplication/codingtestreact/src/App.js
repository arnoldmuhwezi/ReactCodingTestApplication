import logo from './logo.svg';
import './App.css';
import { Home } from './Home';
import { Branch } from './Branch';
import { Transaction } from './Transaction';
import { TransactionType } from './TransactionType';
import { UserAccount } from './UserAccount';
import { Navigation } from './Navigation';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
    return (
    <BrowserRouter>
    <div className="App">
        <h3 className="m-3 d-flex justify-content-center">
                    React Coding Test App
        </h3>

        <Navigation />

        <Switch>
                    <Route path='/' component={Home} exact />
                    <Route path='/branch' component={Branch}/>
                    <Route path='/useraccount' component={UserAccount}/>
                    <Route path='/transaction' component={Transaction}/>
                    <Route path='/transactiontype' component={TransactionType}/>
        </Switch>



        </div>
    </BrowserRouter>
  );
}

export default App;
