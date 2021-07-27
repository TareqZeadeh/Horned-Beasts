import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';



class SelectedBeast extends React.Component {
    
    modClose = () =>{
        this.props.hidwMod(false);
      }
    
    
    
    render() {

       
        return (
            <>   <Modal show={this.props.showMod} onHide={this.modClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{this.props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                <img src={this.props.imgURL} alt={this.props.title} width='450px' height='250px'/> 
                <p>{this.props.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.modClose}>
                        Close
                    </Button>
                
                </Modal.Footer>
            </Modal>
            </>
        )


    }
}
    export default SelectedBeast;