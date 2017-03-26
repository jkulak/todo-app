import axios from 'axios';

export function fetchTodos() {
    return function(dispatch) {
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then(response => dispatch());
    }
}
