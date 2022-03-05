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
import{ COLORS, SIZES, FONTS } from '../constraints/Theme'

const ExpenseSummary = () =>{
    return(
        <View style={styles.mainContainer} >
           
           <View style={styles.HigherContainer} >
               <Text style={styles.expenseHeadingtxt} >My Expenses</Text>
               <Text style={styles.Summarytxt} >Summary Private</Text>
           </View>
           
           <View style={styles.lowerContainer} >
             
             <View>
             <Icon name={IonIcons.calander} size={25} color={COLORS.black} />
             </View>    

             <View>
                 <Text style={styles.datetxt}>  07, feb 2019</Text>
                 <Text style={styles.increasttxt}>  1% more than last month</Text>
             </View>    
           
           </View>

        </View>
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#fff', 
      },
      HigherContainer: {
          height: 70,
          justifyContent: 'center',
          paddingLeft: 10
      },
      expenseHeadingtxt:{
        fontSize: 20, 
        color: COLORS.black
      },
      Summarytxt:{
        color: COLORS.ferozee
      },
      lowerContainer: {
        flexDirection: 'row', 
        height: 70,
        paddingLeft: 10,
        alignItems: 'center'
      },
      datetxt:{
        color: COLORS.black
      },
      increasttxt:{
        color: COLORS.ferozee
      }
  });


export default ExpenseSummary
