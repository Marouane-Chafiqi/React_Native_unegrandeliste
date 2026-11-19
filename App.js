import * as React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';

import AppHeader from './src/components/AppHeader';
import AppFooter from './src/components/AppFooter';
import MenuItems from './src/components/MenuItems';

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={styles.container}>
        <AppHeader />
        <MenuItems />
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});
