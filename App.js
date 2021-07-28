import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <SaveAreaView>
      <Text
        style={{
          fontWeight: "bold",
          fontStyle: "italic",
          letterSpacing: 5,
          color: "orange",
          fontSize: 25,
        }}
      >
        Hello World
      </Text>
      <StatusBar style="auto" />
    </SaveAreaView>
  );
}
