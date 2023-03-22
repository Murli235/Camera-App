import {
  StyleSheet,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.designlogo}
        source={require("../assets/cameralogo.png")}
      />
      <Text style={styles.designtextlogo}>
        Camera <Text style={{ color: "red" }}>App!</Text>
      </Text>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("imagepicker")}>
          <Text style={styles.buttonstyles}>Pick An Image</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Text style={styles.buttonstyles}>Open Camera</Text>
        </TouchableOpacity>
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
  designlogo: {
    width: 150,
    height: 150,
  },
  designtextlogo: {
    color: "white",
    fontWeight: "bold",
    fontSize: 35
  },
  button: {
    backgroundColor: "white",
    height: 50,
    width: 200,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 50,
    top: 100,
    marginVertical: 4
  },
});
