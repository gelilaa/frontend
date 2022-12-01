import React from "react";
import {Row,Col,Card,Button} from "react-bootstrap"
import repo from "../assets/file.json"
function Work (){
    return(
        <>
        <Row xs={1} md={2} className="g-5">
            
            {repo.map((re,id)=>{
                return(
             <Col key={id} >
            <Card  className="bg-white text-gray" >
        <Card.Img variant="top" src={re.image} />   
        <Card.Body>
             <Card.Title> {re.name}</Card.Title>
          <Card.Text>
           {re.description}
          </Card.Text>
          <a href={re.url}>
            <Button variant="outline-secondary"className="float-start">Demo</Button></a>
             
         <a href={re.repo}>
            <Button variant="outline-secondary"className="float-end">Code</Button></a>
          
        </Card.Body>
      
      </Card>
            </Col>
            
        )})}
         
        </Row>
        </>
    );
}

export default Work