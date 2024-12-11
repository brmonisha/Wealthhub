import React from 'react';
import { SafeAreaView, StatusBar, View, StyleSheet } from 'react-native';
import ExploreScreen from '../explore/index';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <ExploreScreen />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    paddingTop: 40, 
  },
});

export default App;
