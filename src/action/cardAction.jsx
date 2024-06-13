import axios from 'axios'

export const fetchUsers = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/users").then(({ data }) => {
            console.log(data);
            dispatch({ type : 'FETCH_USERS', payload: data })
        })
    }
}