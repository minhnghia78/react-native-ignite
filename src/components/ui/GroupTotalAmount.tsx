import { StyleSheet, View } from "react-native"
import { Screen } from "../Screen"
import { Text } from "../Text"
import { ListItem } from "../ListItem"

import { ListView } from "../ListView"
import { Item } from "../Item"
const DATA = [
  {
    id: "g1",
    img: require("../../../assets/images/avatar.png"),
    title: "Group 1",
    balance: "123.000đ",
  },
  {
    id: "g2",
    img: require("../../../assets/images/img2.png"),
    title: "Group 2",
    balance: "600.000đ",
  },
  {
    id: "g3",
    img: require("../../../assets/images/img4.png"),
    title: "Group 3",
    balance: "123.000đ",
  },
  {
    id: "g4",
    img: require("../../../assets/images/img3.png"),
    title: "Group 4",
    balance: "600.000đ",
  },
]
const TYPE = "group"
export function GroupTotalAmount() {
  return (
    <View style={style.container}>
      <ListItem
        height={19}
        LeftComponent={<Text text="Tổng thu chi gần đây" size="sm" weight="bold" />}
        RightComponent={<Text text="Xem tất cả" size="xs" style={{ color: "#5945FE" }} />}
      />
      <ListView
        style={style.listContainer}
        data={DATA}
        renderItem={({ item }) => <Item type={TYPE} item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 20,
  },
  listContainer: {
    borderRadius: 16,
    padding: 12,
    gap: 16,
    backgroundColor: "#F6F7F9",
  },
})
