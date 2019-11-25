/* @flow */
import React, { Component } from "react";
import {TouchableWithoutFeedback,TouchableOpacity, StyleSheet,AsyncStorage, View, Text, Image} from 'react-native'
import Entypo from 'react-native-vector-icons/Entypo';
import {Button,Item,Input, Right, Col} from 'native-base'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { Row } from "react-native-easy-grid";
// import { TouchableOpacity } from "react-native-gesture-handler";
export default class Header1 extends Component {
  constructor(props){
    super(props)
    this.state={
      userName:''
    }
  }
  printMyName=(first, lastname)=>{
    return first+' hello '+lastname
  }
  componentDidMount(){
    this._retrieveData()
  }
  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('userName');
      const value1 = await AsyncStorage.getItem('userType');
        this.setState({
          userName:value,
          userType:value1
        })
        // We have data!!
        console.log(value);
      
    } catch (error) {
      // Error retrieving data
    }
  };
  render() {
    return (
      <View style={{height:70, borderBottomColor:'black',borderBottomWidth:1,flexDirection: 'row',justifyContent:'center', alignItems: 'center', backgroundColor: 'white',paddingRight:20,paddingTop:10}}>
        <Row>
          <Col>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.openDrawer()} style={{justifyContent: 'center',alignItems:'center',marginTop:30}}>
            {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
            <Image
              style={styles.drawerImage}
              source={require("./../../assets/icondraw.png")}
              />
          </TouchableWithoutFeedback>
          </Col>
          <Col>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.openDrawer()} style={{justifyContent: 'flex-start'}}>
            {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
            <Image
              style={{height:80,width:130}}
              source={require("./../../assets/logo.png")}
              />
          </TouchableWithoutFeedback>
          </Col>
          <Col style={{alignItems:'flex-end'}}>
            <View style={{flexDirection:'row'}}>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.openDrawer()} style={{justifyContent: 'flex-start'}}>
            {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
            <Image
              style={[styles.drawerImage,{width:55,height:55,top:10,marginLeft:10,left:10}]}
              source={require("./../../assets/heartico.png")}
              />
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={() => this.props.navigation.navigate('MyCart')} style={{justifyContent: 'flex-start'}}>
            {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
            <Image
              style={[styles.drawerImage,{width:50,height:50,top:10,marginLeft:4,left:10}]}
              source={require("./../../assets/cartico.png")}
              />
          </TouchableWithoutFeedback>
          </View>
          </Col>
          
          </Row>
      </View>
    );
  }
}
const styles = StyleSheet.create({drawerImage: {position:'relative',top:20,width: 35, height: 35,marginLeft:15}})
