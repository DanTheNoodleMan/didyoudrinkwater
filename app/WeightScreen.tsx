import React, {useState} from "react";
import {View, Text, Button, StyleSheet, SafeAreaView, TextInput, Pressable} from "react-native";
import {commonStyles} from "../constants/theme";
import {FormContext} from "./FormContext";

function WeightScreen({navigation}: any) {
    const {weight, setWeight} = React.useContext(FormContext);
    const {weightMetric, setWeightMetric} = React.useContext(FormContext);
    const [inputValue, setInputValue] = React.useState("");

    const handleWeightChange = (text: string) => {
        setInputValue(text);
        let numericValue = parseFloat(text.replace(",", ".")); // Parse as float for decimal support
        if (!isNaN(numericValue)) {
            setWeight(numericValue); // Set parsed float directly
        } else if (text === "") {
            setWeight(0); // Handle empty string
        }
    };

    const handleUnitChange = (selectedUnit: string) => {
        if (weight === 0) return; // Guard clause if weight is null or undefined

        let convertedWeight = weight;
        if (selectedUnit === "KG" && weightMetric === "LB") {
            convertedWeight = weight / 2.20462; // Keep decimal
        } else if (selectedUnit === "LB" && weightMetric === "KG") {
            convertedWeight = weight * 2.20462; // Keep decimal
        }

        convertedWeight = parseFloat(convertedWeight.toFixed(2)); // Round to 2 decimal places

        setWeightMetric(selectedUnit);
        setWeight(convertedWeight); // Set converted weight with decimals
        setInputValue(convertedWeight.toString()); // Set input value as string
    };

    return (
        <SafeAreaView style={commonStyles.screen}>
            <View style={commonStyles.inputArea}>
                <Text style={commonStyles.title}>Enter Weight</Text>
                <TextInput
                    style={commonStyles.input}
                    onChangeText={handleWeightChange}
                    value={inputValue}
                    keyboardType="numeric"
                />
                <View style={styles.unitButtons}>
                    <Pressable
                        style={[styles.unitButton, weightMetric === "KG" && styles.selectedButton]}
                        onPress={() => handleUnitChange("KG")}>
                        <Text style={[weightMetric === "KG" && styles.selectedText]}>KG</Text>
                    </Pressable>
                    <Pressable
                        style={[styles.unitButton, weightMetric === "LB" && styles.selectedButton]}
                        onPress={() => handleUnitChange("LB")}>
                        <Text style={[weightMetric === "LB" && styles.selectedText]}>LB</Text>
                    </Pressable>
                </View>
            </View>

            <Pressable
                style={[commonStyles.button, !weight && commonStyles.buttonDisabled]}
                onPress={() => navigation.navigate("WeightScreen")}
                disabled={!weight}>
                <Text style={commonStyles.buttonText}>Next</Text>
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    unitButtons: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        gap: 10,
        marginTop: 20,
    },
    unitButton: {
        borderWidth: 1,
        borderColor: "#000",
        paddingVertical: 7,
        paddingHorizontal: 14,
        alignItems: "center",
        marginBottom: 10,
        borderRadius: 20,
    },
    selectedButton: {
        backgroundColor: "#000",
        color: "#ffffff",
    },
    selectedText: {
        color: "#ffffff",
    },
});

export default WeightScreen;
