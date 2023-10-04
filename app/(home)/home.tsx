import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Stack, Link } from "expo-router";

const App = ({ navigation }) => {
    React.useEffect(
        () =>
            navigation.addListener("beforeRemove", (e) => {
                // Prevent default behavior of leaving the screen
                e.preventDefault();
            }),
        [navigation]
    );

    return (
        <View>
            <Text>HELLO WORLD I DID IT</Text>
        </View>

        // <Stack
        //     screenOptions={{
        //         headerStyle: {
        //             backgroundColor: "#f4511e",
        //         },
        //         headerTintColor: "#fff",
        //         headerTitleStyle: {
        //             fontWeight: "bold",
        //         },
        //     }}
        // >
        //     <Stack.Screen name="(tabs)/ActivityScreen.tsx" />
        //     <Stack.Screen name="_layout" />
        // </Stack>
    );
};

export default App;
