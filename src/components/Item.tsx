import { Image, StyleSheet, View } from "react-native"
import { ReactElement } from "react"
import { Text } from "./Text"

export type ItemData = {
  id?: string
  img?: JSX.Element
  title?: string
  time?: string
  trader?: string
  balance?: number | string
  amountType?: "plus" | "minus" | string
}
export type ItemProps = {
  item: ItemData
  type: "group" | "transaction"
}

export function Item({ item, type }: ItemProps) {
  let content: ReactElement | null = null

  if (type === "group") {
    content = (
      <>
        <View style={style.infor}>
          <Image source={item.img} style={style.avt} />
          <Text text={item.title} size="sm" weight="bold" style={style.title} />
        </View>
        <Text text={item.balance} size="md" weight="bold" style={style.historyBalance} />
      </>
    )
  }

  if (type === "transaction") {
    content = (
      <>
        <View style={style.infor}>
          <View style={style.imageContainer}>
            <Text style={style.transactionImg}>{item.img}</Text>
          </View>

          <View>
            <Text text={item.title} weight="bold" style={style.title} />
            <Text text={item.time} size="xxs" style={style.time} />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text text={item.trader} size="xs" style={style.traderText} />
              <Text
                text={item.amountType === "plus" ? " đã trả nợ" : " đã thanh toán"}
                size="xxs"
              />
            </View>
          </View>
        </View>
        <Text
          text={item.balance}
          size="sm"
          weight="bold"
          style={[
            style.textCenter,
            item.amountType === "plus" ? style.plusAmount : style.minusAmount,
          ]}
        />
      </>
    )
  }
  return <View style={style.listContainer}>{content}</View>
}

const style = StyleSheet.create({
  listContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 6,
  },
  title: {
    color: "#475467",
  },
  infor: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  historyBalance: {
    color: "#5945FE",
    alignSelf: "center",
  },
  avt: {
    width: 32,
    height: 32,
    borderRadius: 80,
  },
  textCenter: {
    color: "#475467",
    alignSelf: "center",
  },
  minusAmount: {
    color: "#F04438",
  },
  plusAmount: {
    color: "#3CA251",
  },
  time: {
    color: "#667085",
  },
  traderText: {
    fontWeight: "700",
    color: "#667085",
  },
  imageContainer: {
    alignSelf: "flex-start",
  },
  transactionImg: {
    color: "#5945FE",
    backgroundColor: "#5945FE26",
    width: 32,
    height: 32,
    borderRadius: 80,
    alignContent: "center",
    textAlign: "center",
  },
})
