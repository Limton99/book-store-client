import './book.css';
import {useEffect} from "react";
import {getBook} from "../../store/actions/bookActions";
import {connect} from "react-redux";
import {Card} from "react-bootstrap";

const onMount = props => (id) => {
    props.getBook(props.match.params.id);
}

const BookPage = (props) => {
    useEffect(onMount(props), []);

    const {book} = props.bookReducer;

    const Exclusive = () => {
        if (book.exclusive) {
            return (
                <span className="badge badge-secondary" style={{maxWidth:100}}>Эксклюзив</span>
            );
        }

        return (<span className="badge badge-secondary"></span>);
    }

    return (

        <div className="container">
            <br/>
            <Card>
                    <Card.Title>{book.title}</Card.Title>
                <div className="columns">
                    <img src={`/${book.image}`} className="img" alt={book.title} />
                    <div>
                        <Card.Text>{book.description}</Card.Text>
                            <span><b>Цена: </b>{book.price}$</span>
                            <span><b>Количество: </b>{book.count}</span>
                            <span><b>Просмотры: </b>{book.views}</span>
                        <Exclusive />
                    </div>

                </div>
            </Card>
            <br/>
        </div>


    );
}

const mapStateToProps = state => ({
    bookReducer: state.bookReducer
})

const mapDispatchToProps = {
    getBook,
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);