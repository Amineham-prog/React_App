//import everything from a files.
import * as ActionTypes from './ActionTypes';
import { baseUrl } from '../shared/baseUrl';


//-------------------------------------------------------------ADD COMMENTS----------------------------------------------------
export const addComment = (comment) => ({
  type: ActionTypes.ADD_COMMENT,
  payload: comment
});
//-------------------------------------------------------------------End ADD Comments-------------------------



//-------------------------------------------------------------POST Comment----------------------------------------------------
export const postComment = (dishId, rating, author, comment) => (dispatch) => {

  const newComment = {
      dishId: dishId,
      rating: rating,
      author: author,
      comment: comment
  };
  newComment.date = new Date().toISOString();
  
  return fetch(baseUrl + 'comments', {
      method: "POST",
      body: JSON.stringify(newComment),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => dispatch(addComment(response)))
  .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};
//------------------------------------------end Post Comments--------------------------------------------------------------------------





//---------------------------------------------POST FEEDBACK------------------------------------------------------------------------------------
export const postFeedback = (values) => (dispatch) => {

  const newFeedback = {...values, date:new Date().toISOString()};
      
  

  
  return fetch(baseUrl + 'feedback ', {
      method: "POST",
      body: JSON.stringify(newFeedback),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: "same-origin"
  })
  .then(response => {
      if (response.ok) {
        return response;
      } else {
        var error = new Error('Error ' + response.status + ': ' + response.statusText);
        error.response = response;
        throw error;
      }
    },
    error => {
          throw error;
    })
  .then(response => response.json())
  .then(response => alert('thank you for your feedback !\n' + JSON.stringify(response)))
  .catch(error => alert(error) );
};
//---------------------------------------------------end post feedback-------------------------------------------------------------------------




//------------------------------------------------FETCH DISHES----------------------------------------------------------------------------
export const fetchDishes = () => (dispatch) => {
  console.log(Response);
    dispatch(dishesLoading(true));

    return fetch(baseUrl + 'dishes')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(dishes => dispatch(addDishes(dishes)))
    .catch(error => {console.log(error.message);
      return dispatch(dishesFailed(error.message))});
}

export const dishesLoading = () => ({
    type: ActionTypes.DISHES_LOADING
});

export const dishesFailed = (errmess) =>{
 console.log(errmess);
 
  return ({
    type: ActionTypes.DISHES_FAILED,
    payload: errmess
});
} 

export const addDishes = (dishes) => ({
    type: ActionTypes.ADD_DISHES,
    payload: dishes
});
//-------------------------------------------------------end Fetch Dishes-------------------------------





//-------------------------------------------------------fetch Comments------------------------------------
export const fetchComments = () => (dispatch) => {    
    return fetch(baseUrl + 'comments')
    .then(response => {
        if (response.ok) {
          return response;
        } 
        else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(comments => dispatch(addComments(comments)))
    .catch(error => dispatch(commentsFailed(error.message)));
};


export const commentsFailed = (errmess) => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errmess
});

export const addComments = (comments) => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});
//-----------------------------------end fetch comments---------------------------------------------------------------------------------------





//-----------------------------------fetch promos----------------------------------------------------------------------------------------------
export const fetchPromos = () => (dispatch) => {
    
    dispatch(promosLoading());

    return fetch(baseUrl + 'promotions')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(promos => dispatch(addPromos(promos)))
    .catch(error => dispatch(promosFailed(error.message)));
}

export const promosLoading = () => ({
    type: ActionTypes.PROMOS_LOADING
});

export const promosFailed = (errmess) => ({
    type: ActionTypes.PROMOS_FAILED,
    payload: errmess
});

export const addPromos = (promos) => ({
    type: ActionTypes.ADD_PROMOS,
    payload: promos
});
//----------------end Fetch promos----------------




//------------------------Fetch Leaders-----------------------------------------------------------------------------------------------------
export const fetchLeaders = () => (dispatch) => {
  console.log(Response);
    dispatch(leadersLoading(true));

    return fetch(baseUrl + 'leaders')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(leaders =>{console.log(leaders); 
      return dispatch(addLeaders(leaders))})
    


  
    .catch(error => {console.log(error.message);
      return dispatch(leadersFailed(error.message))});
}

//------------------LeadersLoading---------------------
export const leadersLoading = () => ({
    type: ActionTypes.LEADERS_LOADING
});

//----------------leadersFailed---------------------
export const leadersFailed = (errmess) =>{
 console.log(errmess);
 
  return ({
    type: ActionTypes.LEADERS_FAILED,
    payload: errmess
});
} 

//----------------AddLeaders--------------------------
export const addLeaders = (leaders) => ({
    type: ActionTypes.ADD_LEADERS,
    payload: leaders
});
//-----------------------------------------------------------------------end fetch leaders--------------------------------------------

