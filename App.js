import React from "react"
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native"

const App = () => {
  state = {
    Regions: [
      {
        id: 0,
        Region: "Bandar Lampung",
      },
      {
        id: 1,
        Region: "Bandung",
      },
      {
        id: 2,
        Region: "Bogor",
      },
      {
        id: 3,
        Region: "Majalengka",
      },
      {
        id: 4,
        Region: "Cipinang",
      },
    ],
  }
  const alertItemRegion = (item) => {
    alert(item.Region)
  }

  return (
    <View style={styles.State1}>
      <ScrollView>
        {state.Regions.map((item, index) => (
          <TouchableOpacity
            key={item.id}
            style={styles.container}
            onPress={() => alertItemRegion(item)}
          >
            <Text style={styles.text}>{item.Region}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 3,
    height: 200,
    backgroundColor: "grey",
    alignItems: "center",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "yellow",
  },
})
