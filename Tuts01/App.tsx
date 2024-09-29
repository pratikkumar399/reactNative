import React from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import UserData from './components/UserData';
import FlatCards from './components/FlatCards';
import ElevatedCard from './components/ElevatedCard';

function App() {
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          {/* <UserData /> */}
          <FlatCards />
          <ElevatedCard />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

export default App;
