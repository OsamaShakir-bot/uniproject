/* @flow */

import React, { Component } from 'react';
import { 
  Container, Header, Title, Content, Footer, FooterTab, 
  Button, Left, Right, Body, Icon, Text, Form, Item, 
  Label, Input, Picker, ListItem ,Radio} from 'native-base';
  import Fontisto from 'react-native-vector-icons/Fontisto'
  import EvilIcons from 'react-native-vector-icons/EvilIcons'
  import Feather from 'react-native-vector-icons/Feather'
import {Image,Platform,View,KeyboardAvoidingView,AsyncStorage,Alert,ImageBackground} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {SignIn} from './../../API/API'
import { Col,Row } from 'react-native-easy-grid';
import { tsThisType } from '@babel/types';
import firebase from 'react-native-firebase'
import {TouchableOpacity} from 'react-native'
  import Entypo from 'react-native-vector-icons/Entypo'
import { ScrollView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';
export default class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(),
      selected2: undefined,
      email: '',
      password: '',
      isloading: false,
      incorrect:false,

      email_valid: true
     };
    this.setDate = this.setDate.bind(this);
  }

  onValueChange2(value: string) {
    this.setState({
      selected2: value
    });
  }
  setDate(newDate) {
    this.setState({ chosenDate: newDate });
  }
componentDidMount=async()=>{
  try{
    let value = await AsyncStorage.getItem('token')
    console.log(value)
    if( value!=null)
    {
      this.props.navigation.navigate('Home')
    }
  }
  catch(error)
  {

  }
  
  SplashScreen.hide();
}
validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}
signIn =  async() => {
  this.setState({isloading: true});
  const responseData = await SignIn(this.state.email, this.state.password);
  console.log('API SUCCESS signIn signInApi.')
  console.log("responseData : " , responseData);
  if(responseData.status == 200){
    console.log(responseData)
    try {
      AsyncStorage.setItem('token',responseData.token);
      this.setDate({
       
        isloading:false
      })
      this.props.navigation.navigate('Home')
    }
    catch (error) {
      console.log("Error in sign in: ", error);
    }

  }
  else{
  
    this.setDate({
      signIndata:responseData.data
      ,incorrect:true,
      isloading:false
    })

    // console.log("Error in sign in: ", error);
  }
}
sigIN=()=>{
//   firebase
//   .auth()
//   .signInWithEmailAndPassword(this.state.email, this.state.password)
//   .then(() => {
//     // this.props.navigation.navigate('Dashboard',{dash: this.state.userName})
//     this.props.navigation.navigate('Home',{dash: this.state.email})

//  })
console.log(this.state.email,this.state.password)
if(this.state.email==''||this.state.password=='')
{
    Alert.alert(
        'Error',
        'Please enter username and password',
        [
         
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
}
else if(this.state.passwordConfirm!=this.state.password)
{
    Alert.alert(
        'Error',
        'Please enter username and password',
        [
         
          {
            text: 'Cancel',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false},
      );
}
else{
    console.log(this.state.email,this.state.password)
    firebase.auth().createUserWithEmailAndPassword(this.state.email,this.state.password)
            .then((res) => {
                console.log(res)
                Alert.alert(
                    'Success',
                    'Account has been created please log in',
                    [
                     
                      {
                        text: 'Login',
                        onPress: () => this.props.navigation.navigate('Login'),
                        style: 'cancel',
                      },
                      {text: 'OK', onPress: () => this.props.navigation.navigate('Login')},
                    ],
                    {cancelable: false},
                  );
                
            })
                  
            .catch(error =>  {console.log(error.message)
                  Alert.alert(
                'Error',
                error.message,
                [
                 
                  {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {text: 'OK', onPress: () => console.log('OK Pressed')},
                ],
                {cancelable: false},
              );} )
}



}
render() {
    return (
      <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : null} style={{flex:1,}}>
    <ScrollView style={{paddingBottom:40}}>
        {/* <Header noLeft>
          <Left />
          <Body>
            <Title>Log In</Title>
          </Body>
          <Right />
        </Header> */}
        <View>
      <View source={require('./../../../assets/loginback.png')} style={{alignItems:'center',justifyContent:'center',height:210,width:'100%'}}>
        <Image source={require('./../../../assets/logo.png')} style={{marginBottom:40,width:220,height:220}}/>
       
        </View>
         <View style={{
    // justifyContent:'center',
    backgroundColor:'white',alignSelf:'center',marginBottom:20,marginHorizontal:'5%',width:'90%',padding:30,flexDirection:'column',borderRadius:3,shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    position:'relative',
    top:-80,
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    elevation: 4,
    marginTop: 10,
    padding:5,
    // marginRight:5,
    paddingTop:20,
    alignItems:'center',
    justifyContent:'center'
}}>
   <Text style={{color:'#000000',fontSize:28}}>SIGN UP</Text>
  <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
           <Input  onChangeText={(text) => this.setState({username: text}) } value={this.state.username} placeholder='User Name'/>
           <EvilIcons color={'#000000'} size={25} style={{marginRight:10}} active name='user' />
         </Item>
          <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
             
              <Input onChangeText={(text) => this.setState({email: text}) } value={this.state.email} placeholder='Email'/>
              <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='email' />
            </Item>
            <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
            <Input  onChangeText={(text) => this.setState({password: text}) } value={this.state.password} placeholder='Password' secureTextEntry/>
            <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='key' />
          </Item>
          <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
           <Input  onChangeText={(text) => this.setState({passwordConfirm: text}) } value={this.state.passwordConfirm} placeholder='Confirm Password' secureTextEntry/>
           <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='key' />
         </Item>
           <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
           <Input  onChangeText={(text) => this.setState({Address: text}) } value={this.state.Address} placeholder='Address' />
           
           <EvilIcons color={'#000000'} size={25} style={{marginRight:10}} active name='location' />
         </Item>
         <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
           <Input  onChangeText={(text) => this.setState({Phone: text}) } value={this.state.Phone} placeholder='Phone Number' />
           <Feather color={'#000000'} size={20} style={{marginRight:10}} active name='phone' />
         </Item>
        
      
            <View style={{paddingHorizontal:20}}>
            <Button  onPress={this.sigIN} full style={{top:27,position:'relative',backgroundColor:"#000000",paddingHorizontal:90,borderRadius:20,alignItems:'center'}} backgroundColor={'#000000'}
         >
              <Text style={{color:'white' ,fontSize:18,alignSelf:'center'}}>Sign Up</Text>
          </Button>
          
          </View>
 
          </View>
         
      
     </View>
     <View style={{marginBottom:80,marginVertical:20,position:'absolute',bottom:-70,flex:1,width:'100%'}}>
     <TouchableOpacity style={{marginBottom:10}} onPress={()=>this.props.navigation.navigate('Guest')}><Text style={{alignSelf:'center',color:'#555',fontSize:13}}>Continue as guest?</Text></TouchableOpacity>
            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Login')}><Text style={{alignSelf:'center',color:'#555',fontSize:13}}>Already Have an account?<Text style={{color:'#000000',fontSize:13}}> Login</Text></Text></TouchableOpacity>
            <View style={{marginTop:10,height:2,width:60, backgroundColor:'#000000',alignSelf:'center'}}/>
     </View>
          </ScrollView>
          {/* <View style={{alignItems:'center',alignSelf:'center'}}>
          <Text style={{alignSelf:'center',color:'#555',marginTop:-70,fontSize:13}}>Or SignUp Using</Text>
          <Entypo name={'facebook-with-circle'} color={'#3b5998'} size={30} style={{marginTop:5}}/>
            </View> */}
     
            {/* <Item style={{marginBottom:10}} floatingLabel >
              <Label>Email</Label>
              <Input  keyboardType='email-address' onChangeText={(text) => this.setState({email: text, email_valid: this.validateEmail(text)})}
              value={this.state.email}
              placeholder='abc@xyz.com'/>
            </Item>
            <View style={{alignItems: 'center'}}>
              {this.state.email_valid ? (<Text style={{fontSize: 14}}></Text>) : (<Text style={{color: 'red', fontSize: 14}}>please enter valid email</Text>) }
            </View>
            {/* <Item floatingLabel>
              <Label>Phone</Label>
              <Input keyboardType = 'numeric' />
            </Item> 

            <Item floatingLabel >
              <Label>Password</Label>
              <Input   onChangeText={(text) => this.setState({password: text})}
              value={this.state.password}
              placeholder='Enter Password' secureTextEntry />
            </Item>
          {this.state.incorrect==true&& <Text style={{alignSelf:'center',color: 'red', fontSize: 14}}>{this.state.signIndata}</Text>}

          <Button disabled={this.state.isloading==true?true:false} block info style={{marginBottom: 20, marginTop: 15,backgroundColor:'#073762'}} 
          onPress={this.signIn}>
            {this.state.isloading==true?  <Spinner color='white' />: <Text>Log In</Text>}
           </Button> */}

      


      </KeyboardAvoidingView>
    );
  }
}