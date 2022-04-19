import {TouchableOpacity ,Image, Linking} from 'react-native'
import React from 'react'

export default function StyleIcons(props) {

  return (
    <TouchableOpacity onPress={() => Linking.openURL(props.link)}>
    <Image
    style={{height:50, width:50, marginHorizontal: 10}}
    source={{uri:props.icon}}
    />
  </TouchableOpacity>
  )
}