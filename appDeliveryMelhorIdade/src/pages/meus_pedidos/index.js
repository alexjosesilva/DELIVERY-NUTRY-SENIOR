/**
* Meus Pedidos.js
 */

import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default function Meus_Pedidos() {
  return (
	<View style={styles.container}>
    <Image
          source={require('../../assets/meus_pedidos.png')}
          style={styles.imagem}
      />
	</View>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imagem:{
		width:420,
		height:650
    }
})
