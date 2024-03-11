import React from "react";
import {View, Text, Button, StyleSheet, SafeAreaView, TextInput, Pressable} from "react-native";
import {commonStyles} from "../constants/theme";

import {FormContext} from "./FormContext";

function AgeScreen({navigation}: any) {
    const {age, setAge} = React.useContext(FormContext);

    const handleAgeChange = (text: string) => {
        if (text === "") {
            setAge(0);
        } else {
            const parsedAge = parseInt(text, 10);
            if (!isNaN(parsedAge)) {
                setAge(parsedAge);
            }
        }
    };

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.inputArea}>
                <Text style={commonStyles.title}>Enter Age</Text>
                <TextInput
                    style={commonStyles.input}
                    onChangeText={handleAgeChange}
                    value={age ? age.toString() : ""}
                    keyboardType="numeric"
                />
            </View>
            <Pressable
                style={[commonStyles.button, !age && commonStyles.buttonDisabled]}
                onPress={() => navigation.navigate("WeightScreen")}
                disabled={!age}>
                <Text style={commonStyles.buttonText}>Next</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({});

export default AgeScreen;
