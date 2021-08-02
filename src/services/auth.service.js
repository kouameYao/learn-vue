import axios from 'axios';

export default{
    async login(userInfo) {
        console.log("===================== LOGIN API IS CALLED=============", userInfo);
        return axios.post('/login', userInfo);
    }
} 