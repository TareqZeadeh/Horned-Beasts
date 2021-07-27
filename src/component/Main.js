import React from 'react';
import HornedBeast from './HornedBeast'
import CardGroup from 'react-bootstrap/CardGroup';
import { Col } from "react-bootstrap";
// import SelectedBeast from './SelectedBeast';
class Main extends React.Component {
    render() {


        return (
            <>

                <CardGroup>
                    {this.props.data.map((aminal, i) => {
                        
                        return <>
                            <Col lg={4}>
                                <HornedBeast title={aminal.title} url={aminal.image_url} description={aminal.description} modHandler={this.props.modHandler} />
                            </Col>
                        </>
                    })}

                </CardGroup>


            </>
        )
    }
}

export default Main;


                // <HornedBeast title='rhino' url='https://media.ngalarabiya.com/store/archive/image/2021/5/4/16a0e280-9368-43a0-9255-7d2eaba2e9f4.jpg?format=jpg&v=1&preset=w1400' description='This rihno is a powerfull herbivorous creature' />