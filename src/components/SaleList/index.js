import React from 'react'
import axios from 'axios'
import SaleCard from "../SaleCard";


class SaleList extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = { Sales : [] };
  }
  
  componentWillMount() {
    const apiUrl = "http://127.0.0.1:8000/api/ofertas";
    console.log(apiUrl);
    axios
      .get(apiUrl)
      .then(response => {
        const { data } = response;
        console.log(data);
        this.setState({ Sales: data["hydra:member"] });
      });
      
      
      
  }

  render() {
    //const { params } = this.props.match
    return (
      <ul>
        {this.state.Sales.map(sale => {
        return <li key={`sale_${Math.random()}`}>
        <SaleCard
        name={sale.name}
        description={sale.description}
        />

        </li>
        })}
      </ul>

    )
  }
}
export default SaleList;