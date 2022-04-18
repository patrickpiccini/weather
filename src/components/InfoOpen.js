import { View, Text,StyleSheet, TouchableOpacity, ScrollView, Image } from 'react-native'
import React, { useLayoutEffect, useState } from 'react';


export default function InfoOpen(props) {

    const data = props.data
    const title = props.title
    const [modalVisible, setModalVisible] = useState(false);
    var bitmap = (base64str) =>  fs.readFileSync('./your-image.png', 'base64');

    useLayoutEffect(() => {
        if(modalVisible == false){

        }
    }, [])

    return (


    <TouchableOpacity onPress={ () =>{setModalVisible(!modalVisible)}}> 


            {modalVisible == false ?
            <View style={styles.box1}>
                <View style={styles.line}>
                    <View style={{flex:2, flexDirection: "row", alignItems: 'center'}}>
                        <Image
                            style={{width:40, height:40}}
                                source={{uri:data.icone}}
                        />
                        <Text style={{marginStart:10, fontWeight: 'bold'}}>{title}</Text>
                    </View>

                    <Text style={{textAlign:'left',marginEnd: 20}}>▶</Text>
                </View>
            </View>
            :
            <View style={styles.box2}>
                    <View style={{flexDirection: "row", marginBottom:10, paddingHorizontal: 8, alignItems: 'center'}}>
                        <View style={{flex:2, flexDirection: "row", alignItems: 'center'}}>
                            <Image
                                style={{width:40, height:40}}
                                    source={{uri:data.icone}}
                            />
                            <Text style={{marginStart:10, fontWeight: 'bold'}}>{title}</Text>
                        </View>
                        <Text style={{textAlign:'left',marginEnd: 20}}>▼</Text>
                    </View>
                    <View style={{paddingHorizontal: 8}}>

                    <Text>Temp. Maxima: {data.temp_max}º</Text>
                    <Text>Temp. Minima: {data.temp_min}º</Text>
                    <Text>Resumo: {data.resumo}</Text>
                    
                    <Text>Ventos: {data.int_vento} - {data.dir_vento}</Text>
                    <Text>Umidade: {data.umidade_min} - {data.umidade_max}</Text>
                    <Text>Estacao: {data.estacao}</Text>
                    <Text>Nascer do Sol: {data.nascer}</Text>
                    <Text>Por do Sol : {data.ocaso}</Text>
                    </View>

                    
                    


            </View>
        
        }
                
                
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 20,
      flex:1,
    }, 
    box1:{
        marginHorizontal:20,
        marginBottom: 20,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#9E9E9E",

    },
    box2:{
        marginHorizontal:20,
        marginBottom: 20,
        paddingHorizontal: 10,
        paddingBottom:10,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: "#9E9E9E",
    },
    line:{
        flexDirection: "row",
        paddingHorizontal: 8,
        alignItems: 'center'
        
    }

  })