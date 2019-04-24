import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { translateCard } from '../actions/translateCard';
import { nextCard } from '../actions/nextCard';

const mapDispatchToProps = (dispatch) => {
  return { 
    nextCard: bindActionCreators(nextCard, dispatch),
    translateCard: bindActionCreators(translateCard, dispatch)
  }  
} 

const mapStateToProps = state => ({  
  textSource: state.textSource,
  textDest: state.textDest,
  isShowTranslate: state.isShowTranslate,
  isShowButtonsContainer: state.isShowButtonsContainer
});

class Card extends React.Component {
   
    _onGetAnswer() {      
      console.log('translateCard');
       this.props.translateCard();
    };

    _onAgain() {            
       this.props.nextCard(1);
    };

    _onHard() {            
      this.props.nextCard(2);
    };

    _onEasy() {            
      this.props.nextCard(3);
    };
        
    render() {
            
      let text = this.props.isShowTranslate ? this.props.textDest : '?';

      return (        
        <View style={ { flex: 1 } }>      
          <View style={styles.cardContainer}>
            <View style={styles.wordContainer}>      
              <Text style={styles.text}>{this.props.textSource}</Text>                  
            </View>
            <TouchableOpacity style={[styles.wordContainer, styles.noBorder]} onPress={this._onGetAnswer.bind(this)}>
              <Text style={styles.text}>{text}</Text>        
            </TouchableOpacity>          
          </View>
          { this.props.isShowButtonsContainer ? 
            <View style={styles.rateContainer}>                           
              <TouchableOpacity style={[styles.button, styles.againButton]} onPress={this._onAgain.bind(this)}>
                <Text style={ styles.buttonText }>Again</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.hardButton]} onPress={this._onHard.bind(this)}>
                <Text style={ styles.buttonText }>Hard</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.button, styles.easyButton]} onPress={this._onEasy.bind(this)}>
                <Text style={ styles.buttonText }>Easy</Text>
              </TouchableOpacity>            
            </View>
          : null }
        </View>
      );
    }
  }  

  export default connect(mapStateToProps, mapDispatchToProps)(Card);

  const styles = StyleSheet.create({    
    cardContainer: {
      flex: 0.9        
    },
    rateContainer: {
      flex: 0.1,    
      flexDirection: 'row',
      justifyContent: 'space-around'
    },        
    wordContainer: {
      flex: 0.5,    
      alignItems: 'center',
      justifyContent: 'center',    
      borderBottomWidth: 1,
      borderBottomColor: '#d6d7da',  
    },    
    noBorder: {      
      borderBottomWidth: 0
    },    
    text: {    
      fontWeight: 'bold',
      fontSize: 30,
      color: "white"    
    },    
    button: {
      flex: 0.33,
      justifyContent: 'center',
      alignItems: 'center'
    },
    againButton: {      
      backgroundColor: '#E74C3C'    
    },
    hardButton: {
      backgroundColor: '#D68910'
    },
    easyButton: {
      backgroundColor: '#28B463'
    },
    buttonText:
    {
        color: 'white'        
    }
  });  