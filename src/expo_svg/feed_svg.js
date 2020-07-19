import Svg, {
    Path,
} from 'react-native-svg';

/* Use this if you are using Expo
import * as Svg from 'react-native-svg';
const { Circle, Rect } = Svg;
*/

import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class SvgExample extends React.Component {
    render() {
        return (
                <Svg viewBox="0 0 64 80" height='100%' width='100%'>
                    <Path
                    fill={this.props.fill}
                    d="M48.155,46.655a1.5,1.5,0,0,1-3,0,27.841,27.841,0,0,0-27.81-27.81,1.5,1.5,0,1,1,0-3A30.846,30.846,0,0,1,48.155,46.655Zm-30.8-10.8a1.5,1.5,0,0,0-1.5,1.5v9.3a1.5,1.5,0,0,0,1.5,1.5h9.3a1.5,1.5,0,0,0,1.5-1.5A10.806,10.806,0,0,0,17.35,35.85Zm0-10a1.5,1.5,0,0,0,0,3,17.814,17.814,0,0,1,17.8,17.8,1.5,1.5,0,0,0,3,0A20.822,20.822,0,0,0,17.35,25.85Z" />
                </Svg>
        );
    }
}