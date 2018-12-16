import React from 'react'
import axios from 'axios'

class Sale extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { Oferta : [] };
  }
  
  componentWillMount() {
    const { params } = this.props.match;
    const id = params.id;
    const apiUrl = "http://127.0.0.1:8000/api/ofertas" +"/" + id;
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(response => {
        const { data } = response;
        console.log(data);
        this.setState({ Oferta: data });
      });

      console.log(this.state.Oferta);
  }
  render() {
    //const { params } = this.props.match
    return (
      <div>
        <h1>Ofertas</h1>
        <p>{this.state.Oferta.name}</p>
        <p>{this.state.Oferta.description}</p>
      </div>

    )
  }
}
export default Sale;