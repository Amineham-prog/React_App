import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb,BreadcrumbItem} from 'reactstrap';
import { Link } from 'react-router-dom';
import  { Component } from 'react';
import {Button,Modal, ModalHeader, ModalBody,Label ,Row,Col} from 'reactstrap'
import { Control, LocalForm, Errors } from 'react-redux-form';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';
//----------- Validation Redux check---------------------------------------------
const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


//-------------------CommentForm class-----------------------
class CommentForm extends Component {
  constructor(props){
    super(props);
    this.state={
        
        isModalOpen:false
    }
        
        this.toggleModal=this.toggleModal.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
//--------Open Modal---------------------------------------------
     toggleModal(){
      this.setState({isModalOpen: !this.state.isModalOpen})
      
      
      }
//----------------Submmit Control------------------------------
      handleSubmit(values) {
        this.toggleModal();
        this.props.postComment(this.props.dishId, values.rating, values.author, values.comment);
        
    }

render(){

return(<div className="col-12 col-md-5 m-1">

  <Button outline onClick={this.toggleModal}>
        <span className="fa fa-pencil-square fa-lg"></span> Submmit Commment
  </Button>

 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
 <ModalHeader toggle={this.toggleModal} >Submit Comments </ModalHeader>
<ModalBody>

<LocalForm onSubmit={(values) => this.handleSubmit(values)}>

<Row className="form-group">
<Label htmlFor="Rating" md={4}>Rating</Label>
<Col md={12}>
<Control.select model=".rating"  id="rating" name="rating">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">2</option>
<option value="5">3</option>
</Control.select>
</Col>
</Row>



<Row className="form-group">
<Label htmlFor="Author" md={4}>Your Name</Label>

<Col md={12}>
  <Control.text model=".author" id="author" name="author"
   placeholder="Your Name"
   className="form-control"
    validators={{
    required, minLength: minLength(3), maxLength: maxLength(15)
       }}
 /><Errors
   className="text-danger"
    model=".author"
    show="touched"
     messages={{
     required: 'Required',
    minLength: 'Must be greater than 2 characters',
   maxLength: 'Must be 15 characters or less'
                                        }}
    />
</Col>
</Row>

<Row className="form-group">
<Label htmlFor="message" md={4}>Your comment</Label>
 <Col md={12}>
 <Control.textarea model=".comment" id="comment" name="comment"rows="6"className="form-control" />
</Col>
</Row>

<Button type="submit" color="primary">Submit</Button>


</LocalForm>
</ModalBody>
</Modal>
              </div>
);
}
}
//-------------------------End Class CommentForm-------------------------------------


//---------------RenderDish---------------------------
function RenderDish({dish}) {
     
      return(
        <div key="12" className="col-12 col-md-5 m-1">
      
      <FadeTransform
                in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>   
      <Card>
      <CardImg top src={baseUrl + dish.image} alt={dish.name} />
      <CardBody>
      <CardTitle>{dish.name}</CardTitle>
      <CardText>{dish.description}</CardText>
      </CardBody>
  
       </Card>
       </FadeTransform>
       </div>
      );

    }
//--------------------End RenderDish---------------------------------

  //-----------------RenderComments------------------
  function RenderComments({comments, postComment, dishId}) {
     if (comments !=null)
      return(
         <div className="col-12 col-md-5 m-1">
         <h4>Comments</h4>
         <ul class="list-unstyled">
         <Stagger in>
           {comments.map((comment)=>{
             return(
               <Fade in>
               <li key={comment.id}>
                 <p>{comment.comment}</p>
                <p>--{comment.author}</p>
               </li>
               </Fade>
             );


           })}
</Stagger>
         </ul>
         <CommentForm dishId={dishId} postComment={postComment} />
        
         </div>
      );

          }
   
//--------------End RenderComment------------------




//-----------------DishDetail-------------------------------
const  DishDetail = (props) => {
  if (props.isLoading) {
    return(
        <div className="container">
            <div className="row">            
                <Loading />
            </div>
        </div>
    );
}
else if (props.errMess) {
  console.log(props.errMess)
    return(
        <div className="container">
            <div className="row">            
                <h4>{props.errMess}</h4>
            </div>
        </div>
    );
}
else if (props.dish != null) {
  return (

   <div class="container">
     <div className="row">
                <Breadcrumb>
 
 <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
  <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>                
            </div>
   <div className="row">
     
 <RenderDish dish = {props.dish}/>
 <RenderComments comments={props.comments}
        postComment={props.postComment}
        dishId={props.dish.id}
      />

 
</div>
</div> 
      );}
  else {
    return(<div></div>)}
  
}
//---------------------End DishDetail---------------------


export default DishDetail;