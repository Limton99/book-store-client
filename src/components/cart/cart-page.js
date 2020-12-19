import React, {useEffect} from "react";
import {addToCart, deleteFromCart, deleteOneFromCart, getCart} from "../../store/actions/cartActions";
import { connect } from "react-redux";

const onMount = props => () => {
    props.getCart();
}

const CartPage = (props) => {

    useEffect(onMount(props), []);


    const renderRow = (item, idx) => {


        return (
            <tr key={item.id}>
                <td>{idx + 1}</td>
                <td>{item.bookTitle}</td>
                <td>{item.bookCount}</td>
                <td>${item.bookPrice}</td>
                <td>
                    <button className="btn btn-success" onClick={() => props.addToCart(item.book_id)}>+</button>
                    <button className="btn btn-warning" onClick={() => props.deleteOneFromCart(item.id)}>-</button>
                    <button className="btn btn-danger" onClick={() => props.deleteFromCart(item.id)}>Удалить</button>
                </td>
            </tr>
        );
    };
    return (

        <div className="shopping-cart-table">
            <br/>
            <h2>Your order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Item</th>
                        <th>Count</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                { props.items && props.items.map(renderRow) }
                </tbody>
            </table>
            <div className="total">
                    Total: ${props.total}
            </div>
            <br/>
        </div>
    );
};

const mapStateToProps = state => ({
        items: state.cartReducer.cartItems,
        total: state.cartReducer.orderTotal
});

const mapDispatchToProps = {
    getCart,
    addToCart,
    deleteFromCart,
    deleteOneFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
