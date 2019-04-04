import React, { Component } from 'react'
import {Col, Row} from 'reactstrap'
import './CatList.css'

export default class CatList extends Component {
  render() {
      console.log(this.props)
    // const book = 
    let cats = ""
    if(this.props.cats.length > 1){
        cats = this.props.animals.map((cat, index) =>{
            return <Col md={3} key={index}>{cat.name} <img src={cat.image} alt={cat.name}/></Col>
        })
    }else{
    //     cats = "Nothing Yet"
    }
    return (
        // if I want to add anything should be inside this div
      <Row> 
        {cats}
      </Row>
      
    )
  }
}
// export default CatList
 