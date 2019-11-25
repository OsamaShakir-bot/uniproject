/* @flow */

import React, { Component } from 'react';
import { 
  Container, Header, Title, Content, Footer, FooterTab, 
  Button, Left, Right, Body, Icon, Text, Item, 
  Label, Input, Picker, ListItem ,Radio, Spinner} from 'native-base';
  // import Fontisto from 'react-native-vector-icons/Fontisto'
import {Image,Platform,View,KeyboardAvoidingView,AsyncStorage,TouchableWithoutFeedback,ImageBackground} from 'react-native'
import SplashScreen from 'react-native-splash-screen'
import {SignIn} from './../../API/API'
import { Col,Row } from 'react-native-easy-grid';
import { tsThisType } from '@babel/types';
import firebase from 'react-native-firebase'
import {TouchableOpacity} from 'react-native'
  import Entypo from 'react-native-vector-icons/Entypo'
  import Fontisto from 'react-native-vector-icons/Fontisto'
  import EvilIcons from 'react-native-vector-icons/EvilIcons'
  import Feather from 'react-native-vector-icons/Feather'
import Footer1 from './../../components/Footer'
  // import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from 'react-native-gesture-handler';
// import { TouchableOpacity } from 'react-native-gesture-handler';
var num;
export default class Seller extends Component {
  
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
   <ScrollView contentContainerStyle={{paddingBottom:80}}>
   <Header
                         style={{
                            marginBottom:10,
                            backgroundColor: 'white', height: 50,
                            borderBottomColor:'black',borderBottomWidth:1,
                            elevation: this.props.elevation, justifyContent: "center", paddingBottom: 15
                        }}
                    >
                        <Left style={{ flex: 1 }}>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.openDrawer()}
                                style={{ top:-10,width: "20%", height: "100%", justifyContent: "center" }}

                            >
                                <View style={{ width: 40, height: 40, alignItems: "center", justifyContent: "center", }}>
                                    {/* <Feather name={"align-justify"} size={25} color={'black'} /> */}
                                    <Image
                                        style={{width:30,height:30,top:4,marginLeft:2}}
                                        source={require("./../../../assets/icondraw.png")}
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
                            <Text style={{ color: 'black', fontSize: 20,top:-6,height:20 }}> SELLER</Text>
                        </Body>
                        <Right style={{ flex: 1, justifyContent: "center" }}>

                        <TouchableWithoutFeedback onPress={() => this.props.navigation.openDrawer()} style={{justifyContent: 'flex-start'}}>
            {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
            <Image
              style={[{width:55,height:55,top:-7,marginLeft:0,left:8}]}
              source={require("./../../../assets/heartico.png")}
              />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MyCart')} style={{justifyContent: 'flex-start'}}>
            {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
            <Image
              style={[{width:50,height:50,top:-10,marginLeft:0,left:7}]}
              source={require("./../../../assets/cartico.png")}
              />
          </TouchableWithoutFeedback>


                        </Right>
                    </Header>

     
      <View source={require('./../../../assets/loginback.png')} style={{marginTop:-40,alignItems:'center',justifyContent:'center',height:230,width:'100%'}}>
                
     
        <Image source={require('./../../../assets/logo.png')} style={{marginTop:-10,width:220,height:220}}/>
        </View>
         <View style={{
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
            <Text style={{color:'#000000',fontSize:21}}>JOIN AMAR AS SELLER</Text>
        
             <Item regular style={{alignSelf:'center',marginTop:20,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
             
             <Input onChangeText={(text) => this.setState({name: text}) } value={this.state.name} placeholder='Your Name'/>
             <EvilIcons color={'#000000'} size={25} style={{marginRight:10}} active name='user' />
           </Item>
            <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
             
              <Input onChangeText={(text) => this.setState({email: text}) } value={this.state.email} placeholder='Email'/>
              <Fontisto color={'#000000'} size={20} style={{marginRight:10}} active name='email' />
            </Item>
         
            <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
             
              <Input onChangeText={(text) => this.setState({businessName: text}) } value={this.state.businessName} placeholder='Shop Name'/>
              <Feather color={'#000000'} size={20} style={{marginRight:10}} active name='briefcase' />
            </Item>
            <Item regular style={{alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
             
              <Input onChangeText={(text) => this.setState({phone: text}) } value={this.state.phone} placeholder='Phone Number'/>
              <Feather color={'#000000'} size={20} style={{marginRight:10}} active name='phone' />
            </Item>
            <Item regular style={{width:'88%',alignSelf:'center',marginTop:10,marginLeft:20,marginVertical:10,marginHorizontal:20,borderRadius:5}}>
            <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
               // style={{ width: undefined }}
               style={{style:"100%"}}
                placeholder="Select Shop Type"
                placeholderStyle={{ color: "#555" }}
                placeholderIconColor="#555"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Select Shop Type" value="Clothes"/>
                <Picker.Item label="Clothes" value="Clothes" />
                <Picker.Item label="Shoes" value="Shoes" />
                <Picker.Item label="Jewellary and accessories" value="Jewellary and accessories" />
              </Picker>
              </Item>      
            <View style={{paddingHorizontal:20}}>
            <Button disabled={this.state.isloading==true?true:false} onPress={this.addShop} full style={{backgroundColor:'#000000',top:27,position:'relative',paddingHorizontal:90,borderRadius:20,alignItems:'center'}} backgroundColor={'#000000'}
         >
            {this.state.isloading==true?<Spinner color={'white'}/>:  <Text style={{color:'white' ,fontSize:18,alignSelf:'center'}}>Join</Text>}
          </Button>
          
          </View>
 
          </View>
          <Text style={{alignSelf:'center',color:'#555',marginTop:-70,fontSize:13}}>Link Business</Text>
          <Image source={require('./../../../assets/social2.png')} style={{alignSelf:'center',height:50,width:80}}/>
          <View style={{marginTop:5,height:2,width:80, backgroundColor:'black',alignSelf:'center'}}/>

  </ScrollView>
    
          <View style={{position:'absolute',bottom:0,flex:1,width:'100%'}}>
            <Footer1 index={1} navigation={this.props.navigation}/>
          </View>
      </KeyboardAvoidingView>
    );
  }
}