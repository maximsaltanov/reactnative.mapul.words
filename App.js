import React from 'react';
import Card from './components/Card';
import { StyleSheet, View } from 'react-native';
import { Provider } from 'react-redux';

import configureStore from './store';

const store = configureStore()

export default class App extends React.Component {

  render() {    
        
    return (            
      <Provider store={store}>                
        <View style={styles.container}>                          
            <Card></Card>                    
        </View>
      </Provider>      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'    
  }  
});
