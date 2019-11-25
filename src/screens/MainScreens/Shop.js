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
import { Header, Body, Left, Right, Spinner } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import firebase from 'react-native-firebase'
import Footer1 from './../../components/Footer'

import Feather from 'react-native-vector-icons/Feather'
let   product=[]
export default class Shop extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shopsArray: [
                { name: "Lorem Ipsum", price: '$50', },
                { name: "Lorem Ipsum", price: '$50', },
                { name: "Lorem Ipsum", price: '$50', },
                { name: "Lorem Ipsum", price: '$50', },
                { name: "Lorem Ipsum", price: '$50', },
                { name: "Lorem Ipsum", price: '$50', }
    
            ],
           
        };
        // this.setDate = this.setDate.bind(this);
        this.props.navigation.addListener('willFocus', this.componentWillFocus);
      }
      componentWillFocus = async () => {
       this.componentDidMount()
      }
  
      componentDidMount(){
          this.setState({islaoding:true})
          product=[]
          console.log("shop admin",this.props.navigation.getParam('id'))
        this.getShopDeatils(this.props.navigation.getParam('id'))
      }
        async getShopDeatils(id) {
       
        let data = []
        let details = await firebase.firestore().collection("ShopAdmin").doc(id.toString())
       .onSnapshot(function(doc) {
       
        //  console.log(this.state.osama)
       data=doc._data
         
            
        })
        // console.log(osama)
     
            setTimeout(
                function() {
                    this.setState({data: data});
                    if(this.state.data.product.length==0)
                    {
                        this.setState({products: []});
                        this.setState({islaoding:false})
                    }
                    else{
                        for(var i =0;i<this.state.data.product.length;i++)
                        {
                            this.getProduct(this.state.data.product[i],i)
                            console.log(this.state.data.product[i])
                            
                        }
                    }
                    
                }
                .bind(this),
                1000
            );
         
           
       
        
        console.log(this.state.data)
   
    }
    _renderItem = ({item}) => (
        <View style={{
             height: '100%',
             flex: 1,
             
            elevation: 1, borderWidth: 1, borderColor: '#f6f6f6', backgroundColor: 'white',paddingTop:0,
            shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 1,
},
shadowOpacity: 0.20,
shadowRadius: 1.41,

elevation: 2,
marginHorizontal:10,borderRadius:7
        }} >
            <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShopDetails',{data:item,products:this.state.products})} style={{ height: 140, width: '100%', overflow: 'hidden' }}>
                <Image source={{uri:item.data().images[0]}}
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
     );
    getProduct = async(id,i)=>{
    console.log(id,this.state.data.product.length-1,i)
    // let details = await firebase.firestore().collection("Shop").doc(id)
    //    .onSnapshot(function(doc) {
    //     //  console.log(this.state.osama)
    // //    data=doc._data
    //        console.log(doc._data)
            
    //     })
        //  if(this.state.data.product.length==index)
        //  {
        //     // setTimeout(
        //     //     function() {
        //     //         this.setState({products: products});
                    
        //     //     }
        //     //     .bind(this),
        //     //     1000
        //     // );
        //  }
        var  data= await firebase
      .firestore().collection("Products").doc(id.toString())
      .onSnapshot(function(doc) {
          product.push(doc)
          console.log('osaama',doc.data());
      });
            if(this.state.data.product.length-1==i)
         {
            setTimeout(
                function() {
                    this.setState({products: product});
                    this.setState({islaoding:false})
                }
                .bind(this),
                1000
            );
         }
    }
    render() {
        console.log(this.state.products&&this.state.products.length)
        return (

            <SafeAreaView style={{ flex: 1, backgroundColor: '#ffff' }}>
{this.state.islaoding==true?<Spinner color={'black'}/>:
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
                            <Text style={{ color: 'black', fontSize: 18,top:-6,height:20,}}> SHOP VIEW</Text>
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

           

                    <View style={{
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.23,
                        shadowRadius: 2.62,
                        
                        elevation: 4,
                        height: 150, marginVertical: 15,flexDirection:'row',

                        elevation: 1, borderWidth: 1, borderColor: '#f6f6f6', backgroundColor: 'white', marginTop: 20, width: '93%', alignSelf: "center",borderRadius:7
                    }} >
                        <View style={{ width: '50%',justifyContent:"center",alignItems:"center" }}>
                        <Image source={{uri:this.state.data&&this.state.data.image}}  style={{height:'100%',width:'100%', borderTopLeftRadius:7,borderBottomLeftRadius:7}} resizeMode='cover' />
                        </View>
                        <View style={{ width: '50%',alignItems:"center" ,justifyContent:"center"}}>
                            <Text style={{color:'black',fontSize:22}}><Text style={{fontSize:30}}>{this.state.data&&this.state.data.discount}</Text> %OFF</Text>
                            <TouchableOpacity  onPress={()=>this.props.navigation.navigate('ShopDetails')} style={{ height: 40, width: 100, backgroundColor: '#000000', marginTop: 5, justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>{this.state.data&&this.state.data.shopName}</Text>
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={{ flexDirection: 'row', width: '93%', alignSelf: "center" }} >
                        <Text style={{ width: '85%', color: '#000000', fontWeight: 'bold', fontSize: 15 }}> {this.state.data&&this.state.data.catagory}</Text>
                        <Text style={{ color: '#a4a4a4', fontSize: 15 }}>View all </Text>
                    </View>
                   
                    { this.state.products?
                   this.state.products.length==0?
                   <Text style={{alignSelf:'center',marginTop:20}}>Product Not Found</Text>:
                        <FlatList
                        data={this.state.products}
                        numColumns={2}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        style={{marginBottom:300,marginTop:20}}
                        />:
                        <Spinner color={'#000000'}/>
                        }


                </ScrollView>}
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

