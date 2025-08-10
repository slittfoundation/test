import React from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
      <StatusBar barStyle="dark-content" />
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: '600' }}>Frontend scaffold ready</Text>
      </View>
    </SafeAreaView>
  );
}