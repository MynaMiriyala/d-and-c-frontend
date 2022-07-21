import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:8082/profile/add';
const Coupon_API_BASE_URL='http//localhost:8085/coupon/findall';
const USER_URL='http//localhost:8082/profile/login';
const User_API_BASE_URL = 'http://localhost:8082/find/{id}';

class ApiService {

    addUser(user) {
        return axios.post(""+USER_API_BASE_URL, user);
    }
    fetchProducts() {
        return axios.get( Coupon_API_BASE_URL);
    }
    loginUser() {
        return axios.post(USER_URL)
    }
}

export default new ApiService();