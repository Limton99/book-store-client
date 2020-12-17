import React, {useEffect} from "react";
import {deleteFromCart, getCart} from "../../store/actions/cartActions";
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
                {/*{console.log(item.bookPrice.reduce((a, b)=>a+b, 0))}*/}
                <td><button className="btn btn-danger" onClick={deleteFromCart(item.id)}>Удалить</button></td>
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
                { props.items.cart && props.items.cart.map(renderRow) }
                </tbody>
            </table>
            <div className="total">
                    Total: ${props.items.total}
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
    deleteFromCart
};


export default connect(mapStateToProps, mapDispatchToProps)(CartPage);
