import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import UserData from './components/UserData';
import FlatCards from './components/FlatCards';

function App() {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          {/* <UserData /> */}
          <FlatCards />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default App;
