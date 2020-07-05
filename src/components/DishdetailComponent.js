

import { Card,CardImg,CardText,CardTitle, CardBody } from 'reactstrap';
import React, { Component } from 'react';



class DishDetail extends Component
{

renderDish(rd){
    
    return(
        
    <div key={this.rd.id} className="col-12 col-md-5 m-1">
    <Card>
    
    <CardImg width="100%" src={rd.image} alt={rd.name} />
    <CardBody>
    <CardTitle>{rd.label}</CardTitle>
    <CardText>{rd.label}</CardText>
    </CardBody>

     </Card>
        
        </div>
    );
   
}



renderComment(dish){
    //-------------------------------------------------------
    const myData=dish.map((data)=>{
        const a= dish.comments.map((comments)=>
           {return(<div>
             <p>---{comments.author},{comments.date}---</p>
             <p> {comments.comment} </p>
             </div>)}
           )
            return a
          
          })
          return(
              
          <div key="1" className="col-12 col-md-5 m-1">
          <Card>
          <CardTitle>Comments</CardTitle>
           {myData}
         </Card>
            
            </div>
        );

  
    //----------------------------------------------------------------
}


render(){
    return(
    
    <div className="row">
      {this.renderDish(this.props.dish)}
      {this.renderComment(this.props.dish)}
    
    </div>); 
}


}

export default DishDetail;