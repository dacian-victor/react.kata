import React from 'react';
import UserService from '../services/UserService';
 
class Update extends React.Component {
   handleClick() {
      var id = document.getElementById("id").value;
      UserService.updateUser(id, {
         "name": document.getElementById("name").value, 
         "address": document.getElementById("address").value 
      });
   }
   render() {
      return (
         <div>
            <h1>Update Person</h1>
            <p>About US page body content</p>
            <input type="text" id="id" size="4"/>
            <input type="text" id="name" />
            <input type="text" id="address"  />
            <button onClick={this.handleClick}>Add to db</button>
         </div>
      );
   }
}
 
export default Update;