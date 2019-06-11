import React, {useState} from 'react'
import Card from 'react-bootstrap/Card'

export function AnimalItem(props){

 const [visable,setVisable] = useState(false)

 if(visable===true){
  return(
   <Card onClick={() => setVisable(!visable)}>
    <Card.Img variant="top" src={props.info.src} />
     <Card.Body>
      <Card.Title>{props.info.title}</Card.Title>
      <Card.Text>
      {props.info.description}
      </Card.Text>
     </Card.Body>
   </Card>
  )
 }else {
  return(
   <Card onClick={() => setVisable(!visable)}>
    <Card.Img variant="top" src={props.info.src} />
   </Card>
  )
 }
 
}