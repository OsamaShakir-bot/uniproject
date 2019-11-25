import React from "react";
import {
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    TextInput,
    TouchableWithoutFeedback,
    SafeAreaView, ScrollView,
    FlatList
} from "react-native";
import { Header, Body, Left, Right, Spinner} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from 'react-native-vector-icons/Entypo'
import Feather from 'react-native-vector-icons/Feather'

import firebase from 'react-native-firebase'
import Footer1 from './../../components/Footer'
// import Feather from 'react-native-vector-icons/Feather'
export default class Catagories extends React.Component {

    state = {
        plus: "",
        minus: "",
        calculate: 0,

        CartMap: [
            {
                Name: 'Lorem Ipsum ',
                Orderno: '#122345',
                price: '500',
                source: require('./../../../assets/dummyimg.png'),


            },
            {
                Name: 'Trausers ',
                Orderno: '#122345',
                price: '50',
                source: require('./../../../assets/dummyimg.png'),


            },
            {
                Name: 'Mini Skirt',
                Orderno: '#122345',
                price: '500',
                source: require('./../../../assets/dummyimg.png'),


            },
            {
                Name: 'Shoes',
                Orderno: '#122345',
                price: '100',
                source: require('./../../../assets/dummyimg.png'),


            },
            {
                Name: 'T-shirts',
                Orderno: '#122345',
                price: '200',
                source: require('./../../../assets/dummyimg.png'),


            }
        ]



    }

    Onchange() {




    }



    componentDidMount=async()=>{
        data=[]
        const inventory = await firebase.firestore().collection("Category").get()
        inventory.docs.map((doc, index) => {
            // console.log(doc._data.businessName +' '+doc._data.typeOfBusiness+' '+doc._data.permission )
     
                data.push(doc)
            
    
        }
        )
        console.log(data)
        this.setState({
            shops: data
        })
    }
    _renderItem = ({item}) => (
        console.log("check Shop admin",item),
        <TouchableOpacity onPress={()=>this.props.navigation.navigate('ProductCategory')} style={{width:'120%',height:250}}>
        <ImageBackground source={{uri:item.data().image}} resizeMode={'cover'} style={{justifyContent:'center',paddingLeft:20,width:'100%',height:230}}>
         <Text style={{shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.23,
shadowRadius: 2.62,

elevation: 4,fontSize:25}}>{item.data().name}</Text>
         </ImageBackground>
         </TouchableOpacity>           
        );

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
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
                            <Text style={{ color: 'black', fontSize: 18,top:-6,height:20 }}>CATEGORIES</Text>
                        </Body>
                        <Right style={{ flex: 1, justifyContent: "center" }}>

                        <TouchableWithoutFeedback style={{justifyContent: 'flex-start'}}>
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

 
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 75 }}
                    showsVerticalScrollIndicator={false}
                >




                    {/* </View> */}
                    {this.state.shops? <FlatList
                        data={this.state.shops}
                        
                      
                        extraData={this.state}
                        // style={{width:'100%'}}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        // style={{marginBottom:300,marginTop:20}}
                        />:
                        <Spinner color={'#000000'}/>
                        }
                    {/* <View style={{top:-48}}>
                    <Image source={require('./../../../assets/cat1.png')} resizeMode={'contain'} style={{width:'100%',height:200}}/>
                    <Image source={require('./../../../assets/cat2.png')} resizeMode={'contain'} style={{width:'100%',top:-80,height:200}}/>
                    <Image source={require('./../../../assets/cat3.png')} resizeMode={'contain'} style={{width:'100%',top:-160,height:200}}/>
                    <Image source={require('./../../../assets/cat4.png')} resizeMode={'contain'} style={{width:'100%',top:-240,height:200}}/>
       </View> */}
                </ScrollView>
                <View style={{position:'absolute',bottom:0,flex:1,width:'100%'}}>
       <Footer1 index={1} navigation={this.props.navigation}/>
     </View>

            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    item: {
        // borderBottomColor: "#000",
        backgroundColor: "white",
        alignSelf: "center",
        width: "90%",
        borderRadius: 15,
        elevation: 1
    }
});

