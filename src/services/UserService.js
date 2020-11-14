
const USERS_REST_API_URL = 'http://192.168.1.102:8080/maro-0.0.3/persons';

class UserService {

    getUsers(){
        return fetch(USERS_REST_API_URL, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json());      
    }

    getUser(id) {
        return fetch(USERS_REST_API_URL + "/" + id, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
      }).then(response => response.json());      
    }
    
    createUser(data) {
        fetch(USERS_REST_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
      });
    }
 
    updateUser(id, data) {
        fetch(USERS_REST_API_URL + "/" + id, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
      });
    }   
    
    deleteUser(id) {
        return fetch(USERS_REST_API_URL + "/" + id, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
      });      
    }   
    
}

export default new UserService();