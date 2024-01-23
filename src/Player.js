

import React from 'react'

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

function Player({data}) {
   const {name,team}=data
  return (
    <Card style={{ width: '200px'}}>
      <Card.Img variant="top" src={data.image} />
      <Card.Body style={{backgroundColor:'#C4E9E9'}}>
        <Card.Title>Name:{name}</Card.Title>
        <Card.Text>
         <h4>Team:{team}</h4><br/>
          <h6>Nationality:{data.nationality}</h6> <br/>
          <h3>Age:{data.age}</h3> <br/>
        </Card.Text>
        
      </Card.Body>
    </Card>
  );
}
Player.defaultProps = {
    data:{name:"Test", age:18,team:"tunisia"}
}

export default Player;