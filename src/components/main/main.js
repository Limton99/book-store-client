import React, {useEffect} from 'react';

import './main.css';
import Slider from "../carousel";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ExclusiveBooks from "../exclusive/exclusive-books";
import PopularBooks from "../popular/popular-books";
import NewBooks from "../new/new-books";
import {getBooks, getExclusive, getNew, getPopular, getBook} from "../../store/actions/bookActions";
import {connect} from "react-redux";

const onMount = props => () => {
    props.getExclusive()
    props.getPopular()
    props.getNew()
}

const MainPage = (props) => {
    useEffect(onMount(props), [])

    const {exclusive, popular, newb} = props.bookReducer;

    return (
       <div>
          <Slider />
          <div className="items">
              <ExclusiveBooks exclusive={exclusive}/>
              <PopularBooks popular={popular} />
              <NewBooks newb={newb} />
          </div>
           <br/>
       </div>
    );
}

const mapStateToProps = state => ({
    bookReducer: state.bookReducer
})

const mapDispatchToProps = {
    getExclusive,
    getPopular,
    getNew
}

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);