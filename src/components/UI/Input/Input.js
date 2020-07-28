import React from 'react';
import { Text, View, TextInput, Dimensions, StyleSheet } from 'react-native'

const input = (props) => {
    let inputElement = null;
    const inputClasses = [styles.InputElement];
    if (props.inValid && props.shouldValidate && props.touched) {
        inputClasses.push(styles.Invalid)
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <TextInput
                style={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChangeText={props.changed}
            />;
            break;
        case ('textarea'):
            inputElement = <TextInput
                multiline={true}
                numberOfLines={3}
                style={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChangeText={props.changed}
            />;
            break;
        // case('select'):
        //     inputElement = <select
        //     className = {inputClasses.join(' ')}
        //     value={props.value}
        //     onChange={props.changed}>
        //         {props.elementConfig.options.map( option => (
        //             <option key={option.value} value={option.value} >
        //                 {option.displayValue}
        //             </option>
        //         ))}
        //     </select>;
        //     break;
        default:
            inputElement = <TextInput
                className={inputClasses}
                {...props.elementConfig}
                value={props.value}
                onChangeText={props.changed}
            />
    }

    return (
        <View style={styles.Input}>
            <Text style={styles.Label}>{props.label}</Text>
            {inputElement}
        </View>
    );
};

const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    Input: {
        // width: deviceWidth,
        // justifyContent: 'center',
        // alignContent: 'center',
        width: deviceWidth
    },
    Label: {
        fontWeight: "bold",
        marginBottom: 8,
    },
    InputElement: {
        alignSelf: 'center',
        borderWidth: 1,
        borderRadius: 8,
        padding: 10,
        borderColor: '#ccc',
        backgroundColor: "white",
        width: deviceWidth * 0.8
        // marginLeft: 10,
        // marginRight: 10
    },
    Focus: {
        backgroundColor: '#ccc',
    },
    Invalid: {
        borderWidth: 1,
        borderColor: 'red',
        backgroundColor: '#FDA49A',
    }
})


export default input;