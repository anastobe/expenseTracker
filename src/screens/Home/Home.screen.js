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

const Home = ({navigation}) => {
  
  let CategoriesData = [
    {
      id: 1,
      name: 'Education',
      icon: IonIcons.analytics,
      color: "#f4aa4c",
      expences: [
      {
        id: 1,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 2,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 3,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 4,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      }]
    },
    {
      id: 2,
      name: 'Education',
      icon: IonIcons.bulb,
      color: "#f4aa4c",
      expences: [
      {
        id: 1,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 2,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 3,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 4,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      }]
    },
    {
      id: 3,
      name: 'Education',
      icon: IonIcons.image,
      color: "#f4aa4c",
      expences: [
      {
        id: 1,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 2,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 3,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 4,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      }]
    },
    {
      id: 5,
      name: 'Education',
      icon: IonIcons.analytics,
      color: "#f4aa4c",
      expences: [
      {
        id: 1,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 2,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 3,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 4,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      }]
    },
    {
      id: 6,
      name: 'Education',
      icon: IonIcons.bulb,
      color: "#f4aa4c",
      expences: [
      {
        id: 1,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 2,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 3,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 4,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      }]
    },
    {
      id: 4,
      name: 'Education',
      icon: "image-outline",
      color: "#f4aa4c",
      expences: [
      {
        id: 1,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 2,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 3,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      },
      {
        id: 4,
        title: "title",
        discription: "discription",
        location: "location",
        total: "total",
        status: "status"
      }]
    },

  ]


  let BottomCardsData = [{
    id: 1,
    iconname: IonIcons.bulb,
    iconTxt: "Beauty & Care",
    DescriptioHeading: "Dermal Softening",
    Description: "Forever Leaving is the best blatfor run more than 160 + Countries and their Project are Higly Recomanded as well as Halal",
    locationIcon: IonIcons.location,
    loactionDescription: "orangi Town Karachi",
    ConfirmDesc: "Confirm by 12$",
  },
  {
    id: 2,
    iconname: IonIcons.bulb,
    iconTxt: "Beauty & Care",
    DescriptioHeading: "Dermal Softening",
    Description: "Forever Leaving is the best blatfor run more than 160 + Countries and their Project are Higly Recomanded as well as Halal",
    locationIcon: IonIcons.location,
    loactionDescription: "orangi Town Karachi",
    ConfirmDesc: "Confirm by 12$",
  },
  {
    id: 3,
    iconname: IonIcons.bulb,
    iconTxt: "Beauty & Care",
    DescriptioHeading: "Dermal Softening",
    Description: "Forever Leaving is the best blatfor run more than 160 + Countries and their Project are Higly Recomanded as well as Halal",
    locationIcon: IonIcons.location,
    loactionDescription: "orangi Town Karachi",
    ConfirmDesc: "Confirm by 12$",
  },
]


const[Categories, setCategories] = useState(CategoriesData)
const[showmoreToggle, setshowmoreToggle] = useState(false)
const categoryListHeightAnimationValue = useRef(new Animated.Value(150)).current;



  function renderCategoryList() {

    const renderItem = ({item}) =>{
      return(
        <TouchableOpacity
          style={{
            flex: 1,
            paddingVertical: SIZES.radius,
            paddingHorizontal: SIZES.padding,
            borderRadius: 5,
            margin: 5,
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: COLORS.white,
            ...styles.shadow
          }}
        >
          <Icon name={item.icon} size={28} color={COLORS.lightRed} />
          <Text 
           style={{
             marginLeft: SIZES.base,
             color: COLORS.black,
             ...FONTS.h3
           }}
          >{item.name}</Text>
        </TouchableOpacity>
      )
    }

    return(
      <View style={{ paddingHorizontal: SIZES.padding -5 }} >
        <Animated.View style={{ height: categoryListHeightAnimationValue }} >

          <FlatList
            data={Categories}
            renderItem={renderItem}
            keyExtractor={item => `${item.id}`}
            numColumns={2}
           />

           <TouchableOpacity style={{ 
             alignItems: 'center' ,
             flexDirection: 'row',
             justifyContent: 'center'
            }} 
            onPress={()=>{
             if (showmoreToggle) {
               Animated.timing(categoryListHeightAnimationValue,{
                 toValue: 150,
                 duration: 300,
                 useNativeDriver: false
               }).start()
             } else {
              Animated.timing(categoryListHeightAnimationValue,{
                toValue: 220,
                duration: 300,
                useNativeDriver: false
              }).start()
             }
             setshowmoreToggle(!showmoreToggle)
           }} >


             {showmoreToggle ? 
             <View style={{ flexDirection: 'row', alignItems: 'center' }} >
             <Text>Less</Text><Icon name={IonIcons.upward} size={28} color={'black'} />
             </View>
            :
            <View style={{ flexDirection: 'row', alignItems: 'center' }} >
              <Text>More</Text><Icon name={IonIcons.dropDown} size={28} color={COLORS.lightRed} />
            </View>
            }
           
           </TouchableOpacity>

        </Animated.View>
      </View>
    )
  }

  function renderIncommingExpenseTitle() {
    return(
      <View style={{ backgroundColor: "#fff" }} >
        <Text style={{
          color: COLORS.black,
          ...FONTS.h3
        }}
        >  Incomming Expense</Text>
        <Text>  12 Feb</Text>
      </View>
    )
  }


  function renderIncommingExpenseCards() {

    const renderItem = ({item}) =>{
      return(
        <View style={{ flexDirection: 'row', paddingVertical: SIZES.radius, paddingHorizontal: SIZES.padding}} >
        <View style={{ backgroundColor: COLORS.white ,width: 270, borderRadius: SIZES.radius, padding: 12, overflow: 'hidden' ,...styles.shadow }} >
          
         <View style={{ flexDirection: 'row', alignItems: 'center' }} >
          <Icon name={item.iconname} size={25} color={COLORS.lightRed} /><Text>  {item.iconTxt}</Text>
         </View>
  
         <View>
           <Text style={{ color: COLORS.black, ...FONTS.h3}} >{item.DescriptioHeading}</Text>
           <Text style={{  ...FONTS.h4}} >{item.Description}</Text>
         </View>
  
         <View>
           <View style={{ flexDirection: 'row', paddingVertical: SIZES.padding }} >
             <Icon name={item.locationIcon} size={20} color={COLORS.lightRed} /><Text>{item.loactionDescription}</Text>
           </View>
         </View>
      
      <TouchableOpacity onPress={()=> navigation.navigate("ChartScreen") } >
         <View style={{ backgroundColor: COLORS.lightRed, borderRadius: 15, paddingVertical: 5 }} >
           <Text  style={{ color: COLORS.black, ...FONTS.h3}} >  {item.ConfirmDesc}</Text>
         </View>
      </TouchableOpacity>
      
        </View>
  
     </View>
      )
    }


    return(

      <FlatList
      data={BottomCardsData}
      renderItem={renderItem}
      horizontal={true}
      keyExtractor={item => `${item.id}`}
      numColumns={1}
     />

    )
  }

  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor={'#f9f9f9'} />
      <SafeAreaView style={styles.SafeAreaView2}>
        <Header />
        <ScrollView>

          <ExpenseSummary />

          <CategoriesCard />

          {renderCategoryList()}

          {renderIncommingExpenseTitle()}

        
        </ScrollView>
          {renderIncommingExpenseCards()}

      </SafeAreaView>
    </>
  )
}

export default Home
