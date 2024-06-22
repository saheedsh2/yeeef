import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const CustomText = ({text, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomText

const styles = StyleSheet.create({
    container:{
        marginLeft: 39
    },
    text:{
        fontWeight: 'bold',
        opacity: 0.6
    }
})