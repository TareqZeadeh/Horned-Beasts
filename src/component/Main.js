import React from 'react';
import HornedBeast from './HornedBeast'
import { Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import CardGroup from 'react-bootstrap/CardGroup';


class Main extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            numofhorns: 0,
        }

    }

    updatenumofhorns = (event) => {
        this.setState({
            numofhorns:parseInt(event.target.value),
        })
    }


    render() {






        return (
            <>

                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>How Many Horns Do You Prefer?</Form.Label>
                        <Form.Control as='select' name='progLang' onChange={this.updatenumofhorns}>
                            <option value='0' selected>All</option>
                            <option value='1'>One</option>
                            <option value='2'>Two</option>
                            <option value='3'>Three</option>
                            <option value='100'>WOW</option>
                        </Form.Control>
                    </Form.Group>
                </Form>


                <CardGroup>



                    {this.props.data.filter(horns => {
                        if (this.state.numofhorns=== 0) {
                            return true;
                        }
                        else
                        {
                        return horns.horns === this.state.numofhorns;
                    }

                    }).map((aminal, i) => {

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

                // {
                //     let numofhorns = this.props.data.filter(horns => {
                //         if (horns.horns === this.state.numofhorns) {
                //             return true;
                //         }
                //         return numofhorns;
                //     }



                // let numofhorns = this.props.data.filter()(horns => {
                //     if (horns.horns === this.state.numofhorns) {
                //         return true;
                //     }
                //     return numofhorns;
                // }
        // 