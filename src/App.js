import React from "react";
import { Root, Icon } from "native-base";
import 'react-native-gesture-handler'
import { createSwitchNavigator,
   createAppContainer,
  createBottomTabNavigator } from "react-navigation";
  import { createStackNavigator } from 'react-navigation-stack';
  import {SafeAreaView,StatusBar, Platform} from 'react-native';
import Login from "./screens/login";
import SignUp from "./screens/login/SIgnUp";
import { mapping, light as lightTheme } from '@eva-design/eva';
import { createDrawerNavigator } from 'react-navigation-drawer';

import Home from "./screens/home/";
import SideBar from "./screens/sidebar";

import Shops from './screens/MainScreens/Shops'

import Shop from './screens/MainScreens/Shop.js'
import MyCart from './screens/MainScreens/MyCart'
import Checkout from './screens/MainScreens/Checkout'
import ShopDetails from './screens/MainScreens/ShopDetails'
import Catagories from './screens/MainScreens/Categories.js'
import { ApplicationProvider, Layout, Text } from 'react-native-ui-kitten';
import Seller from "./screens/MainScreens/Seller";
import Contact from "./screens/MainScreens/Contact";
import MyAccount from "./screens/MainScreens/MyAccount";
import AllProduct from "./screens/MainScreens/AllProduct";
import Guest from "./screens/login/Guest";
import ProductCategory from "./screens/MainScreens/ProductCategory";



const ShopNavigator = createStackNavigator(
  {
    Shops: { screen: Shops },
    Shop:{screen:Shop},
    ShopDetails:{screen:ShopDetails},
    // HospitalAdmission: { screen: HospitalAdmission },
    // BedAdmission: { screen: BedAdmission },

  },
  {
    initialRouteName: "Shops",
    headerMode: "none"
  }
);


const Drawer = createDrawerNavigator(
  {
    Home: { screen: Home },
    Shops:{screen:ShopNavigator},
    Catagories:{screen:Catagories},
    // Shop:{screen:Shop},
    MyCart:{screen:MyCart},
  
    Checkout:{screen:Checkout},
    Seller:{screen:Seller},
    Contact:{screen:Contact},
    MyAccount:{screen:MyAccount},
    Guest:{screen:Guest},
    AllProduct:{screen:AllProduct},
    ProductCategory:{screen:ProductCategory}



  },
  {
    initialRouteName: "Home",
    contentOptions: {
      activeTintColor: "#e91e63"
    },
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    contentComponent: props => <SideBar {...props} />
  }
);

const AppNavigator = createStackNavigator(
  {
    Drawer: { screen: Drawer },

    // HospitalAdmission: { screen: HospitalAdmission },
    // BedAdmission: { screen: BedAdmission },

  },
  {
    initialRouteName: "Drawer",
    headerMode: "none"
  }
);

const AppSwitchNavigator = createSwitchNavigator(
  {
    Login: {screen: Login},
    SignUp: {screen: SignUp},
    Dashboard: {screen: AppNavigator},
  
  }
);

const AppContainer = createAppContainer(AppSwitchNavigator);

export default () =>


<ApplicationProvider mapping={mapping} theme={lightTheme}>
<Root> 

<SafeAreaView style={{flex: 1, backgroundColor:"white"}}>
{/* <StatusBar backgroundColor="red" translucent barStyle="dark-content" /> */}

<AppContainer />
</SafeAreaView>
</Root>
</ApplicationProvider>
