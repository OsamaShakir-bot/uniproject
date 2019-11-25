
/* @flow */

import React, { Component } from "react";
import { Container, Button, H3, Text, Header, Title, 
  Content, Icon, Left, Body, Right, Footer, FooterTab, 
  Badge,
  View,
  Row,
  Col} from "native-base";
// import { TouchableOpacity } from "react-native-gesture-handler";
import {TouchableOpacity,Image} from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import Fontisto from 'react-native-vector-icons/Fontisto'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Feather from 'react-native-vector-icons/Feather'
import { white } from "ansi-colors";
// import console = require("console");
class Footer1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
        index:1
    }
    this.changeIndex = this.changeIndex.bind(this)
  }
  changeIndex(number){
    if(number==1)
    {
      this.props.navigation.navigate('Home')
    }
    else if(number==2)
    {
      this.props.navigation.navigate('AllProduct')
    }
    else if(number==3)
    {
      this.props.navigation.navigate('Catagories')
    }
    else if(number==4)
    {
      this.props.navigation.navigate('MyCart')
    }
   
    this.setState({
      index:number
    })
  }
  componentDidMount(){
    this.setState({
      index:this.props.inde
    })
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps)
    this.setState({
      index:nextProps.index
    })
  }
  render() {
    return (
 
      
      <View style={{flexDirection:'row',height:50,backgroundColor:'white'}}>
       <Row>
         <Col style={{alignContent:'center',justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'center',alignSelf:'center',backgroundColor:'white'}} vertical onPress={()=>this.changeIndex(1)}>
            <AntDesign name={'home'} color={this.state.index==1?'#000000':'#555'} size={25}></AntDesign>
           <Text style={{fontSize:12,color:'#000000'}}>Home</Text>
            
          </TouchableOpacity>
          </Col>
          <Col style={{alignContent:'center',justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'center',alignSelf:'center',backgroundColor:'white'}} vertical onPress={()=>this.changeIndex(2)}>
          <Feather name={'shopping-bag'} color={this.state.index==2?'#000000':'#555'} size={25}></Feather>
           <Text style={{fontSize:12,color:'#000000'}}>Shop</Text>
            
          </TouchableOpacity>
          </Col>
          <Col style={{alignContent:'center',justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'center',alignSelf:'center',backgroundColor:'white'}} vertical onPress={()=>this.changeIndex(3)}>
          <Ionicons name={'ios-options'} color={this.state.index==3?'#000000':'#555'} size={25}></Ionicons>
            <Text style={{fontSize:12,color:'#000000'}}>Category</Text>
            
          </TouchableOpacity>
     
          </Col>
          <Col style={{alignContent:'center',justifyContent:'center'}}>
          <TouchableOpacity style={{alignItems:'center',alignSelf:'center',backgroundColor:'white'}} vertical onPress={()=>this.changeIndex(4)}>
          <Image source={require('./../../assets/cart1ico.png')} style={{height:30,width:30}}></Image>
            <Text style={{fontSize:12,color:'#000000',top:0}}>Cart</Text>
            
          </TouchableOpacity>
     
          </Col>

          {/* <Col>
          <TouchableOpacity vertical style={{alignItems:'center',alignSelf:'center',backgroundColor:'white'}}  onPress={() => this.props.navigation.navigate('FeedBack')}>
          <MaterialIcons name={'feedback'} color={'#555'} size={20}></MaterialIcons>
          <Text style={{fontSize:10,color:'#555'}}>Feedback</Text>
          </TouchableOpacity>
          </Col> */}
     </Row>
        </View>
      
    );
  }
}

export default Footer1;
// import React from 'react'
// import { View, StyleSheet, Image } from 'react-native'
// import BottomNavigation, {
//   IconTab,
//   Badge
// } from 'react-native-material-bottom-navigation'
// // import Icon from '@expo/vector-icons/MaterialCommunityIcons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// export default class Footer1 extends React.Component {
//   state = {
//     activeTab: 'games'
//   }

//   tabs = [
//     {
//       key: 'games',
//       label: 'Games',
//       barColor: '#388E3C',
//       pressColor: 'rgba(255, 255, 255, 0.16)',
//       icon: 'gamepad-variant'
//     },
//     {
//       key: 'movies-tv',
//       label: 'Movies & TV',
//       barColor: '#00695C',
//       pressColor: 'rgba(255, 255, 255, 0.16)',
//       icon: 'movie'
//     },
//     {
//       key: 'music',
//       label: 'Music',
//       barColor: '#6A1B9A',
//       pressColor: 'rgba(255, 255, 255, 0.16)',
//       icon: 'music-note'
//     },
//     {
//       key: 'books',
//       label: 'Books',
//       barColor: '#1565C0',
//       pressColor: 'rgba(255, 255, 255, 0.16)',
//       icon: 'book'
//     }
//   ]

//   state = {
//     activeTab: this.tabs[0].key
//   }

//   renderIcon = icon => ({ isActive }) => (
//     <MaterialIcons size={24} color="white" name={icon} />
//   )

//   renderTab = ({ tab, isActive }) => (
//     <IconTab
//       isActive={isActive}
//       showBadge={tab.key === 'movies-tv'}
//       renderBadge={() => <Badge>2</Badge>}
//       key={tab.key}
//       label={tab.label}
//       renderIcon={this.renderIcon(tab.icon)}
//     />
//   )

//   render() {
//     return (
//       <View style={{ flex: 1, backgroundColor: 'white' }}>
//         <View style={{ flex: 1, justifyContent: 'flex-end' }}>
//           {/* <Image
//             source={require('./cut.png')}
//             style={{
//               resizeMode: 'contain',
//               width: 412,
//               bottom: -120,
//               opacity: 0.5
//             }}
//           /> */}
//         </View>
//         <BottomNavigation
//           tabs={this.tabs}
//           activeTab={this.state.activeTab}
//           onTabPress={newTab => this.setState({ activeTab: newTab.key })}
//           renderTab={this.renderTab}
//           // useLayoutAnimation
//         />
//       </View>
//     )
//   }
// }
// import * as React from 'react';
// import { BottomNavigation, Text } from 'react-native-paper';
// // import console = require('console');
// // import console = require('console');
// // import { platform } from 'os';

// const MusicRoute = () => <Text>Albums</Text>;

// const AlbumsRoute = () => <Text>Albums</Text>;

// const RecentsRoute = () => <Text>Recents</Text>;
// const PurchasedRoute = () => <Text>Recents</Text>;

// export default class Footer1 extends React.Component {
//   state = {
//   index: this.props.index,
//   routes: [
//     { key: 'music', title: 'Home', icon: 'home-outline', color: 'white',screen:'Home' },
//     { key: 'albums', title: 'Intervention', icon: 'atom', color: 'white',screen:'Intervene' },
//     { key: 'recents', title: 'Chat', icon: 'wechat', color: 'white',screen:'Home' },
//     { key: 'purchased', title: 'Notifications', icon: 'bell-outline', color: 'white',screen:'Home' },
//   ]
//   };

//   _handleIndexChange = (index) => {
//                                       console.log(index)
//                                       if(index==0)
//                                       {
//                                         this.setState({index},()=>this.props.navigation.navigate('Home'))
//                                         // this.props.navigation.navigate('Home')
//                                       }
//                                      else if(index==1)
                                     
//                                       {
//                                         this.setState({index},()=>this.props.navigation.navigate('Intervene'))
                                        
//                                       }
//                                       else{
//                                         this.setState({index})
//                                       }
                               
//                                     };

//   _renderScene = BottomNavigation.SceneMap({
//     music: MusicRoute,
//     albums: AlbumsRoute,
//     recents: RecentsRoute,
//     purchased: PurchasedRoute,
//   });

//   render() {
    
//     return (
//       <BottomNavigation
//         navigationState={this.state}
//         barStyle={{backgroundColor: 'white'}} 
//         inactiveColor={'grey'} 
//         activeColor={'#000000'}
//         onIndexChange={this._handleIndexChange}
//         renderScene={this._renderScene}
//         style={{marginBottom:-40}}
//       />
//     );
//   }
// }