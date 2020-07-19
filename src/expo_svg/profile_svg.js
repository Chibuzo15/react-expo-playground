import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 96 120" {...props} height="100%" width="100%">
      <Path
      fill={props.fill}
      d="M48 44c11 0 20-9 20-20S59 4 48 4s-20 9-20 20 9 20 20 20zm0-36c8.8 0 16 7.2 16 16s-7.2 16-16 16-16-7.2-16-16S39.2 8 48 8zM68.3 48h-3c-.4 0-.9.2-1.2.4C59.4 52.1 53.9 54 48 54s-11.4-1.9-16.1-5.6c-.4-.3-.8-.4-1.2-.4h-3C14.6 48 4 58.6 4 71.7V84c0 4.4 3.6 8 8 8h72c4.4 0 8-3.6 8-8V71.7C92 58.6 81.4 48 68.3 48zM88 84c0 2.2-1.8 4-4 4H12c-2.2 0-4-1.8-4-4V71.7C8 60.8 16.8 52 27.7 52H30c5.2 3.9 11.4 6 18 6s12.8-2.1 18-6h2.3C79.2 52 88 60.8 88 71.7V84z" />
    </Svg>
  )
}

export default SvgComponent
