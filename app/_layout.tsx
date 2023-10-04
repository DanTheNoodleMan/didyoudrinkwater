import { createStackNavigator } from "@react-navigation/stack";
import { Button, useColorScheme } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import SexScreen from "./SexScreen";
import AgeScreen from "./AgeScreen";
import WeightScreen from "./WeightScreen";
import ActivityScreen from "./ActivityScreen";
import IndexScreen from "./(home)/home";

const Stack = createStackNavigator();

export default function RootLayout() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    return (
        <Stack.Navigator initialRouteName="SexScreen">
            <Stack.Screen name="SexScreen" component={SexScreen} />
            <Stack.Screen name="AgeScreen" component={AgeScreen} />
            <Stack.Screen name="WeightScreen" component={WeightScreen} />
            <Stack.Screen name="ActivityScreen" component={ActivityScreen} />
            <Stack.Screen
                name="(home)/home"
                component={IndexScreen}
                options={{
                    headerLeft: ()=> null,
                }}
            />
        </Stack.Navigator>
    );
}
