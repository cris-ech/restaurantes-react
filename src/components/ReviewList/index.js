import React from 'react'
import axios from 'axios'
import ReviewCard from "../ReviewCard";
import { Container, Row, Col } from "reactstrap";


class ReviewList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      Reviews : [],
      idApi : "/api/restaurantes/" + this.props.idApi
    
    };
  }
  
  componentWillMount() {
    const apiUrl = "http://127.0.0.1:8000/api/valorations";
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(response => {
        const { data } = response;
        console.log(data);
        this.setState({ Reviews: data["hydra:member"] });
      });
      console.log(this.props.idApi);
     
      console.log("eyyy");
      console.log(this.props.idApi);
      console.log(this.state.idApi);
      
      
  }

  render() {
    //const { params } = this.props.match
    return (
      <Container fluid>
      <h2 style={{fontWeight:'300',
      fontSize: '180%',
      textAlign:'center',
      wordSpacing: '3px',
      letterSpacing:'1px',
      paddingTop:'10px',
    }}>
    ¿Que opinan sus clientes?</h2>
    <hr  style={{marginBottom:'10px',backgroundColor:'#e67e22'}} className="my-2"></hr>
        {this.state.Reviews.map(review => {
        if (review.restaurante  == this.state.idApi ) {
        return <box>
        <ReviewCard
        name={review.name}
        rate={review.rate}
        valoration={review.review}
        />
        </box>
        }
        })}
      
        
      </Container>

    )
  }
}
export default ReviewList;