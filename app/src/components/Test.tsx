import {View, Text} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Test = () => {
  return (
    <SafeAreaView>
      <Text className="text-primary-100 text-xl p-9">Test</Text>
    </SafeAreaView>
  );
};

export default Test;
