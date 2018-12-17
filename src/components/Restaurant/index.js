import React from 'react'
import axios from 'axios'
import SaleRestaurant from '../SaleRestaurant'
import Review from '../Review'
import ReviewList from '../ReviewList'
import { Container, Row, Col,UncontrolledCarousel } from "reactstrap";
import image1 from './1.jpg'
import image2 from './2.jpg'
import image3 from './3.jpg'

const items = [
  {
    src: image1,
    altText: 'Slide 1',
    caption: 'Slide 1',
    header: 'Slide 1 Header'
  },
  {
    src: image2,
    altText: 'Slide 2',
    caption: 'Slide 2',
    header: 'Slide 2 Header'
  },
  {
    src: image3,
    altText: 'Slide 3',
    caption: 'Slide 3',
    header: 'Slide 3 Header'
  }
];

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
      <Container fluid>
      <section style={{backgroundColor:'#fff'}} >
      <div style={{
        paddingBottom: '65'}}>
        <section style={{backgroundColor:'#f4f4f4',paddingBottom:'15px',paddingTop:'15px'}}>
        <h2 style={{fontWeight:'300',
          fontSize: '180%',
          textAlign:'center',
          wordSpacing: '3px',
          letterSpacing:'1px',
          paddingTop:'10px',
        }}>¿Te apetece?</h2>
         <hr  style={{marginBottom:'10px',backgroundColor:'#e67e22',width:'70%'}} className="my-2"></hr>
        <h3 style={{with:'70%',marginLeft:'5%'}}>Restaurante {this.state.Restaurant.name}</h3>
        <p style={{lineHeight:'145%',with:'70%',marginLeft:'5%'}}>{this.state.Restaurant.description}</p>
        <div>
          <UncontrolledCarousel items={items}  indicators='false'/>
        </div>
        </section>
        <section style={{backgroundColor:'#fff',paddingBottom:'15px',paddingTop:'15px'}}>
        <div>
        <SaleRestaurant 
        idApi ={this.state.idRestaurante} 
        />
      </div>
      <section style={{backgroundColor:'#f4f4f4',paddingBottom:'5px',paddingTop:'15px'}}>
      <div>
        <ReviewList
        idApi = {this.state.idRestaurante}
        />
      </div>
      </section>
      </section>
      <section style={{backgroundColor:'#f4f4f4', paddingBottom:'15px'}}>
      <div>
        <Review
        idApi = {this.state.idRestaurante}
        />
      </div>
      </section>
      </div>
      </section>
      </Container>

      //anadir acceso a ofertas del restaurante
      //anadir acceso a reserva
    )
  }
}
export default Restaurant;