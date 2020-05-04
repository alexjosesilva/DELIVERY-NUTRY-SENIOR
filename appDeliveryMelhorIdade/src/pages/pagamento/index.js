/**
* <Text>Pagamentos</Text>.js
 */

import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default function Pagamentos() {
  return (
	<View style={styles.container}>
		
    <Image
          source={require('../../assets/pagamentos.png')}
          style={styles.imagem}
      />
	</View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'	
    },
	imagem:{
		width:400,
		height:680
	}
})
