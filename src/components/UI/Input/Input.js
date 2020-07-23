import React from 'react';
import {View, TextInput} from 'react-native'

const input = (props) => {
    let inputElement = null;
    const inputClasses = [classes['InputElement']];
    if (props.inValid && props.shouldValidate && props.touched){
        inputClasses.push(classes['Invalid'])
    }

    switch (props.elementType){
        case('input'):
            inputElement = <TextInput
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            />;
            break;
        case('textarea'):
            inputElement = <TextInput
            multiline={true}
            numberOfLines={3}
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
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
            className={inputClasses.join(' ')}
            {...props.elementConfig}
            value={props.value}
            onChange={props.changed}
            />
    }

   return (
    <View className={classes['Input']}>
        <Text className={classes['Label']}>{props.label}</Text>
        {inputElement}
    </View>
    );
};
export default input;