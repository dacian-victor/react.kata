import React from 'react';
// import UserService from '../services/UserService';
 
class Create extends React.Component {
   handleClick() {
      // UserService.createUser({
      //    "name": document.getElementById("name").value, 
      //    "address": document.getElementById("address").value 
      // });
   }
   render() {
      return (
         <div>
            <h1>Create Person</h1>
            <p>About US page body content</p>
            <input type="text" id="name" />
            <input type="text" id="address" />
            <button onClick={this.handleClick}>Add to db</button>
         </div>
      );
   }
}
 
export default Create;