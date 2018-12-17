import React from 'react';
import axios from 'axios';
import { Col, Button, Form, FormGroup, Label, Input, FormText,Container } from 'reactstrap';

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      restaurante : "/api/restaurantes/" + this.props.idApi,
      name : "",
      rate : 0,
      review : ""
    
    };
  }

  handleChangeName = event => {
    this.setState({ name: event.target.value });
  }
  
  handleChangeRate = event => {
    this.setState({ rate: event.target.value });
  }
  
  handleChangeReview = event => {
    this.setState({ review: event.target.value });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const rateNumber = this.state.rate * 1;

    const valoration = {
      restaurante : this.state.restaurante,
      name : this.state.name,
      rate : rateNumber,
      review : this.state.review
      
    };

    console.log(valoration);
    const apiUrl = "http://127.0.0.1:8000/api/valorations";
    console.log(apiUrl);

    axios.post(apiUrl,  valoration )
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    return (
      <Container fluid>
      <h2 style={{fontWeight:'300',
      fontSize: '180%',
      textAlign:'center',
      wordSpacing: '3px',
      letterSpacing:'1px',
      paddingTop:'10px',
    }}>
    Deja tu opinión</h2>
    <hr  style={{marginBottom:'10px',backgroundColor:'#e67e22'}} className="my-2"></hr>
      <div>
        <Form onSubmit={this.handleSubmit}>
        <FormGroup row>
          <Label for="name" sm={3}>Nombre: </Label>
            <Col sm={7}>
            <Input type="text" name="name" id="name" onChange={this.handleChangeName} />
            </Col>
          </FormGroup>
          <FormGroup row>
          <Label for="rate" sm={3}>Puntuación:</Label>
          <Col sm={7}>
          <Input type="select" name="rate" id="rate" onChange={this.handleChangeRate} >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="review" sm={3}>Opinion: </Label>
            <Col sm={7}>
            <Input type="textarea" name="review" id="review" onChange={this.handleChangeReview} />
            </Col>
          </FormGroup>
          <FormGroup check row>
          <Col sm={{ size: 10 }}>
          <div style={{textAlign:'center', paddingButton:"10px"}}>
            <Button type="submit" style={{borderColor:'#e67e22', backgroundColor:'#e67e22'}}>Enviar</Button>
          </div>
          </Col>
        </FormGroup>
        </Form>
      </div>
      </Container>
    )
  }
}

export default PersonList;