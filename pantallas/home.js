import * as React from 'react';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  ToolbarAndroid,
  StatusBar,
  TouchableHighlight,
  TouchableOpacity,
  FlatList,
  Image,
} from 'react-native';
import Constants from 'expo-constants';
import { LinearGradient, Font } from 'expo';
import MapView from 'react-native-maps';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';
import MDI from 'react-native-vector-icons/MaterialCommunityIcons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default class App extends React.Component {
  render() {
    return (

<View style={styles.container}>
  <StatusBar backgroundColor="rgba(255,255,255,1)" barStyle="light-content" translucent animated/>
        <View style={styles.header}>
          <LinearGradient
            colors={['rgba(255,255,255,1)', 'rgba(255,255,255,1)', 'rgba(0,0,0,0.6)']}
            locations={[0.1,0.95,1]}
            style={styles.headerGradient}>
            <TouchableOpacity onPress={() => this.props.navigation.toggleDrawer()}>
                <View style={styles.headerIconContainer}>
                  <MaterialCommunityIcons style={styles.headerIcon} name="menu"/>
                </View>
            </TouchableOpacity>

                <Text style={styles.headerTitle}>Mapa  Ambiental  Et  20</Text>
          </LinearGradient>
        </View>


        <View style={styles.mainContent}>
         
             <MapView
              initialRegion={{
                latitude: -33.6765242,
                longitude: -63.5337337,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
              }}  
              style={mapstyle.mapv}  showsUserLocation={true} >
              </MapView>



        </View >
      </View>




    );
  }
}
const mapstyle = StyleSheet.create({
mapv:{   
  marginTop :'25%',
width: '100%',  
 height: '89%',
},


});


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
  },
  mainContent: {
    //flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'hidden',
    zIndex: 90,
    justifyContent: 'center',
    alignItems: 'center'
  },
  header: {
    height: 56 + StatusBar.currentHeight,
    
    zIndex: 100,
  },
  headerGradient: {
    flexDirection: 'row',
    paddingTop: StatusBar.currentHeight,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 56,
    height: 56,
  },
  headerIcon: {
    fontSize: 24,
    color: "#000"
  },
  headerTitle: {
    fontSize: 18,
    color: '#000',
    fontFamily: 'lato'
  },
});