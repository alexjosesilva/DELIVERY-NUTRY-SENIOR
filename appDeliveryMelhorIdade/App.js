import React from 'react';
import {createAppContainer } from 'react-navigation';
import {createDrawerNavigator } from 'react-navigation-drawer';

import home from './src/pages/home';
import meus_pedidos from './src/pages/meus_pedidos';
import pagamento from './src/pages/pagamento';
import buscaporvoz from './src/pages/buscaporvoz';


import CustomDrawer from './src/components/CustomDrawer';

const Routes = createAppContainer(
	
	createDrawerNavigator({
		home,
		meus_pedidos,
		pagamento,
		buscaporvoz
	}, {
		initialRouteName: 'home',
		//contentComponent: props => <CustomDrawer  {...props} />
		//contentComponent: CustomDrawer
	})
)

export default Routes;