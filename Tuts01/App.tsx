import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import FlatCards from './components/FlatCards';
import UserData from './components/UserData';

function App() {
  return (
    <SafeAreaView>
      <View>
        <UserData />
      </View>
    </SafeAreaView>
  );
}

export default App;
