import { Alert, Image, ImageStyle, TextStyle, View, ViewStyle } from "react-native"
import {
  Button,
  Card,
  Checkbox,
  EmptyState,
  Header,
  ListItem,
  ListView,
  Screen,
  Text,
} from "@/components"
import { isRTL } from "@/i18n"
import { ThemedStyle } from "@/theme"
import { useSafeAreaInsetsStyle } from "@/utils/useSafeAreaInsetsStyle"
import { useAppTheme } from "@/utils/useAppTheme"
import { UserInformation } from "@/components/ui/UserInformation"
import { Transaction } from "@/components/ui/Transaction"
import { HistoryDetail } from "@/components/ui/HistoryDetail"

export default function WelcomeScreen() {
  const $bottomContainerInsets = useSafeAreaInsetsStyle(["bottom"])
  const { theme, themed } = useAppTheme()

  return (
    <Screen safeAreaEdges={["top"]} statusBarStyle="light">
      <UserInformation />
      <Transaction />
      <HistoryDetail />
    </Screen>
  )
}
