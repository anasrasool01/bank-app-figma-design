import React from 'react'
import { View, StyleSheet } from 'react-native'
import AppHeader from './Components/AppHeader'
import FirstC from './Components/FirstC'
import MiddleC from './Components/MiddleC'
import SecondC from './Components/SecondC'
import Third from './Components/Third'


const App = () => {
  return (

    <View style={{ flex: 1 }}>
      <AppHeader />
      {/* use text component */}
      <View style={styles.wrapper}>

        <View style={styles.Fir}>

        <FirstC />

        </View>

        <View style={styles.Sec}>

        <MiddleC/>
        
        </View>
        
        <View style={styles.Thi}>

        <SecondC/>
        
        </View>

        <View style={styles.Fort}>
        
        <Third/>

        </View>

      </View>


    </View>
  )
}

export default App;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'rgba(30, 30, 30 ,1)',
    alignItems: 'center',
    // justifyContent: 'space-around',
  },
  Fir : {
    paddingTop:30,
    // flex : 1,
    height : 360,

  },
  Sec : {
    height : 60,
  },
  Thi : {
    height : 150,
  },
})