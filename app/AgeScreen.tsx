import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    SafeAreaView,
    TextInput,
} from "react-native";

import { FormContext } from "./FormContext";

function AgeScreen({ navigation }) {
    const { age, setAge } = React.useContext(FormContext);

    const handleAgeChange = (text: string) => {
      const parsedAge = parseInt(text, 10);
      if (!isNaN(parsedAge)) {
        setAge(parsedAge);
      }
    };

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                onChangeText={handleAgeChange}
                value={age ? age.toString() : ""}
                placeholder="Enter your age"
                keyboardType="numeric"
            />
            <Button
                title="Next"
                onPress={() => navigation.navigate("WeightScreen")}
                disabled={!age}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default AgeScreen;
