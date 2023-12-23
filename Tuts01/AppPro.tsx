import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  useColorScheme,
} from 'react-native';
function AppPro(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
          Himanshi Bhardwaj Rai2
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  whiteText: {
    color: 'green',
  },
  darkText: {
    color: 'black',
  },
});

export default AppPro;
