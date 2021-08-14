import React from "react"
import { Text, View, StyleSheet } from "react-native"

const App = () => {
  return (
    <View style={gaya.State1}>
      <View style={gaya.State2}>
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
      </View>
      <View style={gaya.State3}>
        <Text>Contoh 2</Text>
      </View>
    </View>
  )
}

export default App

const gaya = StyleSheet.create({
  State1: {
    flex: 1,
  },
  State2: {
    flexDirection: "column",
    flex: 0.3,
    backgroundColor: "pink",
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  State3: {
    flex: 0.3,
    backgroundColor: "red",
    marginHorizontal: 20,
    marginVertical: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
})
