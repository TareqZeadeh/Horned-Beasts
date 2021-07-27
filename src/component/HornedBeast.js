import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card';
// import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
// import SelectedBeast from './SelectedBeast';



class HornedBeast extends React.Component {


    constructor(props) {

        super(props);
        this.state = {
            Numberofvotes: 0,
        }
    }

    incrementNumOfPets = () => {
        this.setState({
            Numberofvotes: this.state.Numberofvotes + 1
        })
    };
    
    DataToModal = () => {
        this.props.modHandler(this.props.title,this.props.url,this.props.description,true);
    }

    render() {
        return (

            <div>

                {/* <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                            This is a wider card with supporting text below as a natural lead-in to
                            additional content. This content is a little bit longer.
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">Last updated 3 mins ago</small>
                    </Card.Footer>
                </Card> */}
                <CardGroup>
                    {/* <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 3 }).map((_, idx) => (
                            <Col> */}
                                <Card style={{ width: "15%", height: "25%", margin:"5%" }} onClick={this.incrementNumOfPets}>
                                    <Card.Img  variant="top" onClick={this.DataToModal} src={this.props.url} width='33px' height='250px'/>
                                    <Card.Body>
                                        <Card.Title>{this.props.title}</Card.Title>
                                        <Card.Text>
                                            Number of votes ❤️: {this.state.Numberofvotes}
                                        </Card.Text>
                                        <Card.Footer>
                                            {this.props.description}
                                        </Card.Footer>
                                    </Card.Body>
                                </Card>
                             {/* </Col> */}
                        {/* ))} */}
                    {/* </Row> */}
                </CardGroup> 


                {/* <h2>{this.props.title} </h2>

                <img src={this.props.url} alt={this.props.title} />

                <p>{this.props.description}</p> */}

            </div>
        )
    }
}

export default HornedBeast;