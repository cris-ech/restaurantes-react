import React from 'react'
import axios from 'axios'
import ReviewCard from "../ReviewCard";


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
      <ul>
        {this.state.Reviews.map(review => {
        if (review.restaurante  == this.state.idApi ) {
        return <li key={`review_${Math.random()}`}>
        <ReviewCard
        name={review.name}
        rate={review.rate}
        valoration={review.review}
        />
        </li>
        }
        })}
      
        
      </ul>

    )
  }
}
export default ReviewList;