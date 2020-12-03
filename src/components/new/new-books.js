import Carousel from "react-multi-carousel";
import React from "react";
import {Card} from "react-bootstrap";

const NewBooks = ({newb}) => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className="new" style={{marginTop: 80}}>
            <h1>New Books</h1>
            <Carousel responsive={responsive}>
                {newb.map(n => {
                    console.log(n.image)

                    return (
                        <Card style={{width: 200}}>
                            <Card.Img variant="top" src={n.image} />
                            <Card.Body>
                                <Card.Title>{n.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {n.category.map(c => {
                                    return (
                                        <small className="text-muted">{c.name} </small>
                                    );
                                })}                            </Card.Footer>
                        </Card>
                    );

                })}
            </Carousel>
        </div>
    );
}

export default NewBooks;
