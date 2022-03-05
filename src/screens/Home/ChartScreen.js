import React, { useRef, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  StatusBar,
  Animated,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView
} from 'react-native'
import styles from './Home.style'
import Icon from 'react-native-vector-icons/Ionicons'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUser, selectAll } from '../../../src/stores/user.reducer'
import Header from '../../components/Header'
import ExpenseSummary from '../../components/ExpenseSummary'
import CategoriesCard from '../../components/CategoriesCard'
import { COLORS, FONTS, SIZES } from '../../constraints/Theme'
import { IonIcons } from '../../constraints/IoniconsIcons'
// import Charts from '../../components/Charts'

// import { VictoryBar, VictoryChart, VictoryTheme } from "victory-native";


const ChartScreen = () => {

    return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <Header />
        <ScrollView>

        {/* <VictoryChart theme={VictoryTheme.material} >
        </VictoryChart> */}
          



        </ScrollView>

      </SafeAreaView>
    </>
  )
}

export default ChartScreen
