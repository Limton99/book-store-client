import Carousel from "react-bootstrap/Carousel";
import Slider from "../carousel";
import './about-us.css';

function onChange(a, b, c) {
    console.log(a, b, c);
}

const AboutUsPage = () => {
    return (
        <div>
            <Slider />

            <br/>
            <div className="center">
                <div className="child">
                    <div span={9} >
                        <div className="image">
                            <img src="https://www.rd.com/wp-content/uploads/2019/11/shutterstock_509582812-e1574100998595.jpg" />
                        </div>
                    </div>
                    <div span={15}>
                        <div className="goals">
                            <h2>Our Goals</h2>
                            <p>There are readers out there who can benefit a lot from this practice. Buying a new book costs more than borrowing it.
                                A book exchange app provides you with an opportunity to earn by lending your books.
                                The more you share, the more trees you save. Book exchange apps, when used appropriately can save a significant amount of trees. If only a hundred people lend, borrow or sell used books, almost two trees can be saved.
                                Online bookstores have the advantage of being able to provide a wide range of books while minimizing inventory costs, but customers must wait several days for their books. Physical bookstores allow consumers to immediately obtain their books, but consumers must pay a transportation cost to visit the store. We can find the condition such that online bookstores charge a lower price than physical bookstores and take a larger market share, and attract a higher proportion of consumers who prefer variety.</p>
                        </div>
                    </div>
                </div>

            </div>
            <br/>


            {/*<div className="cust">*/}
            {/*    <div className="center-container">*/}
            {/*        <h2>What People say</h2>*/}

            {/*        <img src="" />*/}
            {/*        <p>*/}
            {/*            “  Our farm strictly combines the traditions of organic farming with the latest innovations to make our products healthy and safe for the clients.  ”*/}
            {/*        </p>*/}

            {/*        <h3>Zhann Bolatova</h3>*/}
            {/*        <h5>Regular Client</h5>*/}
            {/*    </div>*/}
            {/*</div>*/}


            {/*<div className="partners"><h2>Our Partners</h2></div>*/}

            {/*<div className="site-card-wrapper container">*/}
            {/*    <Row gutter={16}>*/}
            {/*        <Col span={8} className="partner">*/}
            {/*            <Card*/}
            {/*                className="partner"*/}
            {/*                style={{ width: 300 }}*/}
            {/*                cover={*/}
            {/*                    <img src="https://lh3.googleusercontent.com/0H4TtEK9jlKGGPIfeJS199Siqq1i7COPEOFEDgvarZBvWcDStV4XuV4tfDIhzl3VLgA"/>*/}
            {/*                }*/}
            {/*            >*/}
            {/*            </Card>*/}

            {/*        </Col>*/}
            {/*        <Col span={8} className="partner">*/}
            {/*            <Card*/}
            {/*                className="partner"*/}
            {/*                style={{ width: 300 }}*/}
            {/*                cover={*/}
            {/*                    <img src="https://lh3.googleusercontent.com/0H4TtEK9jlKGGPIfeJS199Siqq1i7COPEOFEDgvarZBvWcDStV4XuV4tfDIhzl3VLgA"/>*/}
            {/*                }*/}

            {/*            >*/}

            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*        <Col span={8} className="partner">*/}
            {/*            <Card*/}
            {/*                className="partner"*/}
            {/*                style={{ width: 300 }}*/}
            {/*                cover={*/}
            {/*                    <img src="https://lh3.googleusercontent.com/0H4TtEK9jlKGGPIfeJS199Siqq1i7COPEOFEDgvarZBvWcDStV4XuV4tfDIhzl3VLgA"/>*/}
            {/*                }*/}

            {/*            >*/}

            {/*            </Card>*/}
            {/*        </Col>*/}
            {/*    </Row>*/}
            {/*</div>*/}
        </div>
    );
}

export default AboutUsPage;