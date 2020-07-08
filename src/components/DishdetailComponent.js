import React from 'react';

/*
import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';


    function RenderDish({dish}) {
      return(
        <div key="12" className="col-12 col-md-5 m-1">
      <Card>
      <CardImg top width="100%" src={dish.image} alt={dish.name} />
      <CardBody>
      <CardTitle>{dish.name}</CardTitle>
      <CardText>{dish.description}</CardText>
      </CardBody>
  
       </Card>
       </div>
      );

    }

    function RenderComments({comments}) {
      const a= comments.map((comments)=>{  return(
         
        <ul class="list-unstyled">
          <li> {comments.comment} </li> 
        <li>--{comments.author},{new Date(comments.date).toUTCString()}--</li>
           
          </ul>


      );})
       
      return(
        <div key="11" className="col-12 col-md-5 m-1">
          
          <h1>Comments</h1><br></br><br></br>
            {a}
       

        </div>
        )
     
}
    
      */
   

    const  DishDetail = (props) => {
    
    console.log(props);
  return <h1>{props.name}</h1>
      
    };

export default DishDetail;