import { StyleSheet } from "react-native"
import Colors from "./Colors"
export const buttonStyles = StyleSheet.create({
    button: {
        backgroundColor: Colors.green,
        borderRadius: 10,
        padding: 10,
        // margin: 10,
        // width: '100%',
        alignItems: "center",
    },
    buttonPrimary: {
      backgroundColor: 'white',
      borderRadius: 10,
      padding: 10,
      // margin: 10,
      // width: '100%',
      alignItems: "center",
    },
    buttonSecondary: {
      backgroundColor: Colors.green,
      borderRadius: 10,
      padding: 10,
      // margin: 10,
      // width: '100%',
      alignItems: "center",
    },
    buttonAccent: {
      backgroundColor: Colors.maze,
      borderRadius: 10,
      padding: 10,
      // margin: 10,
      // width: '100%',
      alignItems: "center",
    },
    buttonDanger: {
      backgroundColor: Colors.tacha,
      borderRadius: 10,
      padding: 10,
      // margin: 10,
      // width: '100%',
      alignItems: "center",
    },
    buttonSuccess: {
      backgroundColor: Colors.green,
      borderRadius: 10,
      padding: 10,
      // margin: 10,
      // width: '100%',
      alignItems: "center",
    },
    buttonText: {
        fontSize: 20,
        color: "#fff",
    },
    buttonTextPrimary: {
      fontSize: 20,
      color: Colors.green,
    },
});