import './App.css';
import Homepage from './components/Homepage';
import Books from './components/Books';
import BookClub from './components/BookClub';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Reviews from './components/Reviews';
import SearchBar from './components/SearchBar';
import SignIn from './components/SignIn';
import Register from './components/Register';
import Profile from './components/Profile';
import CommentContainer from './containers/CommentCont';
import { Route, Switch } from 'react-router-dom';
// import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
// import 'mdbreact/dist/css/mdb.css';
import UserInvent from './containers/UserInvent';

function App() {
  return (
    <div className="App">
      <Switch>
         <Route exact path="/" component={Homepage} />
         <Route path="/about" component={AboutUs} />
         <Route path="/contact" component={ContactUs} />
         <Route path="/reviews" component={Reviews} />
         <Route path="/books" component={Books} />
         <Route path="/bookclub" component={BookClub} />
         <Route path="/searchbar" component={SearchBar} />
         <Route path="/signin" component={SignIn} />
         <Route path="/register" component={Register} />
         <Route path="/profile" component={Profile} />
         <Route path="/individualbook" component={CommentContainer} />
         <Route path="/trade" component={UserInvent} />
      </Switch>
    </div>
  );
}
export default App;