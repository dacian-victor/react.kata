import React from 'react';
// import UserService from '../services/UserService';

class Delete extends React.Component {
   clickHandler() {
      // var id = document.getElementById("id").value;
      // UserService.deleteUser(id).catch(e => {
      //    console.log(e);
      // });  
  }
   render() {
      return (
         <div>
            <h1>Delete Person</h1>
            Insert id to delete: <input type="text" id="id"/> 
            <button onClick={this.clickHandler}>Delete from db</button>     
         </div>
      );
   }
}
 
export default Delete;