import {getBooks, search} from "../../store/actions/bookActions";
import {connect} from "react-redux";
import {useEffect, useState} from "react";
import {Card, CardColumns, CardDeck,} from "react-bootstrap";
import './books.css';
import {Link} from "react-router-dom";
import {addToCart} from "../../store/actions/cartActions";

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
            <CardColumns>
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
                                    <button onClick={() => props.addToCart(book.id)} className="btn btn-info add-to-cart">Add to cart</button>
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
            </CardColumns>
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
    addToCart,
    search
}

export default connect(mapStateToProps, mapDispatchToProps)(BooksPage);