import React from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    TouchableOpacity,
    Image,
} from "react-native";
import { FormContext } from "./FormContext";

function SexScreen({ navigation }: any) {
    const { sex, setSex } = React.useContext(FormContext);
    return (
        <View>
            <View style={styles.optionContainer}>
                <TouchableOpacity
                    onPress={() => setSex("male")}
                    style={[
                        styles.button,
                        sex === "male" && styles.buttonFocused,
                    ]}
                >
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/128/9220/9220623.png",
                        }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text>Male</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => setSex("female")}
                    style={[
                        styles.button,
                        sex === "female" && styles.buttonFocused,
                    ]}
                >
                    <Image
                        source={{
                            uri: "https://cdn-icons-png.flaticon.com/128/4080/4080340.png",
                        }}
                        style={{ width: 100, height: 100 }}
                    />
                    <Text>Female</Text>
                </TouchableOpacity>
            </View>
            <Button
                title="Next"
                onPress={() => navigation.navigate("AgeScreen")}
                disabled={!sex}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: "#ccc",
        padding: 10,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonFocused: {
        borderColor: "blue",
    },
    optionContainer: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
});

export default SexScreen;
