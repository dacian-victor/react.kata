import React from 'react';
// import UserService from '../services/UserService';

class Find extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler() {
        // var id = document.getElementById("id").value;
        // UserService.getUser(id).then((response) => {
        //     this.setState({ users: [response]});
        // });
    }
    render() {
        return (
        <div>
            <h1>Find Person</h1>
            Insert id to get: <input type="text" id="id"/> 
            <button onClick={this.clickHandler}>Add to db</button>            
            {
                this.state.users.map(
                    (user) => 
                        <div>
                                <p> {user.id} | {user.name} | {user.address}</p>   
                        </div>
                )
            }           
        </div>
        );
    }
}
 
export default Find;