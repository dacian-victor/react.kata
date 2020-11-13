import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
 
import Home from './components/Home';
import Find from './components/Find';
import Update from './components/Update';
import Create from './components/Create';
import Delete from './components/Delete';
import Error from './components/Error';
import Navigation from './components/Navigation';
 
class App extends Component {
  render() {
    return (      
       <HashRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/find" component={Find}/>
             <Route path="/create" component={Create}/>
             <Route path="/update" component={Update}/>
             <Route path="/delete" component={Delete}/>
            <Route component={Error}/>
           </Switch>
        </div> 
      </HashRouter>
    );
  }
}
 
export default App;