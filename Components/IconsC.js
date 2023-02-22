import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Text } from "./Text"
import Icon from 'react-native-vector-icons/AntDesign'
import ArrowIcon from 'react-native-vector-icons/Ionicons'
import { colors } from './colors'

const IconsC = () => {
  return (
    <View style={styles.start}>

      <View style={styles.ico}>
        <ArrowIcon style={styles.button} size={30} name="arrow-redo-outline" onPress={() => { alert('Up') }}></ArrowIcon>
        <Text style={styles.one} text='  Send' title />
      </View>

      <View style={styles.ico}>
        <Icon style={styles.button} size={30} name="reload1" onPress={() => { alert('Reload') }}></Icon>
        <Text style={styles.one} text='Recieve' title />
      </View>

      <View style={styles.ico}>
        <ArrowIcon style={styles.butt} size={30} name="arrow-redo-outline" onPress={() => { alert('Down') }}></ArrowIcon>
        <Text style={styles.one} text='   Mix' title />
      </View>

    </View>
  )
}
export default IconsC

const styles = StyleSheet.create({
  start: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },
  ico: {
    margin:8,
    // marginLeft: 5,
    // flex: 1,
    // flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'space-around',

  },
  button: {
    backgroundColor: 'rgb(51, 51, 255)',
    color: 'white',
    padding: 14,
    margin: 14,
    borderRadius: 50,
    flexDirection: 'row',
    // borderColor: "blue",

  },
  one: {
    marginLeft: 20,
    // marginRight:24,
    // transform : rotate(180)
  },
  butt: {
    backgroundColor: 'rgb(51, 51, 255)',
    color: 'white',
    padding: 14,
    margin: 14,
    borderRadius: 50,
    flexDirection: 'row',
    // borderColor: "blue",
    transform: [{ rotate: "180deg" }]
  }

})