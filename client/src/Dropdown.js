import React from 'react'
import { Accordion,Card, Button} from 'react-bootstrap'


const Dropdown = (props) => {
  return(
    <Accordion defaultActiveKey="0" style={{width: "100%"}}>
          <Card>
    <Accordion.Toggle  as={Card.Header} eventKey={props.id} style={{color:"#080147", backgroundColor:"white", fontWeight:"bold"}}>
     {props.title}
    </Accordion.Toggle>
    <Accordion.Collapse eventKey={props.id}>
      <Card.Body style={{color:"#6c757d"}}>{props.info}</Card.Body>
    </Accordion.Collapse>
  </Card>
    </Accordion>

      )
  }

export default Dropdown



