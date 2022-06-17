import Navbar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Create from './Create'
import BlogDetails from "./BlogDetails"
import NotFound from './Notfound';
function App() {
  return (
    //this is the div that we send to index.js to display it the browser
    //we use this router,switch, route to make different links in a single time without having to request the server multiple times
    
    
    
    //in the third route we acknowledged the path as a variable so it can be simply any thing and it will output the same component
    //the last route 
 <Router>
    <div className="App">

      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/create">
            <Create/>
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails/>            
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>

        </Switch>
      </div>
    </div>
    </Router>
  );
}
//we export this to import it later in the index.js
export default App;
