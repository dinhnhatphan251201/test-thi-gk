import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Cart from "./Cart";
import Home from "./Home";

const Stack = createStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Cart" component={Cart} />
        </Stack.Navigator>
    );
};

export default MyStack;
