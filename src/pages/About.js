import { View, Text, StyleSheet, Image, Linking, TouchableOpacity} from 'react-native'
import React from 'react'


export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Patrick Berlatto Piccini</Text>
      <Text style={{fontSize: 20}}></Text>
      <Text style={{fontSize: 20}}>IMED - Ciências da Computação</Text>
      <Text style={{fontSize: 20}}> Tópicos Especiais em Programação</Text>

      <View style={styles.line}>

      <TouchableOpacity onPress={() => Linking.openURL('https://patrickpiccini.github.io/')}>
          <Image
          style={{height:50, width:50, marginHorizontal: 10}}
          source={{uri:'https://cdn-icons.flaticon.com/png/512/5094/premium/5094498.png?token=exp=1650250043~hmac=41a5b6ec0abde6dc1231d4b056b3119d'}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://github.com/patrickpiccini')}>
          <Image
          style={{height:50, width:50, marginHorizontal: 10}}
          source={{uri:'https://cdn-icons.flaticon.com/png/512/1240/premium/1240971.png?token=exp=1650249310~hmac=a88b79606cc7ff80bbb31dab24c7440e'}}
          />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => Linking.openURL('https://www.linkedin.com/in/patrick-berlatto-piccini-8414a91a7/')}>
          <Image
          style={{height:50, width:50, marginHorizontal: 10}}
          source={{uri:'https://cdn-icons-png.flaticon.com/512/220/220343.png'}}
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => Linking.openURL('mailto:patrickpiccini@hotmail.com')}>
          <Image
          style={{height:50, width:50, marginHorizontal: 10}}
          source={{uri:'https://cdn-icons-png.flaticon.com/512/1034/1034146.png'}}
          />
        </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  }, 
  line:{
    flexDirection: "row",
    marginTop: 20
  },
  name:{
    fontSize: 23,
    fontWeight: "bold"
  }


})