// TODO: write documentation about fonts and typography along with guides on how to add custom fonts in own
// markdown file and add links from here

import { Platform } from "react-native"
import {
  SpaceGrotesk_300Light as spaceGroteskLight,
  SpaceGrotesk_400Regular as spaceGroteskRegular,
  SpaceGrotesk_500Medium as spaceGroteskMedium,
  SpaceGrotesk_600SemiBold as spaceGroteskSemiBold,
  SpaceGrotesk_700Bold as spaceGroteskBold,
} from "@expo-google-fonts/space-grotesk"

import {
  Nunito_400Regular as nunitoRegular,
  Nunito_500Medium as nunitoMedium,
  Nunito_600SemiBold as nunitoSemiBold,
  Nunito_700Bold as nunitoBold,
} from "@expo-google-fonts/nunito"

export const customFontsToLoad = {
  nunitoRegular,
  nunitoMedium,
  nunitoSemiBold,
  nunitoBold,
}

const fonts = {
  nunito: {
    // Cross-platform Google font.
    normal: "nunitoRegular",
    medium: "nunitoMedium",
    semiBold: "nunitoSemiBold",
    bold: "nunitoBold",
  },
  helveticaNeue: {
    // iOS only font.
    thin: "HelveticaNeue-Thin",
    light: "HelveticaNeue-Light",
    normal: "Helvetica Neue",
    medium: "HelveticaNeue-Medium",
  },
  courier: {
    // iOS only font.
    normal: "Courier",
  },
  sansSerif: {
    // Android only font.
    thin: "sans-serif-thin",
    light: "sans-serif-light",
    normal: "sans-serif",
    medium: "sans-serif-medium",
  },
  monospace: {
    // Android only font.
    normal: "monospace",
  },
}

export const typography = {
  /**
   * The fonts are available to use, but prefer using the semantic name.
   */
  fonts,
  /**
   * The primary font. Used in most places.
   */
  primary: fonts.nunito,
  /**
   * An alternate font used for perhaps titles and stuff.
   */
  secondary: Platform.select({ ios: fonts.nunito, android: fonts.nunito }),
  /**
   * Lets get fancy with a monospace font!
   */
  code: Platform.select({ ios: fonts.nunito, android: fonts.nunito }),
}
