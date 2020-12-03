import './App.css';
import Header from "./components/header/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./components/main/main";
import Footer from "./components/footer";
import BooksPage from "./components/books/books";
import BookPage from "./components/book/book";
import LoginPage from "./components/auth/login/login";
import RegisterPage from "./components/auth/register/register";
import AboutUsPage from "./components/about/about-us";
import ContactUsPage from "./components/contacts/contact-us";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route exact path={'/books'} component={BooksPage}/>
                <Route exact path={'/books/:id'} component={BookPage}/>
                <Route exact path={'/about'} component={AboutUsPage}/>
                <Route exact path={'/contact'} component={ContactUsPage}/>
                <Route exact path={'/login'} component={LoginPage}/>
                <Route exact path={'/register'} component={RegisterPage}/>
            </Switch>
            <Footer />

        </Router>
    </div>
  );
}

export default App;
