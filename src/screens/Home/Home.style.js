import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingTop: 10,
    paddingHorizontal: 10
  },
  SafeAreaView1: { backgroundColor: '#fff', flex: 0 },
  SafeAreaView2: { flex: 1, backgroundColor: '#f4f4f4' },
  outerWrapper: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF'
  },
  buttonStyle: {
    backgroundColor: '#EEE',
    paddingHorizontal: 40,
    paddingVertical: 30,
    borderWidth: 0.5,
    borderColor: '#F0F0F0',
    borderRadius: 10
  },
  text: { fontSize: 18, color: '#808080', fontWeight: 'bold' },


  //shadow
  shadow: {
    shadowColor: "#000",
    shadowOffset:{
      width: 2,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 3
  }
})
