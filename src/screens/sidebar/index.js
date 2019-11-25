
import React, { Component } from "react";
import {Image, FlatList, View, StyleSheet, Dimensions,ImageBackground, Text,Platform, TouchableOpacity,AsyncStorage} from "react-native";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;

// const default_person = require("../../../assets/dummy.png");

export default class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      datas : [],
      selectedID: 1,
      username:'',
      userType:'',
    }
  }
  componentDidMount(){
    this._retrieveData()
    
  }
  _retrieveData = async () => {
  

          this.setState({datas : [
            { id: '1', name: "Home", key: "Home", selectIcon: require('../../../assets/sidehome_white.png'), unselectIcon: require('../../../assets/sidehome_blue.png') },
            { id: '2', name: "Shops", key: "Shops", selectIcon: require('../../../assets/shop_white.png'), unselectIcon: require('../../../assets/shop_blue.png') },
            { id: '3', name: "Shops By Catagory", key: "Catagories", selectIcon: require('../../../assets/cat_white.png'), unselectIcon: require('../../../assets/cat_blue.png') },
            // { id: '4', name: "Calendar", key: "Calendar", selectIcon: require('../../../assets/antenna-1.png'), unselectIcon: require('../../../assets/antenna.png') },
            { id: '5', name: "My Account", key: "MyAccount", selectIcon: require('../../../assets/contact_white.png'), unselectIcon: require('../../../assets/contact_blue.png') },
            // { id: '6', name: "Preventive Maintenance", key: "PreventiveMaintenance", selectIcon: require('../../../assets/history-button-1.png'), unselectIcon: require('../../../assets/history-button.png') },
            // { id: '7', name: "Pending Help Calls", key: "HelpCalls", selectIcon: require('../../../assets/phone-call-1.png'), unselectIcon: require('../../../assets/phone-call.png') },
            { id: '6', name: "Join As Seller", key: "Seller", selectIcon: require('../../../assets/seller_white.png'), unselectIcon: require('../../../assets/seller_blue.png') },
            // { id: '6', name: "Join As Seller", key: "Seller", selectIcon: require('../../../assets/seller_white.png'), unselectIcon: require('../../../assets/seller_blue.png') },
            
            // { id: '10', name: "Account", key: "Profile", selectIcon: require('../../../assets/inbox-1.png'), unselectIcon: require('../../../assets/inbox.png') },
            { id: '7', name: "Contact Us", key: "Contact", selectIcon: require('../../../assets/contact_white.png'), unselectIcon: require('../../../assets/contact_blue.png') },
            { id: '8', name: "Arabic", key: "ShopDetails1", selectIcon: require('../../../assets/arabic_white.png'), unselectIcon: require('../../../assets/arabic_blue.png') },
          
            // { id: '9', name: "Log Out", key: "Logout", selectIcon: require('../../../assets/logout_white.png'), unselectIcon: require('../../../assets/logout_blue.png') },
            // { id: '10', name: "Settings", key: "Settings", selectIcon: require('../../../assets/setting-1.png'), unselectIcon: require('../../../assets/setting.png') },
          ]})
        
        // We have data!!
      try{
      var value= await AsyncStorage.getItem('user')
        this.setState({username:value})
      }
      catch(error)
      {

      }
    
  };

logout=async()=>{
  try{
    await AsyncStorage.clear()
    this.props.navigation.navigate('Login')
  }
  catch(error)
  {

  }

}
  _renderItem = ({item}) => (
    <TouchableOpacity style={{flexDirection: 'row', backgroundColor:(item.id == this.state.selectedID) ? '#000000' : 'white',alignItems:"center"}}
          onPress={item.id==9?this.logout:() => {this.props.navigation.navigate(item.key)
            this.setState({selectedID: item.id}) }}>
        <View style={{backgroundColor:(item.id == this.state.selectedID) ? '#000000' : 'white',padding:10}}>       
          <Image source={(item.id == this.state.selectedID) ? item.selectIcon : item.unselectIcon} style={{width: 35, height: 35}} />
        </View>
        <Text style={{fontSize: 16, marginLeft: 20, color: (item.id == this.state.selectedID) ? 'white' : '#555'}}>
          {item.name}
        </Text>
    </TouchableOpacity>
    
  );

  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
                 <ImageBackground   source={require("../../../assets/drawerback.png")} style={styles.drawerCover}>
             <View style={{flexDirection:'row', justifyContent: 'space-evenly', alignItems: 'center'}}>
              <Image
              style={styles.drawerImage}
              source={require("../../../assets/avatar-1.jpg")}
              />
              <View style={{flexDirection: 'column'}}>
                <Text style={{color:'white',fontSize:18}}>{this.state.username}</Text>
                {/* <Text style={{color:'white',fontSize:16}}>{"Head Nurse"}</Text> */}
              </View>
            </View>
          </ImageBackground>

          <FlatList
            data={this.state.datas}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            extraData={this.state}
            style={{backgroundColor:'white'}}
          />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  drawerCover: {
    alignSelf: "stretch",
    height: deviceHeight / 3.5,
    width: null,
    position: "relative",
    marginBottom: 10
  },
  drawerImage: {
    position: "absolute",
    left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
    top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
    width: 210,
    height: 75,
    resizeMode: "cover"
  },
  text: {
    fontWeight: Platform.OS === "ios" ? "500" : "400",
    fontSize: 16,
    marginLeft: 20
  },
  badgeText: {
    fontSize: Platform.OS === "ios" ? 13 : 11,
    fontWeight: "400",
    textAlign: "center",
    marginTop: Platform.OS === "android" ? -3 : undefined
  },
  drawerCover: {alignSelf: "stretch", height: 200, width: null, position: "relative", justifyContent: 'center',},
  drawerImage: {width: 60, height: 60, borderRadius:50, borderWidth: 0, borderColor: 'white'}

});
