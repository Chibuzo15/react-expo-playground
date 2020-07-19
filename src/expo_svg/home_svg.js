import * as React from "react"
import Svg, { Path, Text } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 100 125" {...props}>
      <Path d="M50 12.44l39 28.6V89H67.999L68 59v-6H32v6l-.001 30H11V41.04l39-28.6M50 5L5 38v57h32.999L38 59h24l-.001 36H95V38L50 5z" />
    </Svg>
  )
}

export default SvgComponent
