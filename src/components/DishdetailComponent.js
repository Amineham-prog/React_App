

import { Card,CardImg,CardText,CardTitle, CardBody } from 'reactstrap';
import React, { Component } from 'react';



class DishDetail extends Component
{

renderDish(rD){
    
    return(
      <div key="12" className="col-12 col-md-5 m-1">
    <Card>
    <CardImg top width="100%" src={rD.image} alt={rD.name} />
    <CardBody>
    <CardTitle>{rD.name}</CardTitle>
    <CardText>{rD.description}</CardText>
    </CardBody>

     </Card>
     </div>
    );
   
}



renderComment(rC){

    //-------------------------------------------------------
    
        const a= rC.map((comments)=>{  return(
         
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
        

    
    //----------------------------------------------------------------
}


render(){
    return(
     
            
          <div className="row">
             {this.renderDish(this.props.dish)}
            
              {this.renderComment(this.props.dish.comments)}  
          
      </div>
  
           


     
 
          
          
    
    
  

); 
}


}

export default DishDetail;