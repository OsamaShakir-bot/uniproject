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
export default class Shops extends React.Component {
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
                            <Text style={{ color: 'black', fontSize: 20,height:20,top:-8 }}> SHOPS</Text>
                        </Body>
                        <Right style={{ flex: 1, justifyContent: "center" }}>

                        <TouchableWithoutFeedback onPress={() => this.props.navigation.openDrawer()} style={{justifyContent: 'flex-start'}}>
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

                    <View style={{ height: 40, }} >

                    </View>

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center" }} >
                        <Text style={{ width: '85%', color: '#000000', fontWeight: 'bold', fontSize: 15 }}> Clothes</Text>
                        <Text style={{ color: '#a4a4a4', fontSize: 15 }}>View all </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", flexDirection: 'row', borderWidth: 0, alignItems: "center", flex: 1, paddingVertical: 10, paddingLeft: 2, flexWrap: 'wrap' }} >
                        {
                            this.state.shopName != 0 && this.state.clothes.map((item, index) => {
                                return (
                                    index < 2 &&
                                    // <View style={{ borderRadius:10,shadowColor: "#000",
                                    // shadowOffset: {
                                    //   width: 0,
                                    //   height: 2,
                                    // },
                                  
                                    // shadowOpacity: 0.23,
                                    // shadowRadius: 2.62,
                                    // borderRadius:7,
                                    // marginHorizontal:5,
                                    // elevation: 4,width: 140, marginRight: 5, height: '100%', flex: 1, alignItems: "center",borderRadius:50,borderColor:'white' }} >
                                    //     <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop',{id:item.id})} style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                    //         <Image source={{uri:item._data.image}}
                                    //             style={{ width: '100%', height: '100%',borderRadius:7 }}
                                    //             resizeMode="cover"
                                    //         />

                                    //     </TouchableOpacity>
                                    //     <Text style={{borderBottomRightRadius:7,borderBottomLeftRadius:7, fontSize: 16, width:"100%",textAlign:'center',backgroundColor:'black',color: 'white',paddingVertical:5,borderBottomRightRadius:7,borderBottomLeftRadius:7,}}>{item._data.shopName}</Text>
                                    // </View>
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
                                  
                                )
                            })



                            // <View style={{ width: 140, marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            //     <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')} style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                            //         <Image source={require('./../../../assets/NationalTrust.png')}
                            //             style={{ width: '100%', height: '100%' }} resizeMode="contain"
                            //         />

                            //     </TouchableOpacity>
                            //     <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                            // </View>

                            // <View style={{ width: 100, marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            //     <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')} style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                            //         <Image source={require('./../../../assets/NationalTrust.png')}
                            //             style={{ width: '100%', height: '100%' }} resizeMode="contain"
                            //         />

                            //     </TouchableOpacity>
                            //     <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                            // </View>
                        }

                    </View>


                    {/* 
            Shoes View */}


                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", marginTop: 5 }} >
                        <Text style={{ width: '85%', color: '#000000', fontWeight: 'bold', fontSize: 15 }}> Shoes</Text>
                        <Text style={{ color: '#a4a4a4', fontSize: 13 }}>View all </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", flexDirection: 'row', borderWidth: 0, alignItems: "center", flex: 1, paddingVertical: 10, paddingLeft: 2 }} >
                        {
                            this.state.shoes != 0 && this.state.shoes.map((item, index) => {
                                return (
                                    index < 2 &&
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
                                )
                            })
                        }


                        {/* <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')} style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./../../../assets/company.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View>
                        <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')} style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./../../../assets/NationalTrust.png')}
                                    style={{ width: '100%', height: '100%' }} resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View> */}



                    </View>


                    {/* 
                JEWELLARY VIEW */}

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", marginTop: 5 }} >
                        <Text style={{ width: '85%', color: '#000000', fontWeight: 'bold', fontSize: 15 }}> Jewellary and accessories</Text>
                        <Text style={{ color: '#a4a4a4', fontSize: 13 }}>View all </Text>
                    </View>

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center", flexDirection: 'row', borderWidth: 0, alignItems: "center", flex: 1, paddingVertical: 10, paddingLeft: 2 }} >

                        {
                            this.state.Jewellary != 0 && this.state.Jewellary.map((item, index) => {
                                return (
                                    index<2&&
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
                                )
                            })
                        }

                        {/* <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')} style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./../../../assets/company.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View>
                        <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')} style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('./../../../assets/NationalTrust.png')}
                                    style={{ width: '100%', height: '100%' }} resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View> */}



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

