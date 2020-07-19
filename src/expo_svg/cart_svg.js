import * as React from "react"
import Svg, { Path } from "react-native-svg"

function SvgComponent(props) {
  return (
    <Svg viewBox="0 0 100 125" {...props}>
      <Path
        fill={props.fill}
        d="M7.01 10a2 2 0 100 4h12.376l10.53 49.813c-.107 1.139.952 2.245 2.095 2.187h50c1.056.015 2.028-.943 2.028-2s-.972-2.015-2.028-2H33.636l-1.688-8h54.063c.895-.01 1.741-.689 1.937-1.562l7-30c.26-1.161-.748-2.43-1.937-2.438H24.76l-1.782-8.437c-.198-.884-1.062-1.57-1.968-1.563zm18.594 14h64.907l-6.094 26H31.104zm16.407 48c-4.947 0-9 4.053-9 9s4.053 9 9 9 9-4.053 9-9-4.053-9-9-9zm30 0c-4.947 0-9 4.053-9 9s4.053 9 9 9 9-4.053 9-9-4.053-9-9-9zm-30 4c2.785 0 5 2.215 5 5s-2.215 5-5 5a4.97 4.97 0 01-5-5c0-2.785 2.215-5 5-5zm30 0c2.785 0 5 2.215 5 5s-2.215 5-5 5a4.97 4.97 0 01-5-5c0-2.785 2.215-5 5-5z"
        overflow="visible"
        color="#000"
      />
    </Svg>
  )
}

export default SvgComponent
