import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

// Form validation -- this is for from validation
import * as Yup from 'yup'

const PasswordSchema = Yup.object().shape({
  passwordLength: Yup.number()
  .min(4, 'Should be min of 4 characters')
  .max(60, 'Should be max of 60 characters')
  .required('Length is required')
})

export default function App() {

  const [password, setPassword] = useState('')
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false)

  const [lowerCase, setLowerCase] = useState(true)
  const [upperCase, setUpperCase] = useState(false)
  const [numbers, setNumbers] = useState(false)
  const [symbols, setSymbol] = useState(false)

  const generatePasswordString = (passwordLength: number) =>{
    let charcterList = '';

    const upperCaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerCase = 'abcdefghijklmnopqrstuvwxyz';
    const digitChars = '0123456789';
    const specialChars = '@#$%&*';

    if(upperCase){
      charcterList += upperCase;
    }
    if(lowerCase){
      charcterList += lowerCase;
    }
    if(numbers){
      charcterList += numbers;
    }
    if(symbols){
      charcterList += symbols;
    }

    const passwordResult = createPassword(charcterList, passwordLength);

    setPassword(passwordResult);
    setIsPasswordGenerated(true);
  }

  const createPassword = (characters: string, passwordLength: number) => {
    let result = ''
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length)
      result += characters.charAt(characterIndex)
    }
    return result
  }

  const resetPasswordState = () => {
    setIsPasswordGenerated(false);
    setPassword('');
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbol(false);
  }

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}

const styles = StyleSheet.create({})