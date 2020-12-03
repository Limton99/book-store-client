import React from 'react';

import { Carousel } from 'react-bootstrap';


const Slider = () => {


    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images6.fanpop.com/image/photos/40600000/Book-Banner-Header-booknerd-40619467-800-200.jpg"
                        alt="First slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://www.emeraldhs.com/wp-content/uploads/2019/04/8-of-the-Best-Books-All-Travel-Nurses-Must-Read-1.jpg"
                        alt="Third slide"
                    />


                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://magicwriter.co.uk/wp-content/uploads/2017/05/Untitled-design-7.png"
                        alt="Third slide"
                    />


                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slider;