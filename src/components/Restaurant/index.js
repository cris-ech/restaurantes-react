import React from 'react'
import axios from 'axios'
import SaleRestaurant from '../SaleRestaurant'
import Review from '../Review'
import ReviewList from '../ReviewList'

class Restaurant extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { Restaurant : [],
      idRestaurante : 0 
    };
  }
  
  componentWillMount() {
    const { params } = this.props.match;
    const id = params.id;
    this.setState({idRestaurante : id});
    const apiUrl = "http://127.0.0.1:8000/api/restaurantes" +"/" + id;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(response => {
        const { data } = response;
        console.log(data);
        this.setState({ Restaurant: data });
      });
      console.log("hola")
      console.log(this.state.idRestaurante);
  }
  render() {
    //const { params } = this.props.match
    return (
      <div>
        <h1>Restaurante</h1>
        <p>{this.state.Restaurant.name}</p>
        <p>{this.state.Restaurant.description}</p>
        <div>
        <SaleRestaurant 
        idApi ={this.state.idRestaurante} 
        />
      </div>
      <div>
        <Review
        idApi = {this.state.idRestaurante}
        />
      </div>
      <div>
        <ReviewList
        idApi = {this.state.idRestaurante}
        />
      </div>
      </div>

      //anadir acceso a ofertas del restaurante
      //anadir acceso a reserva
    )
  }
}
export default Restaurant;