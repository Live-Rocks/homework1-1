import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';            //以上導入

export default function App() {

  const [validCode, setVaildCode] = useState('')
  const [狀態, set狀態] = useState('none')
  const rightCode = '1000'
  if (validCode == rightCode) set狀態('OK')

  return (
    <View style={styles.container}>
      <Text style={styles.maintext}> $$$ Congratulations you won a bonus $$$ </Text>
      <TextInput
        style={{
          height: 50, width: 300, borerRadius: 0,                             //輸入區格式
          borderColor: 'black', borderWidth: 1, backgroundColor: 'white',
          color: 'black', fontSize: 22, textAlign: 'center'
        }}
        onChangeText={(text) => setVaildCode(text)}
        value={validCode}
        maxLength={4}
        placeholder='Text here (four digits)'                                   //框內背景字
        keyboardType='numeric'                                                //鍵盤樣式
        secureTextEntry={false}                                               //true隱藏打出的字
        autoFocus={true}                                                      //true自動跳出鍵盤
      />
      <Text style={styles.text1}>YOUR BONUS : ${validCode}</Text>
      <Text style={styles.text2}>State : {狀態}</Text>

      < StatusBar style="auto" />
    </View >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f8ff',                                            //若有似無的淺藍
    alignItems: 'center',
    justifyContent: 'center',
  },
  maintext: {                                                              //標題格式
    fontSize: 20,
    color: 'black'
  },
  text1: {
    fontSize: 10,
    color: 'gray'
  },
  text2: {
    fontSize: 20,
    color: 'red'
  }
});
