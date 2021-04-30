import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';


class PhonicSoundButton extends React.Component {
    playSound = async(soundChunk)=>{
        var soundLink = 'https://s3-whitehatjrcontent.whjr.online/phones/' + soundChunk + '.mp3';
        await Audio.Sound.createAsync(
            {
                uri: soundLink
            },
            {shouldPlay : true}
        )
    }

    render(){


        return(
            <TouchableOpacity
              style={styles.chunkButton}
              onPress = {()=>{
                  this.playSound(this.props.soundChunk)
              }}
              >
              <Text style={styles.displayText}>{this.props.wordChunk}</Text>
              </TouchableOpacity>

        );
    }
       
  
    }
  export default PhonicSoundButton;

  const styles = StyleSheet.create({
    displaytext:{
        alignSelf: 'center',
        justifyContent:'center',
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: '50px'
      },
    chunkButton:{
      width: '40%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center',
      borderRadius: 10,
      margin: 5,
      backgroundColor: 'red'
    }
  });
  