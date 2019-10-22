import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  DrawerItems,
  createStackNavigator,
  createDrawerNavigator,
  createAppContainer,
  AppNavigator,
} from 'react-navigation';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from './pantallas/home';//inicio

const HomeScreen = ({ navigation }) => <Home navigation={navigation} />;


const DrawerCustom = props => (
  <View style={[styles.container]}>
    <View style={styles.drawer}>
      <ScrollView>
        <DrawerItems
          {...props}
          activeBackgroundColor="rgba(255,255,255,0.3)"
          activeTintColor="#fff"
          tintColor="#fff"
          iconContainerStyle={styles.drawerIconContainer}
          labelStyle={styles.drawerLabel}
        />
      </ScrollView>
    </View>
  </View>
);



const MyDrawerNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: () => ({
        drawerLabel: 'Inicio',
        drawerIcon: ({ tintColor }) => (
          <MaterialCommunityIcons
            name="home"
            size={24}
            style={{ color: tintColor }}
          />
        ),
      }),
    },
  },
  {
    contentComponent: DrawerCustom,
  }
);

export default createAppContainer(MyDrawerNavigator);


















const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#006400',
    paddingTop: StatusBar.currentHeight + 20,
  },
  drawerIconContainer: {
    color: '#fff'
  },
  drawerLabel: {
    color: '#fff'
  }
});
