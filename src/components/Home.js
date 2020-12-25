import React from 'react';
// import UserService from '../services/UserService';

class Home extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            users:[]
        }
    }
    componentDidMount() {
        const arr = [
            {
              "id": 1,
              "name": "Daci",
              "address": "Timisoara"
            },
            {
              "id": 2,
              "name": "Aranud",
              "address": "Timisoara"
            },
            {
              "id": 3,
              "name": "Rony",
              "address": "Timisoara"
            }
          ];
          this.setState({ users: arr});
        // UserService.getUsers().then((response) => {
        //     this.setState({ users: response})
        // });
    }
    render() {
        return (
        <div>
            <h1>List Persons</h1>
            <p>Home page body content</p> 
            {
                this.state.users.map((user) => 
                    <div>
                        <p> {user.id} | {user.name} | {user.address}</p>   
                    </div>
                )
            }           
        </div>
        );
    }
}
 
export default Home;