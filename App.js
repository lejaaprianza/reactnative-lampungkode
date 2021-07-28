import React from "react";
import { Text, View, ScrollView } from "react-native";

const App = () => {
  return (
    <ScrollView>
      <View
        style={{
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              margin: 20,
              padding: 20,
              justifyContent: "flex-start",
            }}
          >
            <Text>Contoh 1</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              marginTop: 20,
              marginBottom: 20,
              marginLeft: 20,
              marginRight: 20,
              paddingTop: 20,
              paddingBottom: 20,
              paddingLeft: 20,
              paddingRight: 20,
            }}
          >
            <Text>Contoh 2</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              marginHorizontal: 20,
              marginVertical: 20,
              paddingHorizontal: 20,
              paddingVertical: 20,
            }}
          >
            <Text>Contoh 3</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              margin: 20,
              justifyContent: "flex-start",
            }}
          >
            <Text>Contoh 4</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: 100,
              height: 100,
              backgroundColor: "red",
              margin: 20,
              justifyContent: "center",
            }}
          >
            <Text>Contoh 5</Text>
          </View>
          <View
            style={{
              width: 100,
              height: 100,
              flexDirection: "column-reverse",
              backgroundColor: "red",
              margin: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text>1 </Text>
            <Text>2 </Text>
            <Text>3 </Text>
          </View>
        </View>

        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            margin: 20,
            alignItems: "center",
          }}
        >
          <Text>Contoh 7 </Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            margin: 20,
            alignItems: "center",
          }}
        >
          <Text>Contoh 7 - copy</Text>
        </View>
        <View
          style={{
            width: 100,
            height: 100,
            backgroundColor: "red",
            margin: 20,
            alignItems: "center",
          }}
        >
          <Text>Contoh 7 - copy</Text>
        </View>

        <View
          style={{
            backgroundColor: "red",
            alignItems: "center",
          }}
        >
          <View
            style={{
              backgroundColor: "blue",
              alignItems: "center",
            }}
          >
            <Text>Contoh 8</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default App;
