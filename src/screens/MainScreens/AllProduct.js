
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

import Footer1 from './../../components/Footer'

import Feather from 'react-native-vector-icons/Feather'
import firebase from 'react-native-firebase'
export default class AllProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clothes: [],
            shoes: [],
            Jewellary: []
        };
        this.props.navigation.addListener('willFocus', this.componentWillFocus);
    }
    componentWillFocus = async () => {
        this.gettingClothes();
        this.gettingShoes();
        this.gettingJewellary();
      }
    componentDidMount() {
        this.gettingClothes();
        this.gettingShoes();
        this.gettingJewellary();
    }
    async gettingClothes() {
        let data = []
        const inventory = await firebase.firestore().collection("ShopAdmin").get()
        inventory.docs.map((doc, index) => {
            console.log('inventory data',doc)
            // console.log(doc._data.businessName +' '+doc._data.typeOfBusiness+' '+doc._data.permission )
            if (doc._data.catagory == "Clothes") {
               console.log(doc._data.shopName)
                data.push(doc)
            }

        }
        )
        console.log()
        this.setState({
            clothes: data
        })
        console.log('osama',this.state.clothes);
    }
    async gettingShoes() {
        console.log("========================================================")
        let data = []
        const inventory = await firebase.firestore().collection("ShopAdmin").get()
        inventory.docs.map((doc, index) => {
           
            if (doc._data.catagory == "Shoes") {
       
                data.push(doc)
            }

        }
        )
        this.setState({
            shoes: data
        })
        console.log('osama shoes',this.state.shoes);
    }
    async gettingJewellary() {
        console.log("========================================================")
        let data = []
        const inventory = await firebase.firestore().collection("ShopAdmin").get()
        inventory.docs.map((doc, index) => {
         
            if (doc._data.catagory == "Jewellary and accessories") {
               
                data.push(doc)
            }

        }
        )
        console.log(data)
        this.setState({
            Jewellary: data
        })
        
    }

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>

                <ScrollView >
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
                            <Text style={{ color: 'black', fontSize: 20,top:-8,height:20 }}> SHOP</Text>
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

  
                   <View>
                            <Image style={{alignSelf:'flex-end',height:40,width:200,marginRight:10}} source={require('./../../../assets/filter.png')}/>
                    </View>
                    <View>
                    <Image style={{height:200,width:'100%',marginRight:10,marginTop:10}} source={require('./../../../assets/product.png')}/>
                    <Image style={{height:200,width:'100%',marginRight:10,marginTop:10}} source={require('./../../../assets/product.png')}/>
                    
                    <Image style={{height:200,width:'100%',marginRight:10,marginTop:10}} source={require('./../../../assets/product.png')}/>
                    
                    {/* <Image style={{height:200,width:'100%',marginRight:10,marginTop:10}} source={require('./../../../assets/product.png')}/> */}
                    
                    </View>


       

                </ScrollView>
                <View style={{ position: 'absolute', bottom: 0, flex: 1, width: '100%' }}>
                    <Footer1 index={1} navigation={this.props.navigation} />
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

