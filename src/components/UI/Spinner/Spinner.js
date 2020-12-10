import React from 'react';
import { View, Text, ActivityIndicator } from 'react-native'

const spinner = () => {
   return (
      <View><ActivityIndicator size="large" color="tomato" /></View>
   )
};

export default spinner;