import axios from 'axios'

const setToken = token => {
    if(token){
        axios.defaults.headers.common['auth-header'] = token
    }
    else{
        delete axios.defaults.headers.common['auth-header']
    }
}

export default setToken