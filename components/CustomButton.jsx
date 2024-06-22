import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '../Utils/Colors'

const CustomButton = ({onPress, text}) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.buttonText}>{text}</Text>
    </TouchableOpacity>
  )
}

export default CustomButton

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colors.SECONDARY,
        width: '94%',
        padding: 19,
        marginVertical: 20,
        alignItems: 'center',
        borderRadius: 7,
        marginTop: 350,
        marginLeft: 13,
        marginRight: 13
    },
    buttonText:{
        color: '#fff',
        fontWeight: 'bold'
    }
})