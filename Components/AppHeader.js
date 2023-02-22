import React from 'react'
import {
  View,
  Text,
  StyleSheet
} from 'react-native'
import MenIcon from 'react-native-vector-icons/AntDesign'
import ScanIcon from 'react-native-vector-icons/MaterialCommunityIcons'
import { colors } from './colors'

const AppHeader = () => {
  return (
    <View style={[styles.start]}>

      <View >
        <MenIcon size={30} style={[styles.start]}  name="menuunfold" onPress={() => { alert('Menu') }}></MenIcon>
      </View>

      <View style={[styles.via, styles.font]}>
        <Text style={[styles.via, styles.font]}>Account 1</Text>
        <MenIcon style={[styles.men,styles.start]}  size={30} name="down" onPress={() => { alert('No Back') }}></MenIcon>
      </View>

      <View style={styles.via}>
        <ScanIcon size={30} style={[styles.start]}   name="credit-card-scan-outline" onPress={() => { alert('Sccan') }}></ScanIcon>
      </View>

    </View>
  )
}
export default AppHeader
const styles = StyleSheet.create({
  start: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: colors.primary,
    color:'white',
  },
  via: {
    margin: 10,
    color:'white',
    flex:0,
    flexDirection:'row',
    // alignContent:'center',
    justifyContent: 'flex-start',
  },
  font: {
    fontSize: 30,
    // fontStyle: 'italic'
  },
  men: {
   marginTop:16,
  },
})