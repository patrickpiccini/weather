import { View, Text, StyleSheet}from 'react-native'
import React from 'react'
import StyleIcons from '../components/StyleIcons'


export default function About() {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>Patrick Berlatto Piccini</Text>
      <Text style={{fontSize: 20}}></Text>
      <Text style={{fontSize: 20}}>IMED - Ciências da Computação</Text>
      <Text style={{fontSize: 20}}> Tópicos Especiais em Programação</Text>

      <View style={styles.line}>

        <StyleIcons 
        link={'https://patrickpiccini.github.io/'}
        icon={'https://cdn-icons.flaticon.com/png/512/5094/premium/5094498.png?token=exp=1650250043~hmac=41a5b6ec0abde6dc1231d4b056b3119d'}
        />

        <StyleIcons 
        link={'https://github.com/patrickpiccini'}
        icon={'https://cdn-icons.flaticon.com/png/512/1240/premium/1240971.png?token=exp=1650249310~hmac=a88b79606cc7ff80bbb31dab24c7440e'}
        />

        <StyleIcons 
        link={'https://www.linkedin.com/in/patrick-berlatto-piccini-8414a91a7/'}
        icon={'https://cdn-icons-png.flaticon.com/512/220/220343.png'}
        />

        <StyleIcons 
        link={'mailto:patrickpiccini@hotmail.com'}
        icon={'https://cdn-icons-png.flaticon.com/512/1034/1034146.png'}
        />
  
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