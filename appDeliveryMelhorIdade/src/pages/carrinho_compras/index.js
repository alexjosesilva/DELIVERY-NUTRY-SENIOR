/**
* Meus Pedidos.js
 */

import React from 'react';
import {View,Text, Image,StyleSheet} from 'react-native';

export default function Carrinhos_compras() {
  return (
	<View style={styles.container}>
    <Image
          source={require('../../assets/carrinho_compras.png')}
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
    }
})
