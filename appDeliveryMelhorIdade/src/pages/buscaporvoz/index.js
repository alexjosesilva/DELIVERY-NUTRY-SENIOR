/**
* contato.js
 */

import React from 'react';
import { Text, View, Image,  StyleSheet} from 'react-native';



export default function Buscaporvoz() {
  return (
	<View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
     <Image
          source={require('../../assets/busca_voz.png')}
          style={styles.imagem}
      />
	</View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    imagem:{
		width:420,
		height:680
    }
})
