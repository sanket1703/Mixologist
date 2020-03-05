import React, { Component } from 'react';
import {Card} from 'react-native-elements';
import {TextInput} from 'react-native';
import {DrawerItems} from 'react-navigation-drawer';
import Dialog from "react-native-dialog";
import firebase from 'firebase';
import Tts from 'react-native-tts';

import { 
    Text,
    View,
    StyleSheet,
    Alert,
    Button,
    FlatList,
    Dimensions,
    Image,
    ImageBackground,
    TouchableHighlight,
    TouchableOpacity,
    } from "react-native";
import { ScrollView, RotationGestureHandler } from "react-native-gesture-handler";
import Voice from 'react-native-voice';
const data1 = require('/Users/apple/Mixo/Assets/data.json')
var flag;
class home extends Component {
  
  constructor (props){
    super(props);
    Tts.setDefaultLanguage('en-US');
    Tts.setDefaultVoice('com.apple.ttsbundle.Samantha-compact');
    Tts.setDefaultPitch(1.1);
    Tts.setDefaultRate(0.4);
   // Tts.setIgnoreSilentSwitch("ignore");

 //       this.navigate = this.navigate.bind(this)
      this.state = {
        data : data1,
        data_name : this.props.navigation.state.params.data,
        recognized: '',
        started: '',
        results: [],
        
      };
      Voice.onSpeechStart = this.onSpeechStart.bind(this);
    Voice.onSpeechRecognized = this.onSpeechRecognized.bind(this);
    Voice.onSpeechResults = this.onSpeechResults.bind(this);
    
  }
  componentWillMount()
  {
    flag =0
    var firebaseConfig = {
      apiKey: "AIzaSyDtgmMnbg4sgpXpCHG2OyOcfkDz9CjSBJM",
      authDomain: "mixologist-72fbf.firebaseapp.com",
      databaseURL: "https://mixologist-72fbf.firebaseio.com",
      projectId: "mixologist-72fbf",
      storageBucket: "mixologist-72fbf.appspot.com",
      messagingSenderId: "861885640475",
      appId: "1:861885640475:web:a7b548b43d9a9a4f87edbe",
      measurementId: "G-868JWR4KW1"
    };
    // Initialize Firebase
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    //firebase.analytics();
    this.database = firebase.database();
    console.log(firebase)
    Tts.getInitStatus().then(() => {
      Tts.speak('Hey there!I am Mixo');
      Tts.speak('Your personal automated mixologist')
      
      Tts.speak('Just tell me a drink and I will mix it for you');
    });
  }
  componentWillUnmount() {
    Voice.destroy().then(Voice.removeAllListeners);
  }
onSpeechStart(e) {
    this.setState({
      started: '√',
    });
  };
onSpeechRecognized(e) {
    this.setState({
      recognized: '√',
    });
   
      
    
  };
onSpeechResults(e) {
    this.setState({
      results: e.value,
    });
    var result = []
    result = this.state.results[0].split(" ")
    var drink
    var drink_no
    if (result.includes('lemon') || result.includes('Mojito') || result.includes('mojito'))
    {
      drink = 'Lemon'
      drink_no = 1
    }
    else if (result.includes('blue','magic')|| result.includes('blue')) 
    {
      drink = 'Blue Magic'
      drink_no = 2
    }
    else if (result.includes('pink','lady')|| result.includes('pink'))
    {
      drink ='Pink Lady'
      drink_no = 3
    }
    else if (result.includes('purple','haze') || result.includes('purple'))
    {
      drink = 'Purple Haze'
      drink_no = 4
    }
    else if (result.includes('yellow','bird')|| result.includes('yellow'))
    {
        drink = 'Yellow Bird'
        drink_no = 5
    }
    else{
      Tts.speak('Mixo, did not catch that. Please say again?')
      firebase.database().ref().update({status:48})
      flag = 1
    }
    if (flag ==0)
    {

    
    firebase.database().ref().update({status:49})
    firebase.database().ref().update({drink:drink_no})
    Tts.speak('That is a great choice!');
    Tts.speak('Mixo is preparing your'+drink)
    Tts.speak('Till then just watch it roll!')
    Alert.alert(  
      'Your'+ ' '+drink+' is on the way',  
      'Mixo is on it!',  
      [  
          {  
              text: 'Cancel',  
              onPress: () => console.log('Cancel Pressed'),  
              style: 'cancel',  
          },  
          {text: 'OK', onPress: () => console.log('OK Pressed')},  
      ]  
  ); 
    } 
  }



  
async _startRecognition(e) {
  Tts.speak('What do you wanna drink today?')
    this.setState({
      recognized: '',
      started: '',
      results: [],
    });
    try {
      await Voice.start('en-US');
    } catch (e) {
      console.error(e);
    }
  }

  static navigationOptions = {
    drawerLabel: 'Home',
 
  };
  
    navigate_Mojito = () => {
      const {navigate} = this.props.navigation;
            navigate('description',{data:this.state.data.Mojito},{i:1})
    }
    navigate_yellow = () => {
      const {navigate} = this.props.navigation;
            navigate('description',{data:this.state.data.Yellow},{i:4})
    }

    navigate_pink = () => {
      const {navigate} = this.props.navigation;
            navigate('description',{data:this.state.data.Pink},{i:3})
    }

    navigate_Blue_shoes = () => {
      const {navigate} = this.props.navigation;
            navigate('description',{data:this.state.data.BlueShoe},{i:0})
    }

    navigate_purple = () => {
      const {navigate} = this.props.navigation;
            navigate('description',{data:this.state.data.Purple},{i:2})
    }


    
   
 
  
    render() {
     
      return (
     <View style = {{color : 'black',flex :1,backgroundColor : '#212121'}}>
       <TextInput style  = {styles.input} placeholder = 'search for mocktails....' placeholderTextColor='grey'>
           
              
       </TextInput>
       <Text style = {{color : 'white',paddingLeft : 20,paddingTop : 20 , fontSize : 25,opacity :0.6}}>
         Trending...
       </Text>
     
           <ScrollView style = {styles.Background} 
           horizontal = {true}>
             <View style ={styles.box1}>
                <TouchableHighlight  onPress={this._startRecognition.bind(this)} style={{width: 250, height:600}}>
                 
                  <Text   style={styles.card}>
          
                   Voice Search
                 
                  </Text>
                  
                 
                
               
                </TouchableHighlight>
               </View>
           
              
              <View style ={styles.box1}>
                <TouchableHighlight onPress = {this.navigate_Mojito} >
                  
                <ImageBackground source = {require( '/Users/apple/Mixo/Assets/mojito1.jpg')}
                resizeMode = 'contain'
                   style={{width: 250, height:600}}
                   >
                  <Text   
                  style={styles.card}>
                   Mojito
                  </Text>
                </ImageBackground>
               
                </TouchableHighlight>
               </View>

 
               <View style ={styles.box1}>
                <TouchableHighlight onPress = {this.navigate_Blue_shoes} >
                  
                <ImageBackground source = {require( '/Users/apple/Mixo/Assets/blue.jpg')}
            resizeMode = 'contain'
            style={{width: 250, height:600}}
                   >
                  <Text   
                  style={styles.card}>
                   BlueMagic
                  </Text>
                </ImageBackground>

               
               
                </TouchableHighlight>
               </View>

          
               <View style ={styles.box1}>
                <TouchableHighlight onPress = {this.navigate_pink} >
                  
                <ImageBackground source = {require( '/Users/apple/Mixo/Assets/pink.jpg')}
                resizeMode = 'contain'
                   style={{width: 250, height:600}}
                   >
                  <Text   
                  style={styles.card}>
                   Pink Lady
                  </Text>
                </ImageBackground>
               
                </TouchableHighlight>
               </View>


               <View style ={styles.box1}>
                <TouchableHighlight onPress = {this.navigate_purple} >
                  
                <ImageBackground source = {require( '/Users/apple/Mixo/Assets/purp.jpg')}
                resizeMode = 'contain'
                   style={{width: 250, height:600}}
                   >
                  <Text   
                  style={styles.card}>
                   Purple Haze
                  </Text>
                </ImageBackground>
               
                </TouchableHighlight>
               </View>

               <View style ={styles.box1}>
                <TouchableHighlight onPress = {this.navigate_yellow} >
                  
                <ImageBackground source = {require( '/Users/apple/Mixo/Assets/yellow.jpg')}
                resizeMode = 'contain'
                   style={{width: 250, height:600}}
                   >
                  <Text   
                  style={styles.card}>
                   Yellow Bird
                  </Text>
                </ImageBackground>
               
                </TouchableHighlight>
               </View>





               
     
              
 
   
           </ScrollView>
      
          </View>
      );
    }
    
  }
  const styles = StyleSheet.create({
    scrollcontainer : {
        flex : 1
    },
    container:{
      flex : 1,
     flexDirection : 'row',
     flexWrap : 'wrap',
    
    },
    box1:{
      borderBottomLeftRadius : 20,
      borderTopRightRadius : 20,
      width : 320,
      height : 500,
      margin : 15, 
   
      alignSelf : 'center',
   
  
      //width : Dimensions.get('window').width / 2 - 6 ,
      
      justifyContent:'center',
      alignItems:'center',
      backgroundColor : '#000000',

      borderColor : '#484848',
      borderWidth : 5
      

    },
  Background:{
    backgroundColor: '#212121',
      },

    input :{
       
        borderWidth : 2,
        borderColor: 'grey',
        borderRadius : 15,
        height : 40,
        width : 350,
        alignSelf : 'center',
        marginTop : 20,
        alignContent :'center',
        textAlignVertical : 'center',
        paddingHorizontal : 15,
        paddingVertical : 2,
        opacity : 0.7,
      
    
    },  
  card : {
                  
                    fontSize : 30,
                    paddingBottom :50,
                    bottom :10,
                   fontFamily: 'sans-serif-medium',
                   color: '#bdbdbd',
                    position: 'absolute', // child
                   alignSelf: 'center',
                    textShadowColor : '#424242',
                     textShadowRadius : 10,
  }
  })

export default home
  