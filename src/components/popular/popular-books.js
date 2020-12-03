import Carousel from "react-multi-carousel";
import React from "react";
import {Card} from "react-bootstrap";

const PopularBooks = ({popular}) => {

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
        <div className="popular" style={{marginTop: 80}}>
            <h1>Popular Books</h1>
            <Carousel responsive={responsive}>
                {popular.map(p => {
                    console.log(p.image)

                    return (
                        <Card style={{width: 200, maxHeight: 400}}>
                            <Card.Img variant="top" src={p.image} />
                            <Card.Body>
                                <Card.Title>{p.title}</Card.Title>
                            </Card.Body>
                            <Card.Footer>
                                {p.category.map(c => {
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

export default PopularBooks;
