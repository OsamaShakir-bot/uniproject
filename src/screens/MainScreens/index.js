

import React, { Component } from "react";
import {View, StyleSheet,TouchableOpacity, Text,Dimensions,Image,ScrollView, FlatList,AsyncStorage} from "react-native";
import {Button,Item,Input} from 'native-base'
import Header1 from "./../../components/Header"
import Footer1 from "./../../components/Footer"
//import PushController from './PushController';
import {Col, Row, Grid} from 'react-native-easy-grid';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Fontisto from 'react-native-vector-icons/Fontisto'
import { PieChart } from 'react-native-svg-charts'
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Timeline from 'react-native-timeline-listview'
const data = [ 50, 10, 40,23 ]
 
const randomColor = ['#68dadd', '#00bcd4', '#ff5252','#9ccc64', '#ff5252','#00bcd4', '#68dadd', '#68dadd','#00bcd4']

const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
        value,
        svg: {
            fill: randomColor[index],
            onPress: () => console.log('press', index),
        },
        key: `pie-${index}`,
    }))
class Collaboration extends Component {
  constructor(props) {
    super(props);
    this.data = [
      {time: '09:00', title: 'New Intervention Generator for bed #103', description: 'Event 1 Description'},
      {time: '10:45', title: 'New Intervention Generator for Cardiology #103', description: 'Event 2 Description'},
      {time: '12:00', title: 'New Intervention Generator for Radiology #103', description: 'Event 3 Description'},
      {time: '14:00', title: 'New Intervention Generator for bed #103', description: 'Event 4 Description'},
      {time: '16:30', title: 'New Intervention Generator for bed #103', description: 'Event 5 Description'}
    ]
    this.state = {
      dueitems:0,
      Openitems:0,
      data:[{
        img:require('./../../../assets/avatar-1.jpg'),
        name:'Jameas Gun',
        des:'Bed: A-2',
        time:'2 min ago',
        color:'#fe4060'
      },
      {
        img:require('./../../../assets/avatar-2.jpg'),
        name:'Steve Rojers',
        des:'Bed: R-2',
        time:'10 min ago',
        color:'#0079ee'
      },
      {
        img:require('./../../../assets/avatar-3.jpg'),
        name:'Howard Stark',
        des:'Bed: I-2',
        time:'1 hour ago',
        color:'#2bcc90'
      },
      {
        img:require('./../../../assets/avatar-4.jpg'),
        name:'Sheldon Copper',
        des:'Bed: T-22',
        time:'5 hour ago',
        color:'#0079ee'
      },
      {
        img:require('./../../../assets/avatar-5.jpg'),
        name:'Sam Jones',
        des:'Bed: H-12',
        time:'5 hour ago',
        color:'#fe4060'
      }]

    };
    this.props.navigation.addListener('willFocus', this.componentWillFocus);
  }
  componentWillFocus = async () => {
    this.setState({index:4})
  }
  componentDidMount(){
    this.setState({index:4})
  }

  _keyExtractor = (item, index) => item.key;

  _renderItem = ({item}) => (
    <TouchableOpacity onPress={()=>this.props.navigation.navigate('AssetDetails',{name:item[1],id:item[0]})} style={styles.box2}>
      <View style={{borderLeftWidth:2,borderLeftColor:'#4195d1',padding:5}}>
     <Row>
     <Col style={styles.listMain}>
          <FontAwesome name={'bed'} color={item.color} style={{marginLeft:10}} size={30}/>
            <View style={{paddingLeft:10,justifyContent:'center'}}>
              <Text style={styles.mainText}>{item.name}</Text>
              <Text style={styles.subText}>{item.des}</Text>
              {/* <Text style={styles.subText}>Bed No: {item.patient_details.bed_no}</Text> */}
            </View>
          </Col>
          <Col style={{justifyContent:'center'}}>
          
              {/* <Text style={{ textAlign:"right",fontSize:12, color: '#787878'}}>{item.time}</Text> */}
        <MaterialIcons style={{ textAlign:"right"}} name={'delete-forever'} color={'#e86b6c'} size={25}/>
          </Col>
       </Row>
        </View>
  
    </TouchableOpacity>
    );
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
         <Header1 headerTitle ={'Staff Interactions'} color={'white'} navigation={this.props.navigation} backgroundColor={'#073762'}/>
         <ScrollView style={{paddingBottom:100}}>
         <View style={{padding:20,height:180,paddingTop:20,paddingBottom:0,backgroundColor:'#073762'}}>
          {/* <Text style={{alignSelf:'center',marginBottom:20,color:'white',fontSize:20}}>Intervention Overview</Text> */}
         
          <Row>
            <Col style={{alignItems:'center'}}>  
  
              <AnimatedCircularProgress
                  size={80}
                  width={6}
                  backgroundWidth={4}
                  fill={34}
                  tintColor="white"
                  tintColorSecondary="white"
                  backgroundColor="#ffffff7a"
               
                  lineCap="round"
                >
                {
                  (fill) => (
                    <Text style={{color:'white',fontSize:20}}>
                      { '34%' }
                    </Text>
                  )
                }
              </AnimatedCircularProgress>
              
            </Col>
            <Col style={{alignItems:'center'}}>  
              <AnimatedCircularProgress
                  size={80}
                  width={6}
                  backgroundWidth={4}
                  fill={23}
                  tintColor="white"
                  tintColorSecondary="white"
                  backgroundColor="#ffffff7a"
          
                  lineCap="round"
                >
                {
                  (fill) => (
                    <Text style={{color:'white',fontSize:20}}>
                      { '23%' }
                    </Text>
                  )
                }
              </AnimatedCircularProgress>
            </Col>
            <Col style={{alignItems:'center'}}>  
              <AnimatedCircularProgress
                  size={80}
                  width={6}
                  backgroundWidth={4}
                  fill={68}
                  tintColor="white"
                  tintColorSecondary="white"
                  backgroundColor="#ffffff7a"
                 
                  lineCap="round"
                >
                {
                  (fill) => (
                    <Text style={{color:'white',fontSize:20}}>
                      { '68%' }
                    </Text>
                  )
                }
                 {/* <Text style={{alignSelf:'center',marginTop:10,color:'white',fontSize:13}}>Pulse Insights</Text>  */}
              </AnimatedCircularProgress>
            </Col>
          </Row>
          
          <Row>
            <Col style={{alignItems:'center'}}>     
            <Text style={{alignSelf:'center',marginTop:10,color:'white',fontSize:13}}>Active Users</Text>         
            </Col>
           
            
            <Col style={{alignItems:'center'}}>   
            <Text style={{alignSelf:'center',marginTop:10,color:'white',fontSize:13}}>Active Messages</Text>           
            </Col>
           
            
            <Col style={{alignItems:'center'}}>           
            <Text style={{alignSelf:'center',marginTop:10,color:'white',fontSize:11}}>Active Collaboration</Text>   
            </Col>
            </Row>
        </View>
        
        {/* <View onPress={()=>this.props.navigation.navigate('AssetDetails')} style={styles.box2}>
       
          <Row  >
         
            <Col style={{flexDirection:'row',justifyContent:'center',paddingLeft:10}}>
            <Fontisto style={{ textAlign:"right",justifyContent:'center'}} name={'clock'} color={'#42d163'} size={30} style={{marginTop:7,marginRight:10}}/>
            <View style={{flexDirection:'column'}}>
            <Text style={styles.mainText}>{'30m 49s'}</Text>
            <Text style={styles.subText}>{'Avg. Response Time'}</Text>
            </View>
            </Col>
            <Col>
            {/* <Fontisto style={{ textAlign:"right",justifyContent:'center'}} name={'clock'} color={'#42d163'} size={25}/> 
            </Col>    
      </Row>
  
    
  
    </View> */}

    {/* <View>
      <Text style={{alignSelf:'center',marginVertical:20,color:'#555',fontSize:20}}>Intervention By Priority</Text>
          <PieChart
                  style={ { height: 200 } }
                  data={ pieData }
                  labelRadius={20}
              />
      </View> */}
      <Text style={{alignSelf:'center',marginVertical:20,color:'#555',fontSize:20}}>Latest Activity</Text>
      <Timeline
           data={this.data}
          circleSize={15}
          circleColor='#42d163'
          lineColor='#4195d1'
          detailContainerStyle={{marginTop:-10,color:'#555'}}
          titleStyle={{color:'#555'}}
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', color:'#555', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray',marginBottom:5}}
          options={{
            style:{paddingTop:5,paddingLeft:10,paddingRight:10,paddingBottom:100 }
          }}
        />
        {/* <View style={{marginTop:-50,zIndex:100}}>
            <FlatList
              style={{zIndex:100}}
              data={this.state.data}
              keyExtractor={this._keyExtractor}
              renderItem={this._renderItem}
              style={{padding:20,paddingTop:0}}
            />
        </View> */}
          
        </ScrollView>
        <View style={{position:'absolute',bottom:0,flex:1,width:'100%'}}>
            <Footer1 index={this.state.index} navigation={this.props.navigation}/>
          </View>
      </View>
    );
  }
}

export default Collaboration;
const styles = StyleSheet.create({

  addPatient: {backgroundColor: '#f0f1f2', paddingRight: 20},
  listMain: {flexDirection: 'row', paddingTop: 10, paddingBottom: 10},
  addPatientBtn: { alignSelf: 'flex-end', flexDirection: 'row', textTransform:"capitalize"},
  mainText: { fontSize: 25,fontWeight:'bold', color:'#4195d1'},
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
    marginRight:5,
    flexDirection:'row',
    padding:10,
 
  },
cardtext:{
  color:'#787878',
  marginRight:7,fontSize:12,
  padding:5

},
cardtext2:{  borderRadius:15,
  borderColor: '#c5c5c5',
  borderWidth: 1,
  padding:5,paddingLeft:10,paddingRight:10,color:'#787878',
  marginRight:7,fontSize:12,}
});

