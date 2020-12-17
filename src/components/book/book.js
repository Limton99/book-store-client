import './book.css';
import {getBook, saveComment} from "../../store/actions/bookActions";
import {connect} from "react-redux";
import {Card} from "react-bootstrap";
import {useEffect, useState} from "react";

const onMount = props => () => {
    console.log(props.match.params.id)
    props.getBook(props.match.params.id);
}

const BookPage = (props) => {
    const id = props.match.params.id
    useEffect(onMount(props), []);

    // useEffect(() => {
    //     props.getBook(props.match.params.id);
    // })
    const [formData, setFormData] = useState({
        book_id: props.match.params.id,
        comment: ``
    })

    const handleChange = e => {
        setFormData({...formData, [e.target.name]: e.target.value})
        console.log(e.target.value)
    }

    const handleSave = (e) => {
        console.log(formData)
        props.saveComment(formData)
        // e.preventDefault()
    };

    const {book} = props.bookReducer;

    const Exclusive = () => {
        if (book.exclusive) {
            return (
                <span className="badge badge-secondary" style={{maxWidth:100}}>Эксклюзив</span>


            );
        }

        return (<span className="badge badge-secondary"></span>);
    }



    const commentForm = (
        <form ><div className="form-group">
            <label className="float-left">Comment</label>
            <textarea name='comment' className="form-control" placeholder="Enter comment" value={formData.comment} onChange={handleChange} />
            <button type="submit" className="btn btn-primary btn-block" onClick={handleSave}>Submit</button>
        </div></form>
    );



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
                            <span><b>Категории: </b>{book.category && book.category.map(cat => <span>{cat.name} </span>)}</span>
                        <Exclusive />
                    </div>
                </div>
            </Card>
            <br/>
            <div className="comments">
                <p style={{textAlign: "left"}}>{book.comment && book.comment.map(com => {
                    return (
                        <p><b>{com.author}: </b>{com.comment}</p>
                    )
                })}</p>
                {props.isAuth ? commentForm : ''}
            </div>


            <br/>
        </div>


    );
}


const mapStateToProps = state => ({
    bookReducer: state.bookReducer,
    isAuth: state.authReducer.isAuth
})

const mapDispatchToProps = {
    getBook,
    saveComment
}

export default connect(mapStateToProps, mapDispatchToProps)(BookPage);