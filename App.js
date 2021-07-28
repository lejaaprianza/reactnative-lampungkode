import React from "react";
import { Text, View } from "react-native";

const App = () => {
  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View
        style={{
          // width: 100,
          // height: 100,
          flexDirection: "column",
          flex: 0.3,
          backgroundColor: "pink",
          margin: 20,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text>1</Text>
        <Text>2</Text>
        <Text>3</Text>
        <Text>4</Text>
        <Text>5</Text>
      </View>
      <View
        style={{
          // width: 100,
          // height: 100,
          flex: 0.3,
          backgroundColor: "red",
          marginHorizontal: 20,
          marginVertical: 20,
          paddingHorizontal: 20,
          paddingVertical: 20,
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Text>Contoh 2</Text>
      </View>
    </View>
  );
};

export default App;
