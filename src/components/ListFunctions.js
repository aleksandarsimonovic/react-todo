import axios from 'axios'

export const getList = () => {
    return axios
        .get('http://localhost:3600/tasks', {
            headers: {'Content-Type': 'application/json'}
        })
        .then(res => {
            console.log(res);
            return res.data
        })
};

export const addItem = (title, status) => {
    return axios
        .post(
            'http://localhost:3600/tasks',
            {
                title: title,
                status: status
            },
            {
                headers: {'Content-Type': 'application/json'}
            }
        )
        .then(function (response) {
            console.log(response)
        })
};

export const deleteItem = id => {
    axios
        .delete(`http://localhost:3600/tasks/${id}`, {
            headers: {'Content-Type': 'application/json'}
        })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
            console.log(error)
        })
};

export const updateItem = (title, status, id) => {
    return axios
        .put(
            `http://localhost:3600/tasks/${id}`,
            {
                title: title,
                status: status
            },
            {
                headers: {'Content-Type': 'application/json'}
            }
        )
        .then(function (response) {
            console.log(response)
        })
};