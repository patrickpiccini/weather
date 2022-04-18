import { View, Text, StyleSheet,FlatList,Button } from 'react-native'
import React, { useState, useLayoutEffect} from 'react';
import { getClima  } from '../service/ClimaAPI';
import CityInformatio from '../components/CityInformatio';
import axios from 'axios';


export default function Home({navigation}) {
    
    const code_city = ["4314100","4311809","4304705","4320800","4307005"]
    // const code_city = [4314100,4311809]
    const [infoCity, setInfoCity] = useState()
    const lista = []

    
    useLayoutEffect(() => {
        code_city.map((item) => {
            getClima(item)
            .then((data) => {
                data["id"] = item
                lista.push(data)
                setInfoCity(lista)

            })
            .catch(erro => console.log(erro))
            
    })

    
    navigation.setOptions({
        headerLeft: () => (
          <Button onPress={() => navigation.navigate("About")} title="About" color='white'/>
        ),
      });
    }, []);

    return (
        <View style={styles.container}> 
            {/* {console.log(infoCity)} */}

        <View > 
            <FlatList
            data={infoCity}
            renderItem={ ({item}) => {
                return <CityInformatio
                    dados={item}
                    navigation={navigation}
                />
            }}
            keyExtractor={item => item.id}
            />

        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   backgroundColor: '#262626',
      // alignItems: 'center',
      // justifyContent: 'center',
    }, 
    
  
});




