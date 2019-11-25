

import React, { Component } from "react";
import {View,TouchableWithoutFeedback, ScrollView,FlatList,StyleSheet,TouchableOpacity, Text,Dimensions, Image,AsyncStorage} from "react-native";
import {Button,Item,Input, Spinner} from 'native-base'
import Header1 from "./../../components/Header"
import Footer1 from "./../../components/Footer"
//import PushController from './PushController';
import {Col, Row} from 'react-native-easy-grid';
import Feather from 'react-native-vector-icons/Feather';
import { BarChart, XAxis,Grid } from 'react-native-svg-charts'
import { Defs, LinearGradient, Stop } from "react-native-svg";
// import Slideshow from 'react-native-image-slider-show';
import firebase from 'react-native-firebase'
import Carousel from 'react-native-snap-carousel';
// import {  } from "react-native-gesture-handler";
// import { ScrollView } from "react-native-gesture-handler";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dueitems:0,
      position: 1,
      interval: null,
      dataSource: [
        {
          title: 'Title 1',
          caption: 'Caption 1',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 2',
          caption: 'Caption 2',
          url: 'http://placeimg.com/640/480/any',
        }, {
          title: 'Title 3',
          caption: 'Caption 3',
          url: 'http://placeimg.com/640/480/any',
        },
      ],
   

    };
    this.props.navigation.addListener('willFocus', this.componentWillFocus);
  }
  componentWillFocus = async () => {
    this.setState({index:1})
  }
   getTime( ) {
    var time = new Date();
    return time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: false })
    
  }
  getDate(){
    var dateObj = new Date();
    var month = dateObj.getUTCMonth() + 1; //months from 1-12
    var day = dateObj.getUTCDate();
    var year = dateObj.getUTCFullYear();

    newdate = month +" / " +day +" / "+ year ;
    return newdate
  }

  componentWillMount(){
    console.log(1)
    this.setState({index:1})
  }
  componentDidMount=async()=> {

    let data = []
    const inventory = await firebase.firestore().collection("ShopAdmin").get()
    inventory.docs.map((doc, index) => {
        // console.log(doc._data.businessName +' '+doc._data.typeOfBusiness+' '+doc._data.permission )
 
            data.push(doc)
        

    }
    )
    console.log(data)
    this.setState({
        shops: data
    })
    dataSlider = []
    const slider = await firebase.firestore().collection("Slider").get()
    slider.docs.map((doc, index) => {
        // console.log(doc._data.businessName +' '+doc._data.typeOfBusiness+' '+doc._data.permission )
 
        dataSlider.push(doc)
        

    }
    )
    console.log(data)
    this.setState({
        sliders: dataSlider
    })
  }

  _renderItemSlider ({item, index}) {
    return (
      <Image source={{uri:item.data().image}} style={{marginTop:0,width:'100%',height:200}}/>

    );
}
  _renderItem = ({item}) => (
     console.log("check Shop admin",item),
    
    <View style={{flex: 1,
      margin:10,
      width:'25%',borderRadius:60,
      shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,}}>
    <View style={{

         
        elevation: 2, borderTopLeftRadius:10,borderRadius:10,borderWidth: 1, borderColor: '#f6f6f6', backgroundColor: 'white',
    
    
    }} >
      
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('Shop',{id:item.id})} style={{ height: 120, width: '100%', overflow: 'hidden' }}>
            <Image source={{uri:item.data().image}}
                style={{ borderTopLeftRadius:10,borderTopRightRadius:10,width: '100%', height: '100%' }}
   resizeMode={'cover'}
            />

        </TouchableOpacity>

     
        {/* <Text style={{ fontSize: 11, color: '#999999', }}> #{item.id}</Text>
        <Text style={{ fontSize: 15, color: '#999999', position: 'absolute',top:163, right: 20, bottom: 50, fontWeight: '500' }}>{'$'+item.data().price}</Text> */}

        
        {/* <Feather name={"heart"} size={20} color={"#1f4461"}

            style={{ position: 'absolute', right: 15, top: 10 }}
        /> */}
             <View style={{borderBottomLeftRadius:10,borderBottomRightRadius:10,paddingVertical:5,backgroundColor:'black',width:'100%'}}>
               <Text style={{borderRadius:10,alignSelf:'center',textTransform:'capitalize', fontSize: 14,textAlign:'center', color: 'white'}}>{item.data().shopName}</Text>
               </View>

    </View>
       </View>
 );
  formatDate = (date) => {
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear();
  }
  render() {
    return (
      <View style={{flex: 1}}>
         <Header1 headerTitle={'Home'} navigation={this.props.navigation}/>
         <ScrollView>
          <View style={{paddingBottom:100}}>
          {/* <View style={{   width: '93%', backgroundColor: 'white', alignSelf: "center", borderWidth: 1, flexDirection: 'row', borderRadius: 5, elevation: 1, alignItems: "center", borderColor: '#dfdfdf' }}>

<View style={{ width: 60, borderRightWidth: 1, height: 30, alignItems: "center", justifyContent: "center", borderColor: '#dfdfdf' }}>
    <Feather name={"search"} size={17} color={'#7d7d7d'}
    />
</View>

<TextInput
    placeholder="Search"
    style={{ marginLeft: 10, }}
    placeholderTextColor="#7d7d7d"
/>



</View> */}
            {this.state.sliders?  <Carousel
              ref={(c) => { this._carousel = c; }}
              data={this.state.sliders}
              renderItem={this._renderItemSlider}
              autoplay={true}
              autoplayInterval={2000}
              loop={true}
              sliderWidth={Dimensions.get('window').width}
              itemWidth={Dimensions.get('window').width}
            />:
            <Spinner color={'#000000'}/>
            }
          {/* <Image source={require('./../../../assets/homeCover.png')} style={{marginTop:0,width:'100%',height:200}}/> */}
       {/* <Slideshow 
        dataSource={this.state.dataSource}
        position={this.state.position}
        onPositionChanged={position => this.setState({ position })} /> */}
      
          <View style={{marginHorizontal:0,marginBottom:-2,marginVertical:20,marginTop:20,paddingBottom:0,borderBottomWidth:1,borderBottomColor:'#d8d8d8'}}>
            <View style={{marginLeft:20,paddingBottom:10,borderBottomWidth:2,borderBottomColor:'#000000', alignSelf: 'flex-start' }}>
                  <Text style={{color:'#000000',fontSize:15,}}>Featured SHOPS</Text>
                  
            </View>
            <Text style={{position:'absolute',right:12}}>View All</Text>
          </View>
    
          {/* <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('ShopDetails')}><Image source={require('./../../../assets/pica1.png')} style={{marginTop:20,width:'100%',height:170}}/></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('ShopDetails')}><Image source={require('./../../../assets/pica1.png')} style={{marginTop:20,width:'100%',height:170}}/></TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={()=>this.props.navigation.navigate('ShopDetails')}><Image source={require('./../../../assets/pica1.png')} style={{marginTop:20,width:'100%',height:170}}/></TouchableWithoutFeedback> */}

                     {this.state.shops? <FlatList
                        data={this.state.shops}
                        numColumns={2}
                        columnWrapperStyle={{justifyContent:'space-between'}}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        style={{marginBottom:300,marginTop:20}}
                        />:
                        <Spinner color={'#000000'}/>
                        }
          
         </View>
       
         </ScrollView>
       <View style={{position:'absolute',bottom:0,flex:1,width:'100%'}}>
       <Footer1 index={this.state.index} navigation={this.props.navigation}/>
     </View>
      </View>
    );
  }
}

export default Home;

const styles = StyleSheet.create({
  mainBox: {padding:10, alignItems:"center"},
  subBox: {
    backgroundColor: 'white',
    width: '95%',
    alignItems: 'center',
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
  box1:{
    shadowOffset: {
      width: 0,
      height: 1,
  },
  
  shadowOpacity: 0.18,
  shadowRadius: 1.00, elevation: 1,backgroundColor:'#2bcc90',marginHorizontal:10,alignItems:'center',justifyContent:'center',borderRadius:5}
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
  }
});
