import { View, Text, StyleSheet , ScrollView} from 'react-native'
import React, {useLayoutEffect, useState} from 'react'
const date = require('date-and-time')
import InfoOpen from '../components/InfoOpen'

export default function InfoWeather(props) {

    const data = props.route.params
    const id = data.id
    const [nameCity, setNameCity] = useState("")
    const [uf, setUf] = useState("")
    const [resume, setResume] = useState()
    const [day_week, setDay_week] = useState()
    const [max, setMax] = useState()
    const [min, setMin] = useState()
    const [humidityMax, setHumidityMax] = useState()
    const [humidityMin, setHumidityMin] = useState()

    const now  =  new Date();
    const dateformat = date.format(now,'DD/MM/YYYY');
    const hourformat = date.format(now, 'HH')
   

    useLayoutEffect(() => {
        props.navigation.setOptions({
          title: data[id][dateformat].manha.entidade
        })

        setNameCity(data[id][dateformat].manha.entidade)

        if (hourformat >= 1 && hourformat <= 12 ){
          setUf(data[id][dateformat].manha.uf)
          setResume(data[id][dateformat].manha.resumo)
          setDay_week(data[id][dateformat].manha.dia_semana)
          setMax(data[id][dateformat].manha.temp_max)
          setMin(data[id][dateformat].manha.temp_min)
          setHumidityMax(data[id][dateformat].manha.umidade_max)
          setHumidityMin(data[id][dateformat].manha.umidade_min)
  

        }else if (hourformat > 12 && hourformat <= 18) {
          setUf(data[id][dateformat].tarde.uf)
          setResume(data[id][dateformat].tarde.resumo)
          setDay_week(data[id][dateformat].tarde.dia_semana)
          setMax(data[id][dateformat].tarde.temp_max)
          setMin(data[id][dateformat].tarde.temp_min)
          setHumidityMax(data[id][dateformat].tarde.umidade_max)
          setHumidityMin(data[id][dateformat].tarde.umidade_min)
  


        } else if (hourformat > 18 && hourformat <= 24) {
          setUf(data[id][dateformat].noite.uf)
          setResume(data[id][dateformat].noite.resumo)
          setDay_week(data[id][dateformat].noite.dia_semana)
          setMax(data[id][dateformat].noite.temp_max)
          setMin(data[id][dateformat].noite.temp_min)
          setHumidityMax(data[id][dateformat].noite.umidade_max)
          setHumidityMin(data[id][dateformat].noite.umidade_min)
  
        }

    
      }, [])


  return (
    <View style={styles.container}>

      <View style={styles.columnbox}> 
          <Text style={{fontSize: 35, fontWeight: 'bold',}}>{nameCity}</Text>
          <Text style={{fontSize: 15, textAlign: 'center', width:200}}>{resume}</Text>
          <Text style={{fontSize: 60,textAlign: 'center'}}>{max}º</Text>
      </View>
     
      <View style={styles.linebox }>
          <Text style={{flex:1, fontWeight:'bold'}}>{day_week}</Text>
          <Text style={{flex:3}}>{dateformat}</Text>
          <View>
            <Text style={{textAlign:'right' }}>max:{humidityMax}</Text>
            <Text style={{textAlign:'right' }}>min:{humidityMin}</Text>

          </View>

      </View>
      <View style={{flex: 3}}>

        <ScrollView> 

          <InfoOpen 
          title="Manhã"
          data={data[id][dateformat].manha}
          />

          <InfoOpen
          title="Tarde"
          data={data[id][dateformat].tarde}
          />

          <InfoOpen 
          title="Noite"
          data={data[id][dateformat].noite}
          />

        </ScrollView>   
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  }, 
  linebox: {
    flexDirection: "row",
    // flex:1,
    padding:20,
    // borderColor: "#9E9E9E",
    shadowColor: "black",
    borderRadius: 4,

  },
  line:{
    flex:1
  },
  columnbox: {
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'center',
    flex:1
  },
  column:{
    flex:1
  }

})