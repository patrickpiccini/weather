import { Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native'
import React, { useLayoutEffect, useState } from 'react'
const date = require('date-and-time')




export default function CityInformatio(props) {

    const data = props.dados
    const id = data.id
    const [nameCity, setNameCity] = useState("")
    const [uf, setUf] = useState("")
    const [resume, setResume] = useState()
    const [day_week, setDay_week] = useState()
    const [max, setMax] = useState()
    const [min, setMin] = useState()

    const now  =  new Date();
    const dateformat = date.format(now,'DD/MM/YYYY');
    const hourformat = date.format(now, 'HH')
   

    useLayoutEffect(() => {

        setNameCity(data[id][dateformat].manha.entidade)

        if (hourformat >= 1 && hourformat <= 12 ){
          setUf(data[id][dateformat].manha.uf)
          setResume(data[id][dateformat].manha.resumo)
          setDay_week(data[id][dateformat].manha.dia_semana)
          setMax(data[id][dateformat].manha.temp_max)
          setMin(data[id][dateformat].manha.temp_min)

        }else if (hourformat > 12 && hourformat <= 18) {
          setUf(data[id][dateformat].tarde.uf)
          setResume(data[id][dateformat].tarde.resumo)
          setDay_week(data[id][dateformat].tarde.dia_semana)
          setMax(data[id][dateformat].tarde.temp_max)
          setMin(data[id][dateformat].tarde.temp_min)


        } else if (hourformat > 18 && hourformat <= 24) {
          setUf(data[id][dateformat].noite.uf)
          setResume(data[id][dateformat].noite.resumo)
          setDay_week(data[id][dateformat].noite.dia_semana)
          setMax(data[id][dateformat].noite.temp_max)
          setMin(data[id][dateformat].noite.temp_min)
        }

    }, [])


  return (
    <TouchableOpacity onPress={ () => props.navigation.navigate("InfoWeather", data)}>

    <View style={styles.box}>
      <View style={styles.line}>
        <View style={styles.columnE}>

          <Text style={styles.title}>{nameCity}</Text>
          <Text style={styles.infos}>{uf}</Text>
          <Text style={styles.infos}></Text>
          <Text style={styles.infos}></Text>
          <Text style={styles.infos}>{resume}</Text>
        
        </View>

        <View style={styles.columnD}>

        <View style={styles.line}>
        <Text style={styles.grauTxt}>Max:</Text>
        <Text style={styles.grau}> {max}º</Text>
        </View>
        <View style={styles.line}>
        <Text style={styles.grauTxt}>Max:</Text>
        <Text style={styles.grau}> {min}º</Text>
        </View>
        <Text style={styles.infos}></Text>
        <Text >{day_week}</Text>
          

        </View>
      </View>
    </View>     

  </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#262626",
  },
  box: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    margin: 7,
    borderColor: "#9E9E9E"
    },
  line: {
      flexDirection: "row",
  },
  columnE:{
      flex: 2,
  },
  columnD:{
    flex:1,
    alignItems: 'flex-end'
  },
  title: {
    fontSize:25,
    fontWeight: 'bold',
 
  }, 
  grau:{
    textAlign:'right',
    fontSize:30,
 
  },
  day:{
    textAlign:'right',
 
  },grauTxt:{
    textAlign: "right",
     fontSize: 20, 
     alignSelf: 'center', 

  }
  

  
  });