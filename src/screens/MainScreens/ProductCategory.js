
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
FlatList,
    SafeAreaView, ScrollView
} from "react-native";
import { Header, Body, Left, Right ,Spinner} from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import Footer1 from './../../components/Footer'

import Feather from 'react-native-vector-icons/Feather'
import firebase from 'react-native-firebase'
export default class ProductCategory extends React.Component {
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
       this.componentDidMount()
      }
    componentDidMount=async()=> {
        let data = []
        const inventory = await firebase.firestore().collection("Products").get()
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
        <View style={{marginBottom:10,    marginTop:10,
            height: '100%',
            flex: 1,}}>
        <View style={{
        
             
            elevation: 1, borderWidth: 1, borderColor: '#f6f6f6', backgroundColor: 'white',paddingTop:0,
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
marginHorizontal:10
        }} >
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShopDetails',{data:item,products:this.state.products})} style={{ height: 140, width: '100%', overflow: 'hidden' }}>
                <Image source={{uri:item.data().images&&item.data().images[0]}}
                    style={{ width: '100%', height: '100%' }}
                    resizeMode="cover"
                />

            </TouchableOpacity>

            <Text style={{ fontSize: 15, color: '#999999', marginVertical: 5,marginLeft:5 }}>{item.data().name}</Text>
            <Text style={{ fontSize: 11, color: '#999999', }}> #{item.id}</Text>
            <Text style={{ fontSize: 15, color: 'black', position: 'absolute',top:163, right: 10, bottom: 50, fontWeight: '500' }}>{'$'+item.data().price}</Text>

            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('ShopDetails',{data:item})} style={{ height: 40, width: '100%',borderBottomRightRadius:7,borderBottomLeftRadius:7, backgroundColor: '#000000', marginTop: 5, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>BUY NOW</Text>
            </TouchableOpacity>
            <Feather name={"heart"} size={20} color={"#1f4461"}

                style={{ position: 'absolute', right: 15, top: 10 }}
            />
        </View>
        </View>
     );
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
                            <Text style={{ color: 'black', fontSize: 20,top:-8,height:20 }}> PRODUCTS</Text>
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

