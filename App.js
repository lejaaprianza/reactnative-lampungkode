import React from "react"
import {
  Button,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native"

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  text: {
    padding: 25,
    color: "white",
    backgroundColor: "green",
  },
})

const App = () => {
  return (
    <>
      <Button
        onPress={() => Alert.alert("Contoh Button 1")}
        title="Contoh Button 1"
        color="blue"
      />
      <View style={{ height: 80 }} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Alert.alert("Contoh Button 2")}>
          <Text style={styles.text}>Contoh Button 2</Text>
        </TouchableOpacity>
      </View>
    </>
  )
}
export default App
