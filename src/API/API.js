import axios from 'axios'
export const baseUrl = 'http://188.138.100.72:3000'
// import a from './../../srca/assets/1.png'

export const SignIn=async (email,password)=>{
    console.log(email,password);
    let bodyconfig = JSON.stringify({
      email: email,
      password: password
    })
    let headersconfig = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'email':email,
        'password':password
      }
    }
    var res = {};
    await axios.post(baseUrl+'/api/users/auth', {} , headersconfig)
    .then(function (response) {
      console.log("response recieved in signInApi : " , response);
      res = response.data;
      tokenGlobal=   response.data;
      res.status = response.status;
    })
    .catch(function (error) {
      console.log("ERROR in signInApi : " , error);
      res={data:'Incorrect Username Or Password',status:400}
      
    });
    console.log("RETURN signInApi res: ", res)
    return res;
  }

  export const getMyActions=async (token)=>{
    console.log(token);
  
    let headersconfig = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token':token
      }
    }
    var res = {};
    await axios.get(baseUrl+'/api/action/getMyActions?CurrentPage=1', headersconfig)
    .then(function (response) {
      console.log("response recieved in getMyActions : " , response);
      res = response.data;
      tokenGlobal=   response.data;
      res.status = response.status;
    })
    .catch(function (error) {
     
    });
    console.log("RETURN getMyActions res: ", res)
    return res;
  }

  export const getMyInterventions=async (token)=>{
    console.log(token);
  
    let headersconfig = {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'token':token
      }
    }
    var res = {};
    await axios.get(baseUrl+'/api/intervention/getMyInterventions?CurrentPage=1', headersconfig)
    .then(function (response) {
      console.log("response recieved in getMyInterventions : " , response);
      res = response.data;
      tokenGlobal=   response.data;
      res.status = response.status;
    })
    .catch(function (error) {
     
    });
    console.log("RETURN getMyInterventions res: ", res)
    return res;
  }
