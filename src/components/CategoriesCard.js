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
import { COLORS } from '../constraints/Theme'

const CategoriesCard = () =>{
    return(
        <View style={styles.mainContainer} >

         <View style={styles.leftContainer} >
             <Text style={styles.categorytxt} >CATEGORIES</Text>
             <Text style={styles.totaltxt} >7 Total</Text>
         </View>

         <View style={styles.rightContainer} >
             <View>
          <Icon name={IonIcons.image} size={25} color={COLORS.black} />
             </View>

             <View>
          <Icon name={IonIcons.navIcon} size={25} color={COLORS.black} />
             </View>
         </View>

        </View>
    )
}



const styles = StyleSheet.create({
    mainContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 70,
        marginTop: 5,
        backgroundColor: COLORS.white,
    },
    categorytxt:{
        fontSize: 15,
        color: COLORS.black
    },
    leftContainer:{
        paddingLeft: 10,
        justifyContent: 'center'
    },
    rightContainer:{
        flexDirection: 'row',
        width: 100,
        // height: 70,
        paddingRight: 10,
        alignItems: 'center',
        justifyContent: 'space-around'
    }


  });
export default CategoriesCard

