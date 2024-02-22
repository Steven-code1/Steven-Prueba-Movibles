import React from "react";
import {View, Text} from "react-native";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs"
import Menu from "./componentes/home/Menu";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import ListComponent from "./componentes/list/List";
import User from './screen/User'
import Chat from "./screen/Chat";
import Pdf from "./screen/Pdf";
import Traductor from "./screen/Traductor";
import TextBina from "./screen/TextBina";

import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {NavigationContainer} from "@react-navigation/native";
import Splash from "./componentes/home/Splash"

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

const MainTabNavigator= () => {
    return (
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={Menu} options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name="home" color={color} size={size}/>
                    )
                }}/>
                <Tab.Screen name={'list'} component={ListComponent} options={{
                    tabBarLabel: 'Listado',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name={'clipboard-list'} color={color} size={size}/>
                    )
                }}/>
                <Tab.Screen name={'nombre'} component={User} options={{
                    tabBarLabel: 'Nombre',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name={'account'} color={color} size={size}/>
                    )
                }}/>
                <Tab.Screen name={'openIA'} component={Chat} options={{
                    tabBarLabel: 'openIA',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name={'brain'} color={color} size={size}/>
                    )
                }}/>
                <Tab.Screen name={'pdf'} component={Pdf} options={{
                    tabBarLabel: 'pdf',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name={'file-pdf-box'} color={color} size={size}/>
                    )
                }}/>
                <Tab.Screen name={'traductor'} component={Traductor} options={{
                    tabBarLabel: 'traductor',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name={'translate'} color={color} size={size}/>
                    )
                }}/>
                <Tab.Screen name={'TextBina'} component={TextBina} options={{
                    tabBarLabel: 'TextBina',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons name={'google-downasaur'} color={color} size={size}/>
                    )
                }}/>
            </Tab.Navigator>
    )
}

const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Splash"
                    component={Splash}
                    options={{ headerShown: false }}
                />
                {/* Tab Navigator como una pantalla dentro del Stack */}
                <Stack.Screen
                    name="Main"
                    component={MainTabNavigator}
                    options={{ headerShown: false }} // Oculta el header si no lo necesitas
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Navigation