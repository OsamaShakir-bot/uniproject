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
import {Col,Row} from 'react-native-easy-grid'


import Feather from 'react-native-vector-icons/Feather'
export default class MyCart extends React.Component {

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

    addItem = () => {
        this.setState({
            quantity: this.state.quantity + 1
        })
    }

    subItem = () => {
        if (this.state.quantity > 1) {
            this.setState({
                quantity: this.state.quantity - 1
            })
        }
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
                            <Text style={{ color: 'black', fontSize: 20,top:-6,height:20 }}> MY CART</Text>
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

     {/* <View style={{ height: 50, position: 'absolute', top: 100, width: '93%', backgroundColor: 'white', alignSelf: "center", borderWidth: 1, flexDirection: 'row', borderRadius: 5, elevation: 1, alignItems: "center", borderColor: '#dfdfdf' }}>

                        <View style={{ width: 60, borderRightWidth: 1, height: 30, alignItems: "center", justifyContent: "center", borderColor: '#dfdfdf' }}>
                            <Feather name={"search"} size={17} color={'#7d7d7d'}
                            />
                        </View>

                        <TextInput
                            placeholder="search"
                            style={{ marginLeft: 10, }}
                            placeholderTextColor="#7d7d7d"
                        />



                    </View> */}

                 



                    <View style={{ width: '93%', alignSelf: "center", borderWidth: 0, height: '100%' }}>

                        {this.state.CartMap.map((item, index) => {
                            return (

                                <View style={{ flexDirection: 'row', marginVertical: 5, backgroundColor: '#f2f3f5', width: '100%', paddingVertical: 5, paddingLeft: 10, borderWidth: 0, borderRadius: 5 }}>

                                    <View style={{ width: '25%', alignSelf: "center", borderWidth: 0.3, overflow: 'hidden', borderColor: '#8ca9af', height: 80, borderRadius: 7, overflow: 'hidden', }}>
                                        <Image source={require('./../../../assets/dummyimg.png')} style={{ height: '100%', width: '100%' }} resizeMode='stretch' />

                                    </View>
                                    <View style={{ width: '40%', alignSelf: "center", height: 100, overflow: 'hidden', justifyContent: "center", paddingLeft: 15 }}>

                                        <Text style={{ color: "#3b3d3c", fontSize: 17 }}> {item.Name} </Text>
                                        <Text style={{ color: '#47484a', paddingVertical: 6 }}> {item.Orderno} </Text>
                                        <Text style={{ color: '#3c3d3f', fontWeight: '500' }}> {item.price} </Text>
                                    </View>
                                    <View style={{ width: '35%', paddingTop: 20, justifyContent: "center", alignItems: "center", flexDirection: 'row', alignSelf: "center", borderWidth: 0, height: 110, overflow: 'hidden', }}>
                                        <TouchableOpacity style={{ right: 5, top: 0, position: "absolute", }} >
                                            {/* <Image source={require('./../../../assets/times.png')}
                                                style={{ height: 15, width: 15, tintColor: '#898b8a' }}
                                                resizeMode="contain" */}
                                            <Entypo name={'cross'} color={"#878787"} size={20} />


                                        </TouchableOpacity>

                                        <TouchableOpacity style={{ borderWidth: 0, height: 50, width: '33.33%', justifyContent: "center" }}
                                            onPress={this.subItem}
                                        >
                                            <Entypo name={'minus'} color={"#878787"} size={20} />
                                        </TouchableOpacity>
                                        <View style={{ borderWidth: 0.5, borderColor: '#adaeb0', backgroundColor: 'white', height: 37, width: '33.33%', borderRadius: 2, alignItems: "center", justifyContent: "center" }}>
                                            <Text style={{ fontSize: 15, color: "#3d3d3d" }}> {this.state.quantity} </Text>
                                        </View>
                                        <TouchableOpacity style={{ borderWidth: 0, height: 50, width: '33.33%', justifyContent: "center", paddingLeft: 7 }}
                                            onPress={this.addItem}



                                        >
                                            <Entypo name={'plus'} color={"#878787"} size={20} />
                                        </TouchableOpacity>
                                        {/*                                                      
                                                           
                                                            <View style={{height:30,width:30,backgroundColor:'white'}}>
                                                                
                                                            </View>
                                                            <Text style={{color:'#47484a',fontSize:30}}> + </Text> */}
                                    </View>







                                </View>


                            )
                        })}



                    </View>
               
                </ScrollView>
                <View style={{padding:10,top:-100,  width: '100%', backgroundColor: 'white', width: '93%', alignSelf: "center", height: 90, justifyContent: "center" }} >
                    <Text style={{ color: '#3c3c3c', fontWeight: '300', fontSize: 15, marginTop: 5 }} > Order Summery </Text>
                        <Row>
                        <Col style={{alignItems:'center'}}>
                            <Text style={{ color: '#3c3c3c', fontWeight: '300', fontSize: 12, marginTop: 5 }} > Sub Total </Text>
                            <Text style={{ color: '#254460', fontWeight: '500', fontSize: 16, marginTop: 1 }} > 4 </Text>
                        </Col>
                        <Col style={{alignItems:'center'}}>
                            <Text style={{ color: '#3c3c3c', fontWeight: '300', fontSize: 12, marginTop: 5 }} > Shipping Tax </Text>
                            <Text style={{ color: '#254460', fontWeight: '500', fontSize: 16, marginTop: 1 }} > $45</Text>
                        </Col>
                        <Col style={{alignItems:'center'}}>
                            <Text style={{ color: '#3c3c3c', fontWeight: '300', fontSize: 12, marginTop: 5 }} > Total Order </Text>
                            <Text style={{ color: '#254460', fontWeight: '500', fontSize: 16, marginTop: 1 }} > $500 </Text>
                        </Col>
                        </Row>
                        <Row>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Checkout')} style={{ height: 45,top:30,width: '100%', backgroundColor: '#000000', justifyContent: "center", alignItems: "center" }}>
                        <Text style={{ color: 'white', fontSize: 18, fontWeight: '500' }}>CHECKOUT</Text>
                    </TouchableOpacity>
                    </Row>
                </View>
               
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

