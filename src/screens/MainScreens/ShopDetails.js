import React from "react";
import {
    ImageBackground,
    Image,
    StyleSheet,
    TouchableOpacity,
    Text,
    View,
    Dimensions,
    TouchableWithoutFeedback,
    FlatList,
    SafeAreaView, ScrollView
} from "react-native";
import { Header, Body, Left, Right } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Entypo from 'react-native-vector-icons/Entypo'
import Footer1 from './../../components/Footer'

// import ImageSlider from 'react-native-image-slider';

import Feather from 'react-native-vector-icons/Feather'
import MyCart from "./MyCart";
import ImageView from 'react-native-image-view';
import { Button } from "react-native-paper";
 
import Carousel from 'react-native-snap-carousel';
export default class ShopDetails extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        plus: "",
        minus: "",
        calculate: 0,
        quantity: 0,
        orange: false,
        green: false,
        blue: false,
        showImage:false,
        CartMap: [
         
            {
                Name: 'Lorem Ipsum ',

                price: '500',
                Image: require('./../../../assets/indian.jpg'),
                heartcolor:'transparent'


            },
            {
                Name: 'Lorem Ipsum ',

                price: '500',
                Image: require('./../../../assets/shirt.jpg'),

                heartcolor:'transparent'

            },
            {
                Name: 'Lorem Ipsum ',

                price: '500',
                Image: require('./../../../assets/images.jpg'),
                heartcolor:'transparent'


            },
            {
                Name: 'Lorem Ipsum ',
                heartcolor:'transparent',
                price: '500',
                Image: require('./../../../assets/images.jpg'),


            },






        ]



    };
  
    this.props.navigation.addListener('willFocus', this.componentWillFocus);
}
componentWillFocus = async () => {
 this.componentDidMount()
}

    componentDidMount=async()=>{
        console.log(this.props.navigation.getParam('data'))
        this.setState({
            productDetails:this.props.navigation.getParam('data')

        })
    }

    _renderItem = ({item}) => (
        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Shops',{data:item,products:this.props.navigation.getParam('products')})} style={{ marginHorizontal:2,width: '32%', height: 105, borderWidth: 0.4,borderColor:'#d9d0ed', marginBottom: 30 }}>
        <View style={{ width: '100%', height: '100%', borderWidth: 0,overflow:'hidden' }}>
            <Image source={{uri:item.data().images[0]}} style={{height:'100%',width:'100%'}} resizeMode='cover' />
                                                       
                 <Feather name={"heart"} size={20} color={"#1f4461"}

                style={{ position: 'absolute', right: 15, top: 10 }}
            />
           


        </View>
        <Text style={{ fontSize: 12 }}>{item.data().name}

              <Text style={{ fontSize: 12, color: '#3b3b3b', fontWeight: '500' ,textAlign:'left'}}>  {'$'+item.data().price} </Text>
        </Text>
    </TouchableOpacity>
        // <View style={{
        //      height: '100%',
        //      flex: 1,
             
        //     elevation: 1, borderWidth: 1, borderColor: '#f6f6f6', backgroundColor: 'white',padding:10
        // }} >
        //     <TouchableOpacity onPress={()=>this.props.navigation.navigate('ShopDetails',{data:item})} style={{ height: 140, width: '100%', overflow: 'hidden' }}>
        //         <Image source={{uri:item.data().images[0]}}
        //             style={{ width: '100%', height: '100%' }}
        //             resizeMode="contain"
        //         />

        //     </TouchableOpacity>

        //     <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5,marginLeft:5 }}>{item.data().name}</Text>
        //     <Text style={{ fontSize: 11, color: '#999999', }}> #{item.id}</Text>
        //     <Text style={{ fontSize: 15, color: '#999999', position: 'absolute',top:163, right: 20, bottom: 50, fontWeight: '500' }}>{'$'+item.data().price}</Text>

        //     <TouchableOpacity  onPress={()=>this.props.navigation.navigate('ShopDetails',{data:item})} style={{ height: 40, width: '100%', backgroundColor: '#000000', marginTop: 5, justifyContent: "center", alignItems: "center" }}>
        //         <Text style={{ color: 'white', fontSize: 12, fontWeight: '500' }}>BUY NOW</Text>
        //     </TouchableOpacity>
        //     <Feather name={"heart"} size={20} color={"#1f4461"}

        //         style={{ position: 'absolute', right: 15, top: 10 }}
        //     />
        // </View>
     );

  _renderItemSlider ({item, index}) {
    return (
        <View style={{shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        
        elevation: 3, width: '100%',  height: 200, alignSelf: "center", borderWidth: 1, borderColor: '#d3ecf1', borderRadius: 10, overflow: 'hidden',marginVertical:10 }}>
        
                                <Image source={{uri:item}}  style={{height:'100%',width:'100%',shadowColor: "#000",
        }} resizeMode='cover' />
                           
                                    <View style={{ position: 'absolute', right: 10, top: 10, alignItems: "center", justifyContent: "center" }}>
        
                                        <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: '#cae2e6', alignItems: "center", justifyContent: "center", }}>
        
                                            <Feather name={"heart"} size={17} color={'#2c3e52'} />
                                        </View>
        
                                        {/* <View style={{ width: 35, height: 35, borderRadius: 35, marginTop: 10, backgroundColor: '#cae2e6', alignItems: "center", justifyContent: "center", }}>
        
        
                                            <Feather name={"plus"} size={17} color={'#2c3e52'} />
                                        </View> */}
        
        
        
        
                                    </View>
        
        
        
                                </View>
                               

    );
}
    render() {
        console.log("osama---------",this.props.products)
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>

                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 75 }}
                    showsVerticalScrollIndicator={false}
                >
              <Header
                         style={{
                            marginBottom:-10,
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
                            <Text style={{ color: 'black', width:150,fontSize: 18,top:-6,height:20 }}> PRODUCT VIEW</Text>
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

    
                    <Carousel
              ref={(c) => { this._carousel = c; }}
                                data={this.state.productDetails&&this.state.productDetails.data().images}
                                renderItem={this._renderItemSlider}
                                autoplay={true}
                                autoplayInterval={3000}
                                loop={true}
                                
                                sliderWidth={Dimensions.get('window').width}
                                itemWidth={Dimensions.get('window').width}
                                />
                    <View style={{ alignSelf: "center", width: '90%', flex: 1 }} >
                                {/* Small picture View */}
                                <ImageView
                                    images={[
                                        {
                                            source: {
                                                uri: this.state.imageToShow,
                                            },
                                            title: '',
                                            width: 600,
                                            height: 720,
                                        },
                                    ]}
                                    onClose={()=>this.setState({showImage:false})}
                                    imageIndex={0}
                                    isVisible={this.state.showImage}
                                    renderFooter={(currentImage) => (<View><Text>My footer</Text></View>)}
                                />
                        {/* <View style={{ flexDirection: 'row', marginTop: 10, paddingLeft: 2 }} >
                        {this.state.productDetails&&this.state.productDetails.data().images != 0 && this.state.productDetails&&this.state.productDetails.data().images.map((item, index) => {
                                return (
                                    index < 6 &&
                                    
                                    <TouchableOpacity onPress={()=>this.setState({imageToShow:item,showImage:true})} style={{ height: 50, width: 55, borderWidth: 1, marginRight: 13, borderColor: '#d3ecf1' }}>
                                        <Image source={{uri:item}}  style={{height:'100%',width:'100%'}} resizeMode='cover' />
                                    </TouchableOpacity>
                                )
                            })
                        }
                        

                        </View> */}





                        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
                            <View style={{ width: '70%' }}>
                                <Text style={{ color: '#000000', fontSize: 20, }}>Price
                                <Text style={{ color: "#000000", fontSize: 20 }}>  ${this.state.productDetails&&this.state.productDetails.data().price}
                                </Text>

                                </Text>
                            </View>


                            <View style={{justifyContent:'center'}}>
                                <Text style={{ textAlign: "right", marginLeft: 5, color: '#000000' }}>#1234567889</Text>
                            </View>
                        </View>
                        <TouchableOpacity style={{ marginVertical:10,height: 45,width: '100%', backgroundColor: '#000000', justifyContent: "center", alignItems: "center" }}>
                            <Text style={{ color: 'white', fontSize: 18, fontWeight: '500',borderRadius:10 }}>Show Product Reviews</Text>
                        </TouchableOpacity>
                        {/* <View style={{ alignSelf: "flex-start" }}>
                            <Text style={{ color: '#7e7e7e', fontSize: 11, }}>{this.state.productDetails&&this.state.productDetails.data().description}
                                </Text>
                        </View> */}
                            <Image source={require('./../../../assets/review.png')} style={{marginVertical:10,width:'100%',height:100}}/>
                       <Text style={{marginVertical:10}}>Lorem Ipsum is simply dummy text of the printing
and typesetting industry. Lorem Ipsum has lor been
the industry's standard dummy text ever since the
1500s, when an unknown printer ing at its layout.
The point of using Lorem</Text>
                        {/* <Text style={{ marginTop: 10, color: '#464646' }}>Specifications</Text>
                        <Text style={{ marginTop: 10, color: '#334d5c', fontWeight: '500', }}>Sizes:</Text> */}
                        {/* <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 15, fontWeight: '400' }}>length:</Text>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 65 }}>5 Lorem</Text>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 15, fontWeight: '400' }}>Sleeve Length:</Text>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 15 }}>5 Lorem</Text>


                        </View> */}
                        {/* <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 15, fontWeight: '400' }}>length:</Text>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 65 }}>5 Lorem</Text>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 15, fontWeight: '400' }}>Sleeve Length:</Text>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 15 }}>5 Lorem</Text>


                        </View> */}
                        {/* <View style={{ flexDirection: 'row' }}>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 15, fontWeight: '400' }}>length:</Text>
                            <Text style={{ marginTop: 10, color: '#464646', marginRight: 65 }}>5 Lorem</Text>


                        </View> */}

                        <Text style={{ marginTop: 10, fontSize: 15, color: 'black', fontWeight: '500', }} >Color </Text>
                        <View style={{ flexDirection: 'row', marginTop: 10 }}>
                            <View style={{ height: 32, width: 39, marginRight: 15, borderRadius: 3, borderWidth: this.state.green ? 1 : 0, borderColor: '#b4b5b9', alignItems: "center", justifyContent: "center" }}>
                                <TouchableOpacity style={{ height: 22, width: 22, borderRadius: 25, backgroundColor: '#0fbe97' }}
                                    onPress={() => this.setState({ green: true, orange: false, blue: false })}
                                >

                                </TouchableOpacity>

                            </View>


                            <View style={{ height: 32, width: 39, marginRight: 15, borderRadius: 3, borderWidth: this.state.orange ? 1 : 0, borderColor: '#b4b5b9', alignItems: "center", justifyContent: "center" }}>
                                <TouchableOpacity style={{ height: 22, width: 22, borderRadius: 25, backgroundColor: '#ec4413' }}
                                    onPress={() => this.setState({ green: false, orange: true, blue: false })}
                                >

                                </TouchableOpacity>
                            </View>
                            <View style={{ height: 32, width: 39, marginRight: 15, borderRadius: 3, borderWidth: this.state.blue ? 1 : 0, borderColor: '#b4b5b9', alignItems: "center", justifyContent: "center" }}>
                                <TouchableOpacity style={{ height: 22, width: 22, borderRadius: 25, backgroundColor: '#315472' }}
                                    onPress={() => this.setState({ green: false, orange: false, blue: true })}
                                >

                                </TouchableOpacity>
                            </View>




                        </View>

                        {/* 
                            colour Circle View */}

                        <View style={{ flexDirection: 'row', marginTop: 0 }}>

                            <Text style={{ marginRight: 15, }}>green</Text>
                            <Text style={{ marginRight: 15, }}>Orange</Text>
                            <Text style={{ marginRight: 15, marginLeft: 4 }} >Blue</Text>




                            <View style={{ height: 32, width: 39, marginRight: 15, borderRadius: 3, borderColor: '#b4b5b9', alignItems: "center", justifyContent: "center" }}>

                            </View>
                            <View style={{ height: 32, width: 39, marginRight: 15, borderRadius: 3, borderColor: '#b4b5b9', alignItems: "center", }}>
                            </View>




                        </View>


                        <View style={{ flexDirection: 'row', justifyContent: "space-between" }}>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyCart')} style={{ height: 45, width: '48%', backgroundColor: '#000000', justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: '500' }}>BUY NOW</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('MyCart')} style={{ height: 45, width: '48%', backgroundColor: '#000000', justifyContent: "center", alignItems: "center" }}>
                                <Text style={{ color: 'white', fontSize: 14, fontWeight: '500' }}>ORDER SPECIFIC SIZE</Text>
                            </TouchableOpacity>


                        </View>

                        <Text style={{ color: '#000000', fontSize: 15, paddingVertical: 10 }}>Related</Text>
                        <FlatList
                        data={this.props.navigation.getParam('products')}
                        numColumns={3}
                        extraData={this.state}
                        keyExtractor={this._keyExtractor}
                        renderItem={this._renderItem}
                        style={{marginBottom:300}}
                        />
                        <View style={{ width: '100%', flexDirection: "row", flexWrap: "wrap", justifyContent: "space-between" }}>
                   




                        </View>

                    </View>



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

