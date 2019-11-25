/* @flow */

import React, { Component } from 'react';
import { 
  Container, Header, Title, Content, Footer, FooterTab, 
  Button, Left, Right, Body, Icon, Text, Item, 
  Label, Input, Picker, ListItem ,Radio, Spinner} from 'native-base';
  // import Fontisto from 'react-native-vector-icons/Fontisto'
import {Image,Platform,View,TouchableHighlight,KeyboardAvoidingView,AsyncStorage,TouchableWithoutFeedback,ImageBackground} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {SignIn} from './../../API/API'
import { Col,Row } from 'react-native-easy-grid';
import { tsThisType } from '@babel/types';
import firebase from 'react-native-firebase'
import {TouchableOpacity} from 'react-native'
  import Entypo from 'react-native-vector-icons/Entypo'
  import Fontisto from 'react-native-vector-icons/Fontisto'
  import EvilIcons from 'react-native-vector-icons/EvilIcons'
  import Modal from "react-native-modal";
  import Feather from 'react-native-vector-icons/Feather'
import Footer1 from './../../components/Footer'
  // import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';
var num;
export default class MyAccount extends Component {
  
  constructor(props) {
    super(props);
    this.state = { 
      chosenDate: new Date(),
      selected2: '',
      email: '',
      password: '',
      isloading: false,
      incorrect:false,
      businessName:"",
      name:"",
      phone:"",
      typeOfBusiness: '',
      modalVisible:false,
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
GenerateRandomNumber = () => {

  num = Math.floor(Math.random() * 1000000) + 1;

}
logout=async()=>{
    try{
      await AsyncStorage.clear()
      this.props.navigation.navigate('Login')
    }
    catch(error)
    {
  
    }
  
  }
addShop = () => {
if(this.state.email==''||this.state.name==''||this.state.phone==''||this.state.selected2==''||this.state.businessName=='')
{
  alert("Please fill all fields")
}
else{
  this.setState({isloading:true})
  this.GenerateRandomNumber();
  console.log("============================================================")
  const ref = firebase.firestore().collection('Shop').doc(num.toString());
  firebase
      .firestore()
      .runTransaction(async transaction => {
          const doc = await transaction.get(ref);

          if (!doc.exists) {

                transaction.set(ref, {
                  businessName:this.state.businessName,
                  email:this.state.email,
                  name:this.state.name,
                  permission:"false",
                  phone:this.state.phone,
                  product: [],
                  typeOfBusiness:this.state.selected2
              });

              return 1;
          }
          return 0
      })


      .then(res => {
          alert("Shop Sucessfully Added")
          this.setState({isloading:false})
      })
      .catch(error => {
        this.setState({isloading:false})
          alert("Already exists")
      })
}

  
}

render() {
    return (
      <KeyboardAvoidingView  behavior={Platform.OS === "ios" ? "padding" : null} style={{flex:1}}>
        <Header
                         style={{
                            marginBottom:10,
                            backgroundColor: 'white', height: 50,
                            zIndex:100,
                            borderBottomColor:'white',borderBottomWidth:1,
                             justifyContent: "center", paddingBottom: 15

                        }}
                    >
                        <Left style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.navigate('Home')}
                                style={{ top:-10,width: "20%", height: "100%", justifyContent: "center" }}

                            >
                                <View style={{ width: 40, height: 40, alignItems: "center", justifyContent: "center", }}>
                                    {/* <Feather name={"align-justify"} size={25} color={'black'} /> */}
                                    <Image
                                        style={{width:40,height:40,top:1,marginLeft:2}}
                                        source={require("./../../../assets/back.png")}
                                        />
                                </View>

                            </TouchableOpacity>
                        </Left>

                        <Body
                            style={

                                {
                                    flex: 1, alignItems: "center"
                                }
                            }
                        >
                            <Text style={{ color: 'white', fontSize: 18,top:-6,height:20 }}> MY ACCOUNT</Text>
                        </Body>
                        <Right style={{ flex: 1, justifyContent: "center" }}>

                        {/* <TouchableWithoutFeedback onPress={() => this.props.navigation.openDrawer()} style={{justifyContent: 'flex-start'}}>
            {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> 
            <Image
              style={[{width:55,height:55,top:-7,marginLeft:0,left:8}]}
              source={require("./../../../assets/heartico.png")}
              />
          </TouchableWithoutFeedback> */}
          <TouchableWithoutFeedback onPress={()=>this.setState({visibleModal:!this.state.visibleModal})} style={{top:-10,justifyContent: 'flex-start'}}>
            {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
            <Image
              style={[{width:50,height:50,marginLeft:0,left:7}]}
              source={require("./../../../assets/pencil.png")}
              />
          </TouchableWithoutFeedback>


                        </Right>
                   </Header>

    
   <ScrollView>
   <Modal
                isVisible={this.state.visibleModal}
                onBackButtonPress={() => this.setState({visibleModal: null})}
                onBackdropPress={() => this.setState({visibleModal: null})}
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={800}
                backdropTransitionOutTiming={800}
                animationIn="zoomInDown"
                animationOut="zoomOutUp"
                >
                <View>
                <View style={{
    // justifyContent:'center',
    backgroundColor:'white',alignSelf:'center',margin:'5%',marginBottom:20,width:'90%',padding:30,flexDirection:'column',borderRadius:3,shadowColor: "#000",
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
    paddingVertical:20,
    alignItems:'center',
    justifyContent:'center'
}}>
   {/* <Text style={{color:'#000000',fontSize:28}}>CONTINUE AS GUEST</Text> */}
  <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
           <Input  onChangeText={(text) => this.setState({username: text}) } value={this.state.username} placeholder='Name'/>
           <EvilIcons color={'#000000'} size={25} style={{marginRight:10}} active name='user' />
         </Item>
          <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
             
              <Input onChangeText={(text) => this.setState({email: text}) } value={this.state.email} placeholder='Email'/>
              <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='email' />
            </Item>
            {/* <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
            <Input  onChangeText={(text) => this.setState({password: text}) } value={this.state.password} placeholder='Password' secureTextEntry/>
            <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='key' />
          </Item> */}
          {/* <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
           <Input  onChangeText={(text) => this.setState({passwordConfirm: text}) } value={this.state.passwordConfirm} placeholder='Confirm Password' secureTextEntry/>
           <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='key' />
         </Item> */}
           <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
           <Input  onChangeText={(text) => this.setState({Address: text}) } value={this.state.Address} placeholder='Address' />
           
           <EvilIcons color={'#000000'} size={25} style={{marginRight:10}} active name='location' />
         </Item>
         <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
           
           <Input  onChangeText={(text) => this.setState({Phone: text}) } value={this.state.Phone} placeholder='Phone Number' />
           <Feather color={'#000000'} size={20} style={{marginRight:10}} active name='phone' />
         </Item>
        
      
            <View style={{paddingHorizontal:20}}>
            <Button  onPress={()=>this.setState({visibleModal:!this.state.visibleModal})} full style={{marginTop:10,backgroundColor:"#000000",paddingHorizontal:90,alignItems:'center'}} backgroundColor={'#000000'}
         >
              <Text style={{color:'white' ,fontSize:18,alignSelf:'center'}}>SAVE</Text>
          </Button>
          
          </View>
 
          </View>
         
    
               </View>
              </Modal>

            
     
      <View source={require('./../../../assets/loginback.png')} style={{marginTop:-50,alignItems:'center',justifyContent:'center',height:300,width:'100%'}}>
                
     
        <Image source={require('./../../../assets/avatar-1.jpg')} style={{borderColor:'black',borderRadius:50,borderWidth:2,top:-20,width:100,height:100}}/>
        <Text style={{color:'#000000',fontSize:22,marginTop:20,top:-20}}>John Doe</Text>
        </View>
         <View style={{
              backgroundColor:'white',alignSelf:'center',margin:20,width:'90%',padding:30,flexDirection:'column',borderRadius:3,shadowColor: "#000",
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
              
              marginHorizontal:'5%',
          
              alignItems:'center',
              justifyContent:'center'
          }}>
        <Row style={{padding:20}}>
            <Col style={{alignItems:'center'}}>
            <Image source={require('./../../../assets/cartico.png')} style={{height:70,width:70}}/>
            <Text style={{top:-2}}>Wishlist</Text>
           </Col>
           <Col style={{alignItems:'center',borderLeftColor:'black',borderLeftWidth:1}}>
            <Image source={require('./../../../assets/cart2.png')} style={{marginTop:10,height:60,width:60}}/>
            <Text style={{top:-2}}>Cart</Text>
           </Col>
        </Row>
         
 
          </View>
          <View style={{
              backgroundColor:'white',alignSelf:'center',margin:20,marginHorizontal:'5%',width:'90%',padding:30,flexDirection:'column',borderRadius:3,shadowColor: "#000",
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
             
          paddingTop:30,
              alignItems:'center',
              justifyContent:'center'
          }}>
        <Row>
            <Col style={{alignItems:'center'}}>
         
            <Text style={{top:-10,textAlign:'left',left:-30}}>Support</Text>
           </Col>
           <Col style={{alignItems:'flex-end'}}>
            
            <Entypo name={'chevron-right'} size={20} style={{textAlign:'right',top:-10,marginRight:20}}></Entypo>
           </Col>
        </Row>
         
 
          </View>
          <TouchableOpacity onPress={this.logout} style={{ top:-60,marginHorizontal:"5%",height: 45,width: '90%', backgroundColor: '#000000', justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: 'white', fontSize: 22, fontWeight: '500' }}>LOGOUT</Text>
                    </TouchableOpacity>
  </ScrollView>
    
          <View style={{position:'absolute',bottom:0,flex:1,width:'100%'}}>
            <Footer1 index={1} navigation={this.props.navigation}/>
          </View>
      </KeyboardAvoidingView>
    );
  }
}