import * as axios from 'axios'
import qs from 'qs'
import ToastNotification from '../components/widgets/ToastNotification'

const customHeaders = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'cache-control': 'no-cache'
};

// HTTP GET, PUT, POST, DELETE, UPDATE Functions using Axios

export const postHandler = async (url, payload) => {

    var data;
    let gettoken = 'custom-jwt-token-here'

    try {
        let dump = await axios.post(url, qs.stringify(
            payload
        ), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'cache-control': 'no-cache',
                'authorization': `Bearer ${gettoken}`
            },
        })
        data = await dump.data
    } catch (error) {
        ToastNotification('error', error)
    }

    return data
}


export const getHandler = async (url, payload) => {

    var data;
    let gettoken = 'custom-jwt-token-here'

    try {
        let dump = await axios.get(url, qs.stringify(
            payload
        ), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'cache-control': 'no-cache',
                'authorization': `Bearer ${gettoken}`
            },
        })
        data = await dump.data
    } catch (error) {
        ToastNotification('error', error)
    }

    return data
}

export const updateHandler = async (url, payload) => {

    var data;
    let gettoken = 'custom-jwt-token-here'

    try {
        let dump = await axios.update(url, qs.stringify(
            payload
        ), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'cache-control': 'no-cache',
                'authorization': `Bearer ${gettoken}`
            },
        })
        data = await dump.data
    } catch (error) {
        ToastNotification('error', error)
    }

    return data
}

export const deleteHandler = async (url, payload) => {

    var data;
    let gettoken = 'custom-jwt-token-here'
    
    try {
        let dump = await axios.delete(url, qs.stringify(
            payload
        ), {
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'cache-control': 'no-cache',
                'authorization': `Bearer ${gettoken}`
            },
        })
        data = await dump.data
    } catch (error) {
        ToastNotification('error', error)
    }

    return data
} 
