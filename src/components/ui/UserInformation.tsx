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
import MaterialIcons from "@expo/vector-icons/MaterialIcons"
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"
import AntDesign from "@expo/vector-icons/AntDesign"
import Feather from "@expo/vector-icons/Feather"

export function UserInformation() {
  const [username, setUsername] = useState<string>("Chia tiền nhóm")
  return (
    <View style={style.container}>
      <ListItem
        height={40}
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
        style={{
          backgroundColor: "#5945FE",
          paddingVertical: 16,
          paddingHorizontal: 12,
          position: "relative",
          borderRadius: 20,
        }}
        ContentComponent={
          <ListItem
            height={100}
            LeftComponent={
              <View style={{ gap: 8 }}>
                <Text
                  text="Tổng dư nợ của bạn"
                  style={{ color: "#FCFDFD" }}
                  weight="normal"
                  size="xs"
                />
                <View style={style.totalBalance}>
                  <Text text="-663.000đ" style={{ color: "#FCFDFD" }} size="xl" weight="bold" />
                  <MaterialIcons name="keyboard-double-arrow-right" size={20} color="#76F991" />
                </View>
              </View>
            }
            RightComponent={
              <Image
                source={require("../../../assets/images/line.png")}
                style={{
                  position: "absolute",
                  top: -18,
                  right: -10,
                  width: 120,
                  height: 120,
                }}
              />
            }
          />
        }
        FooterComponent={
          <View style={{ flexDirection: "row", gap: 6 }}>
            <Button
              style={{
                paddingHorizontal: 24,
                paddingVertical: 12,
                borderRadius: 12,
                backgroundColor: "#76F991",
              }}
            >
              <Text
                text="+ Tạo hóa đơn mới"
                size="sm"
                style={{ color: "#344054" }}
                weight="semiBold"
              />
            </Button>
            <Button
              style={{
                paddingHorizontal: 14,
                paddingVertical: 12,
                borderRadius: 12,
                backgroundColor: "#76F991",
              }}
            >
              <MaterialCommunityIcons name="qrcode-scan" size={16} color={"#344054"} />
            </Button>
            <Button
              style={{
                paddingHorizontal: 14,
                paddingVertical: 14,
                borderRadius: 12,
                backgroundColor: "#76F991",
              }}
            >
              <AntDesign name="filetext1" size={16} color={"#344054"} />
            </Button>
            <Button
              style={{
                paddingHorizontal: 14,
                paddingVertical: 12,
                borderRadius: 12,
                backgroundColor: "#76F991",
              }}
            >
              <MaterialIcons name="groups" size={16} color={"#344054"} />
            </Button>
          </View>
        }
        FooterTextProps={{ size: "sm" }}
      />
      <View style={style.buttonContainer}>
        <Button
          style={{
            flex: 1,
            padding: 12,
            gap: 4,
            backgroundColor: "#EFF2F6",
            borderRadius: 100,
            justifyContent: "flex-start",
          }}
        >
          <View style={style.arrow}>
            <Feather name="arrow-up-right" size={19} color="white" />
          </View>
          <Text size="sm" weight="semiBold" style={style.actionText} text="Chi tiêu ngay" />
        </Button>
        <Button
          style={{
            flex: 1,
            padding: 12,
            gap: 4,
            backgroundColor: "#EFF2F6",
            borderRadius: 100,
            justifyContent: "flex-start",
          }}
        >
          <View style={style.arrow}>
            <Feather name="arrow-down-left" size={19} color="white" />
          </View>
          <Text size="sm" weight="semiBold" style={style.actionText} text="Trả nợ ngay" />
        </Button>
      </View>
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

  totalBalance: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  buttonContainer: {
    flex: 1,
    flexDirection: "row",
    gap: 10,
  },

  actionBottom: {
    backgroundColor: "#EFF2F6",
    borderRadius: 100,
    justifyContent: "flex-start",
  },
  arrow: {
    padding: 5,
    marginHorizontal: 3,
    backgroundColor: "#5945FE",
    borderRadius: 100,
  },
  actionText: {
    color: "#5945FE",
  },
})
