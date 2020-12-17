import {getExclusive, getNew, getPopular, getBooks, search} from "../../store/actions/bookActions";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {Button, Card, CardDeck, } from "react-bootstrap";
import './books.css';
import {Link} from "react-router-dom";

const onMount = props => () => {
    props.getBooks();
}

const BooksPage = (props) => {
    useEffect(onMount(props), []);

    const {books} = props.bookReducer;



    return (
        <div className="container">

            <br/>
            <CardDeck>
                {books.map(book => {
                    return (
                        <Card className="card">
                            <Card.Img variant="top" src={book.image} />
                            <Card.Body>
                                <Link to={`/books/${book.id}`}>
                                    <Card.Title>{book.title}</Card.Title>
                                </Link>
                                <Card.Text className="info">
                                    <p><b>Цена: </b>{book.price}$</p>
                                    <p><b>Количество: </b>{book.count}</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                {book.category.map(cat => {
                                    return (
                                        <small className="text-muted">{cat.name} </small>
                                    )
                                })}
                            </Card.Footer>
                        </Card>
                    )
                    })}
            </CardDeck>
            <br/>
        </div>
    );
}

const mapStateToProps = state => ({
    bookReducer: state.bookReducer
})

const mapDispatchToProps = {
    getBooks,
    search
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);