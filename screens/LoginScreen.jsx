import { Image, StyleSheet, Text, View, useWindowDimensions } from 'react-native'
import React,{useState} from 'react'
import Logo from '../assets/images/yeeef2.png';
import CustomButton from '../components/CustomButton';
import CustomText from '../components/CustomText';
import {client} from '../Utils/KindConfig';
import * as WebBrowser from 'expo-web-browser';


const LoginScreen = () => {
    const [result, setResult] = useState(null);
    const handleSignUp = async () => {
        const token = await client.register();
        if (token) {
          // User was authenticated
          console.log('Registering')
        }
      };

      const _handlePressButtonAsync = async () => {
        let url = client.register();
        try {
          // Call client.register() to get the URL
        //   let url = await client.register();
          
          // Open the URL in the web browser
          let result = await WebBrowser.openBrowserAsync('https://yeeef.kinde.com');
    setResult(result);
          
          // Handle the result (optional)
          setResult(result);
        } catch (error) {
          console.error("An error occurred while trying to open the browser:", error);
        }
      };
      




      
      const handleSignIn = async () => {
        const token = await client.login();
        if (token) {
          // User was authenticated
          console.log('Loggin In');
        }
      };
    const {height} = useWindowDimensions();
  return (
    <View>
     <Image source={Logo} 
        style={[styles.logo, {height: height * 0.3}]}
        resizeMode='contain' 
    
     />
     <CustomButton 
     text="Login"
     onPress={_handlePressButtonAsync}
     />
     <CustomText 
     text="Don't Have An Account? Register"
     onPress={handleSignUp}
     />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
    logo:{
        width: '100%',
        height: '30%',
        maxWidth: 300,
        maxHeight: 300,
        marginLeft: 79
        

    }
})