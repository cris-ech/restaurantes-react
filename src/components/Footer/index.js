import React from 'react'
import {Row,Container} from 'reactstrap'

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }
    
  render() {
  return(<section><div  style={{ backgroundColor:'#333',
padding:'50px',
fontSize:'80%'

}} >
    <p style={{color:'#888', textAlign:'center',marginTop:'20px'}}>
        Copyright &copy; 2018 by UcoÑam. All rights reserved.
    </p>
</div>
</section>
  )
}
}
