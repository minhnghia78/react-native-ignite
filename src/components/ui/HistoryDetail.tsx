import { StyleSheet, View } from "react-native"
import { Screen } from "../Screen"
import { Text } from "../Text"

export function HistoryDetail() {
  return (
    <View style={style.container}>
      {" "}
      <Text text="User" />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: 325,
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 20,
  },
})
