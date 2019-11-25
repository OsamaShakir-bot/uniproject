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
    SafeAreaView, ScrollView
} from "react-native";
import { Header, Body, Left, Right } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from 'react-native-vector-icons/Entypo'

import Footer1 from './../../components/Footer'

import Feather from 'react-native-vector-icons/Feather'
export default class Checkout extends React.Component {

    state = {
        plus: "",
        minus: "",
        calculate: 0,
        quantity: 0,
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





    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 75 }}
                    showsVerticalScrollIndicator={false}
                >
                 <Header
                         style={{
                            marginBottom:10,
                            borderBottomColor:'black',borderBottomWidth:1,
                            backgroundColor: 'white', height: 50,
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
                            <Text style={{ color: 'black', fontSize: 18,top:-6,height:20 }}>CHECKOUT</Text>
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

  

                    <View style={{ paddingVertical: 20, borderWidth: 0, justifyContent: "center", alignItems: "center",paddingTop:0 }} >

                        <Image source={require('./../../../assets/Cap.png')} style={{ right:10,height: 80, width: 80, marginTop: 20 }} resizeMode="contain" />
                        <Text style={{ color: "black", fontSize: 23, marginTop: 10 }}>$ 500</Text>
                        <Text style={{ color: "black", fontSize: 16, marginTop: 8 }}>VISA CARD DETAILS </Text>
                    </View>
                    <View style={{ paddingLeft: 16 }}>
                        <View style={{ borderBottomWidth: 1, paddingVertical: 10,marginBottom:10, borderColor: '#dcdcdc' }}>
                            <Text style={{ color: "#555", fontSize: 14 }}>Coupon </Text>
                            <Text style={{ color: "#224257", fontSize: 16, marginTop: 5, fontWeight: '500' }}>123456789 </Text>

                        </View>
                 
                  
                        <View style={{ borderBottomWidth: 1, paddingVertical: 10, marginBottom:10,borderColor: '#dcdcdc' }}>
                            <Text style={{ color: "#555", fontSize: 14}}>Card Number </Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: "#224257", fontSize: 15, marginTop: 5, width: 60 }}> 0123</Text>
                                <Text style={{ color: "#224257", fontSize: 15, marginTop: 5, width: 60 }}> 0123</Text>
                                <Text style={{ color: "#224257", fontSize: 15, marginTop: 5, width: 60 }}> 0123</Text>
                                <Text style={{ color: "#224257", fontSize: 15, marginTop: 5, width: 760 }}> 0123</Text>
                            </View>

                        </View>
                       
              
                        <View style={{ borderBottomWidth: 1, paddingVertical: 10,marginBottom:10, borderColor: '#dcdcdc' }}>
                            <Text style={{ color: "#555", fontSize: 14 }}> Cardholder Name </Text>
                            <Text style={{ color: "#224257", fontSize: 16, marginTop: 5, fontWeight: '500' }}>John Don </Text>

                        </View>
                  
             
                        <View style={{ borderBottomWidth: 1, paddingVertical: 10, borderColor: '#dcdcdc',flexDirection:'row' }}>
                            <View style={{width:'50%',}}>
                            <Text style={{ color: "#555", fontSize: 14 }}>Expiry Date </Text>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ color: "#224257", fontSize: 15, marginTop: 5, width: 30 }}>05</Text>
                                <Text style={{ color: "#224257", fontSize: 15, marginTop: 5, width: 30 }}> /</Text>
                                <Text style={{ color: "#224257", fontSize: 15, marginTop: 5, width: 30 }}> 21</Text>
                             
                            </View>
                            </View>
                            <View style={{width:'50%',justifyContent:"space-around",paddingLeft:25}}>
                            <Text style={{ color: "#555", fontSize: 14 }}> CVV </Text>
                            <View style={{ flexDirection: 'row', }}>
                               <TouchableOpacity style={{height:10,marginRight:5,width:10,borderRadius:10,backgroundColor:'#3d3d3d'}}>

                               </TouchableOpacity>
                               <TouchableOpacity style={{height:10,marginRight:5,width:10,borderRadius:10,backgroundColor:'#3d3d3d'}}>

                                </TouchableOpacity>
                                <TouchableOpacity style={{height:10,marginRight:5,width:10,borderRadius:10,backgroundColor:'#3d3d3d'}}>

                                </TouchableOpacity>

                             
                            </View>
                            </View>

                        </View>
                        
                       
             
             
             
             
             
                    </View>
                    <TouchableOpacity style={{ marginTop:20,marginHorizontal:"5%",height: 45,width: '90%', backgroundColor: '#000000', justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>PAY SECURE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ marginTop:10,marginHorizontal:"5%",height: 45,width: '90%', backgroundColor: '#000000', justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>proceed via WhatsApp</Text>
                    </TouchableOpacity>

                </ScrollView>
               

                <TouchableOpacity style={{ height: 45, width: '100%', backgroundColor: '#000000', position: 'absolute', bottom: 0, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>PAY SECURE</Text>
                </TouchableOpacity>
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

