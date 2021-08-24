import React from "react"
import { View, Image, Text } from "react-native"

const App = () => {
  return (
    <View>
      <View
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Text>Ini Gambar dari folder images</Text>
        <Image
          source={require("./images/react-native-logo.png")}
          style={{
            width: 260,
            height: 300,
          }}
        />
        <View style={{ height: 50 }} />
        <Text>Ini Gambar dari URI</Text>
        <Image
          source={{
            uri: "https://lampungkode.id/wp-content/uploads/2021/07/lampung-kode-1.png",
          }}
          style={{
            width: 260,
            height: 50,
          }}
        />
      </View>
    </View>
  )
}

export default App
