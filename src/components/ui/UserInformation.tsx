import { Image, StyleSheet, View } from "react-native"
import { Screen } from "../Screen"
import { Text } from "../Text"
import { ListItem } from "../ListItem"
import { AutoImage } from "../AutoImage"
import Octicons from "@expo/vector-icons/Octicons"
import { useState } from "react"
import { Card } from "../Card"
import { Button } from "../Button"
import { Icon } from "../Icon"

export function UserInformation() {
  const [username, setUsername] = useState<string>("Chia tiền nhóm")
  return (
    <View style={style.container}>
      <ListItem
        LeftComponent={
          <View style={{ flexDirection: "row", gap: 5 }}>
            <AutoImage
              style={style.imgContainer}
              source={require("../../../assets/images/avatar.png")}
            />
            <View style={{ justifyContent: "center" }}>
              <Text text="Xin chào," size="xs" />
              <Text text={`${username}!`} weight="bold" size="sm" />
            </View>
          </View>
        }
        RightComponent={
          <View style={style.imgContainer}>
            <View style={style.bell}>
              <Octicons name="bell-fill" size={19} color="#98A2B3" />
              <View style={style.bellDot}>
                <Octicons name="dot-fill" size={16} color="#F04438" />
              </View>
            </View>
          </View>
        }
      />
      <Card
        style={{ width: 343, height: 200, backgroundColor: "#5945FE", position: "relative" }}
        ContentComponent={
          <ListItem
            height={100}
            LeftComponent={
              <>
                <Text text="663.000" />
                <Text text="663.000" />
              </>
            }
            RightComponent={
              <Image
                source={require("../../../assets/images/line.png")}
                style={{
                  position: "absolute",
                  top: -10,
                  right: -7,
                  width: 130,
                  height: 130,
                }}
              />
            }
          />
        }
        FooterComponent={
          <View style={{ flexDirection: "row", gap: 6 }}>
            <Button
              style={{ paddingHorizontal: 24 }}
              text="+ Tạo hóa đơn mới"
              textStyle={{ fontSize: 14 }}
            />
            <Button
              style={{ height: 44, width: 44, borderRadius: 12 }}
              LeftAccessory={(props) => <Icon style={props.style} icon="ladybug" size={15} />}
            />
            <Button
              style={{ height: 44, width: 44, borderRadius: 12 }}
              LeftAccessory={(props) => <Icon style={props.style} icon="ladybug" size={15} />}
            />
            <Button
              style={{ height: 44, width: 44, borderRadius: 12 }}
              RightAccessory={(props) => <Icon style={props.style} icon="ladybug" size={15} />}
            />
          </View>
        }
        FooterTextProps={{ size: "sm" }}
      />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    height: 325,
    paddingVertical: 20,
    paddingHorizontal: 16,
    gap: 20,
  },
  imgContainer: {
    width: 40,
    height: 40,
    borderRadius: 100,
    backgroundColor: "#EFF2F5",
  },
  bell: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  bellDot: {
    position: "absolute",
    right: 10,
    top: 6,
  },
})
