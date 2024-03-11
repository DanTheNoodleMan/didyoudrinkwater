import { StyleSheet } from "react-native";

export const commonStyles = StyleSheet.create({
    screen: {
        display: "flex",
        flex: 1,
        justifyContent: "space-between",
        margin: 50,
    },
    inputArea: {
        display: "flex",
        alignItems: "center",
    },
    input: {
        height: 60,
        margin: 12,
        width: 200,
        borderBottomColor: "black",
        borderBottomWidth: 1,
        padding: 10,
        fontSize: 40,
        textAlign: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        textAlign: "center",
        marginBottom: 20,
    },
    button: {
        borderWidth: 1,
        borderRadius: 8,
        borderColor: "#fff",
        backgroundColor: "#000",
        paddingVertical: 15,
        alignItems: "center",
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 16,
    },
    buttonDisabled: {
        backgroundColor: "#ccc",
    },
});
