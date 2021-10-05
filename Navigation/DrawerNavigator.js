import React from "react"
import {createDrawerNavigator} from "@react-navigation/drawer"
import TabNavigator from "./TabNavigator"
import Feed from "../screens/Feed"
const Drawer = createDrawerNavigator()
const DrawerNavigator = ()=>{
  return(
    <Drawer.Navigator>
  <Drawer.Screen name = "Post" componenent = {TabNavigator}/>
  <Drawer.Screen name = "Feed" componenent = {Feed}/>
     </Drawer.Navigator>
  )
}
export default DrawerNavigator 