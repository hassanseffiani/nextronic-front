import axios from "axios";
import router from '../../router/index'


const user = JSON.parse(localStorage.getItem('user'));
// Add a request interceptor
axios.interceptors.request.use(
   config => {
       const token = user.accessToken;
       if (token) {
           config.headers['Authorization'] = 'Bearer ' + token;
       }
       // config.headers['Content-Type'] = 'application/json';
       return config;
   },
   error => {
       Promise.reject(error)
   });



//Add a response interceptor

axios.interceptors.response.use((response) => {
   return response
}, function (error) {
   const originalRequest = error.config;

   if (error.response.status === 401 && originalRequest.url === 
'http://13.232.130.60:8081/v1/auth/token'){
       router.push('/login');
       return Promise.reject(error);
   }

   if (error.response.status === 401 && !originalRequest._retry) {

       originalRequest._retry = true;
       const refreshToken = user.refreshToken;
       return axios.post('/auth/token',
           {
               "refresh_token": refreshToken
           })
           .then(res => {
               if (res.status === 201) {
                   user.accessToken = res.data;
                   localStorage.setItem('user', JSON.stringify(user));
                   axios.defaults.headers.common['Authorization'] = 'Bearer ' + user.accessToken;
                   return axios(originalRequest);
               }
           })
   }
   return Promise.reject(error);
});