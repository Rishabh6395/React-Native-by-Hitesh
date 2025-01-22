/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';



function App(): React.JSX.Element {
  const [randomBackground, setRandomBackground] = useState("#ffffff");

  const generateColor = () => {
    const hexRange = "0123456789abcdef";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);
  }

  return (
    <>
      <StatusBar backgroundColor={randomBackground}/>
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <TouchableOpacity onPress={generateColor}>
          <View style={styles.actionButton}>
            <Text style={styles.actionBtnTxt}>Press Me!</Text>
          </View>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  actionButton: {
    backgroundColor: '#000000',
    padding: 10,
    marginVertical: 10,
    borderRadius: 5,
  },
  actionBtnTxt:{
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  }
});

export default App;
