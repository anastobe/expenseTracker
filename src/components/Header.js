import React from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import { IonIcons } from '../constraints/IoniconsIcons'

const Header = () =>{
    return(
        <View style={styles.Headercontainer} >
            <Icon name={IonIcons.backArror} size={28} color={'black'} />
            <Icon name={IonIcons.threeDot} size={28} color={'black'} />
        </View>
    )
}



const styles = StyleSheet.create({
    Headercontainer: {
      padding: 10,
      flexDirection: 'row', 
      justifyContent: 'space-between',
      backgroundColor: "#fff"
    },
  });
export default Header

