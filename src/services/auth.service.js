import axios from "axios";

const API_URL  = "";

const register = (username, email,password,phoneNumber, qualification, graduationYear) =>{
    return axios.post(API_URL + "signup" , {
        username,
        email,
        password,
        qualification,
        graduationYear,
        phoneNumber
    });
};

const login = (email,password)=>{
    return axios.post(API_URL+ "signin" , {
        email,
        password
    }).then((response) => {
        if(response.data.accessToken){
            localStorage.setItem("user",JSON.stringify(responseData.data));
        }
        return response.data;
    });
};

const logout = () =>{
    localStorage.removeItem("user");
}

export default {
    register,
    login,
    logout
}

