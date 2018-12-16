import React from 'react';
import axios from 'axios';

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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="name" onChange={this.handleChangeName} />
          </label><br/>
          <label>
            Rate:
            <input type="text" name="rate" onChange={this.handleChangeRate} />
          </label><br/>
          <label>
            Opinion:
            <input type="text" name="review" onChange={this.handleChangeReview} />
          </label><br/>
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}

export default PersonList;