import React from 'react';
import { Button,Modal,ModalHeader,ModalBody,Label } from 'reactstrap';

import {  Row, Col } from 'reactstrap';
import { Control, LocalForm, Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);

export default class Comt extends React.Component{

    constructor(props) {
        super(props);
    
        
        this.state = {
            
            isModalOpen: false
        };
        this.handleLogin = this.handleLogin.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
      }
    
    
    handleLogin(values) {
        this.toggleModal();
        console.log('Current State is: ' + JSON.stringify(values));
        alert('Current State is: ' + JSON.stringify(values));
        // event.preventDefault();
    }
      toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
        
      }
      render() {
        return(
           <div>
            <Button outline onClick={this.toggleModal}>Submit comment</Button>
            <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Submit Comment</ModalHeader>
                    <ModalBody>
                    <LocalForm onSubmit={(values) => this.handleLogin(values)} >
                    <Label htmlFor="rating" >Rating</Label>
                            <Row className="form-group">
                                        
                                        <Col md={10}>
                                        <Control.Select model=".rating" id="rating" className="form-control">
                                            <option value="1">1</option>
                                            <option value="2">2</option>
                                            <option value="3">3</option>
                                            <option value="4">4</option>
                                            <option value="5">5</option>
                                            </Control.Select>
                                        </Col>
                            </Row>
                           <Label htmlFor="firstname" >First Name</Label>
                            <Row className="form-group">
                                        
                                        <Col md={10}>
                                            <Control.Text model=".firstname" id="firstname" name="firstname"
                                                placeholder="First Name"
                                                className="form-control"
                                                validators={{
                                                    required, minLength: minLength(3), maxLength: maxLength(15)
                                                }}
                                                 />
                                            <Errors
                                                className="text-danger"
                                                model=".firstname"
                                                show="touched"
                                                messages={{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be 15 characters or less'
                                                }}
                                             />
                                        </Col>
                                    </Row>
                            <Label htmlFor="message" >Your Feedback</Label>
                            <Row className="form-group">
                                        
                                        <Col md={10}>
                                            <Control.Textarea model=".message" id="message" name="message"
                                                rows="12"
                                                className="form-control" />
                                        </Col>
                            </Row>
                            <Row className="form-group">
                                        <Col md={{size:10, offset: 2}}>
                                            <Button type="submit" color="primary">
                                            Send Feedback
                                            </Button>
                                        </Col>
                            </Row>
                                </LocalForm>
                    </ModalBody>
                    </Modal>
                    </div>
                        
            
        );
    }
}
