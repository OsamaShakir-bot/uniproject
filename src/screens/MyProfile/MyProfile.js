

import React, { Component } from "react";
import {View,TextInput, ScrollView,FlatList,TouchableWithoutFeedback,StyleSheet,TouchableOpacity, Text,Dimensions, Image,AsyncStorage} from "react-native";
import { Container, Header, Content, Input, Item,ListItem, CheckBox, Body } from 'native-base';
import Header1 from "./../../components/Header"
import Footer1 from "./../../components/Footer"
//import PushController from './PushController';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Avatar } from 'react-native-paper';


class MyProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dueitems:0,
      Openitems:0,
      one:false,
      two:false,
      selectedIndex:0,
      four:false,
      index:1,
      value:0,
      data: [

        {comment:'Please Take extra precaution in this matter also involve a nurse to close it',img:require('./../../../assets/avatar-4.jpg')}
    ],
         dataUser:[{name:'Sheldon Cooper',img:require('./../../../assets/avatar-2.jpg')},
         {name:'James Gun',img:require('./../../../assets/avatar-3.jpg')},
         {name:'Steve Rogers',img:require('./../../../assets/avatar-4.jpg')}],
  
    

    };
    this.props.navigation.addListener('willFocus', this.componentWillFocus);
  }
  componentWillFocus = async () => {
    this.setState({index:0})
  }



  componentDidMount=async()=> {
  }
    
  onSelect = (selectedIndex) => {
    this.setState({ selectedIndex });
  };
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
         <Header1 color={'white'}  headerTitle={'My Profile'} navigation={this.props.navigation}/>
     
         <ScrollView scrollEnabled={false} contentContainerStyle={{flexGrow:1}} style={{padding:20,paddingHorizontal:0,paddingBottom:70}}>
         <View>
          <View style={{flexDirection:'column',paddingHorizontal:20,alignItems:'center',justifyContent:'center'}}>
            <Image style={{width: 100, height: 100, borderRadius:50, borderWidth: 2, borderColor: '#000000'}} size={75}  source={require("../../../assets/dummy.jpg")} />
            <View style={{flexDirection: 'column',justifyContent:'center',alignItems:'center',marginTop:10}}>
                <Text style={{color:'#555',fontSize:25}}>{"Anna Williams"}</Text>
                <Text style={{color:'#555',fontSize:16,marginTop:5}}>{"Head Nurse"}</Text>
              </View>
         
          </View>
       
        <View style={{marginHorizontal:0,marginBottom:-2,marginVertical:10,marginTop:20,paddingBottom:0,borderBottomWidth:1,borderBottomColor:'#d8d8d8'}}>
          <View style={{marginLeft:20,paddingBottom:10,borderBottomWidth:2,borderBottomColor:'#000000', alignSelf: 'flex-start' }}>
                <Text style={{color:'#000000',fontSize:15,}}>PATIENT LEADERBOARD</Text>
          </View>
        </View>
        <View style={{marginLeft:10,marginTop:10,justifyContent:'flex-start',alignItems:'center',flexDirection:'row'}}>
          <Image style={{width: 50, height: 50}}   source={require("../../../assets/rank.png")} />
          <View style={{flexDirection: 'column',justifyContent:'center',alignItems:'center',marginTop:10,marginLeft:30}}>
                <Text style={{color:'#555',fontSize:20}}>{"1st Rank"}</Text>
                
              </View>
        </View>
        <View style={{marginHorizontal:0,marginBottom:-2,marginVertical:10,marginTop:20,paddingBottom:0,borderBottomWidth:1,borderBottomColor:'#d8d8d8'}}>
          <View style={{marginLeft:20,paddingBottom:10,borderBottomWidth:2,borderBottomColor:'#000000', alignSelf: 'flex-start' }}>
                <Text style={{color:'#000000',fontSize:15,}}>PERSONAL INFORMATION</Text>
          </View>
        </View>
     
        <View style={styles.row}>
          <SimpleLineIcons name={'phone'} color={'#4195d1'} size={25} style={{marginRight:20}} />
          <View style={styles.dataContainer}>
            <View style={styles.messageInfoContainer}>
              <Text style={{color:'#555',fontSize:16}} >{"(651)555-1234"}</Text>
          
            </View>
            
              <Text style={{color:'#555',marginTop:5}} >Mobile</Text>
          
          </View>

        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons name={'email-outline'} color={'#4195d1'} size={25} style={{marginRight:20}} />
          <View style={styles.dataContainer}>
            <View style={styles.messageInfoContainer}>
              <Text style={{color:'#555',fontSize:16}} >{"annawilliam@pxpulse.com"}</Text>
          
            </View>
            
              <Text style={{color:'#555',marginTop:5}} >Email</Text>
          
          </View>

        </View>
       
   
        </View>
     
      </ScrollView>

        
       <View style={{position:'absolute',bottom:0,flex:1,width:'100%'}}>
       <Footer1 index={this.state.index}  navigation={this.props.navigation}/>
     </View>
      </View>
    );
  }
}

export default MyProfile;

const styles = StyleSheet.create({
  dataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  containerIndicator: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    marginVertical: 2,
  },
  messageInfoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingHorizontal:20,
    marginTop:20

    
  },
  mainBox: {padding:10, alignItems:"center"},
  subBox: {
    backgroundColor: 'white',
    width: '100%',
    alignItems: 'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  box1:{
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    paddingVertical:10,
    elevation: 5,backgroundColor:'white',alignItems:'center',justifyContent:'center',marginTop:15,borderRadius:5,marginHorizontal:20}
  ,
  numText:{
    alignItems:"center",justifyContent:'center',height:100 ,width:100,borderWidth: 2,borderRadius: 50,
  },
  btn:{
    height:60,width:60,alignItems:'center',justifyContent:'center',alignSelf: 'center',
  },
  btnText:{
    color:'#787878',alignSelf: 'center',fontSize:13,marginTop: 7,
  },circle:{
    flexDirection:'row',marginBottom:5,justifyContent:'center',alignItems:'center',color:'white',borderColor:'white',borderWidth:2,borderRadius:30,height:50,width:50,
  },
  bar:{
    height:18,width:7,backgroundColor:'#bfbfbf',marginRight:4
  },
  addPatient: {backgroundColor: '#f0f1f2', paddingRight: 20},
  listMain: {flexDirection: 'row', paddingTop: 10, paddingBottom: 10},
  addPatientBtn: { alignSelf: 'flex-end', flexDirection: 'row', textTransform:"capitalize"},
  mainText: { fontSize: 16,fontWeight:'bold', color:'#555'},
  subText:{ fontSize: 14, color: '#787878'},
  listPic: { width: 50, height: 50, borderRadius: 25},
  box2: {
    // alignItems:'center',
    // justifyContent:'center',
    backgroundColor:'#f8f8f8',flexDirection:'column',borderRadius:5,shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,
   
    elevation: 1,
    marginTop: 10,
    padding:5,
    marginRight:5
},
cardtext:{
  color:'#787878',
  marginRight:7,fontSize:12,
  padding:5

},
});
