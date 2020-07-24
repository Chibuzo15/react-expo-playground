import React from 'react';
import { Image, StyleSheet } from 'react-native';

const avatar = () => (
    <Image
        style={styles.avatar}
        source={require('../../../../assets/user.jpg')}
    />
)

const styles = StyleSheet.create({
    avatar: {
        alignSelf: 'center',
        borderRadius: 100
    }
})

export default avatar;