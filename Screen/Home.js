import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.designlogo}
        source={require("../assets/cameralogo.png")}
      />
      <Text style={styles.designtextlogo}>
        Camera <Text style={{ color: "red" }}>App</Text>
      </Text>
      <StatusBar style="auto" />

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("login")}>
          <Text style={styles.buttonstyles}>Upload Image</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Mahasiswa")}>
          <Text style={styles.buttonstyles}>Identitas Mahasiswa</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.footer}>
        <Text style={styles.copyright}>&copy; MURLIANA - 120140076</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D2B48C",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    marginTop: 300,
    borderRadius: 10,
    backgroundColor: "#D2B48C",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  designlogo: {
    width: 150,
    height: 150,
  },
  designtextlogo: {
    color: "#ffffff",
    fontWeight: "bold",
    fontSize: 50
  },
  button: {
    backgroundColor: "#ffffff",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    top: 100,

    marginVertical: 4,
  },

  buttonstyles: {
    fontWeight: "400",
    letterSpacing: 0.4,
  },
});