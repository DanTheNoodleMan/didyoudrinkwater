import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

function ActivityScreen({ navigation }: any) {
    const [activity, setActivity] = React.useState(0 as number);
    return (
        <View>
            {/* Render your UI for SexScreen */}
            <Button
                title="Next"
                onPress={() => navigation.navigate("(home)/home")}
            />
        </View>
    );
}

export default ActivityScreen;
