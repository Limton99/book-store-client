import './App.css';
import Header from "./components/header/header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import MainPage from "./components/main/main";
import Footer from "./components/footer";
import BooksPage from "./components/books/books";
import BookPage from "./components/book/book";

function App() {
  return (
    <div className="App">
        <Router>
            <Header />
            <Switch>
                <Route exact path={'/'} component={MainPage}/>
                <Route exact path={'/books'} component={BooksPage}/>
                <Route exact path={'/books/:id'} component={BookPage}/>
            </Switch>
            <Footer />

        </Router>
    </div>
  );
}

export default App;
