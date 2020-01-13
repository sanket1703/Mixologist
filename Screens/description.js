import React, { Component } from "react";
import StarRating from 'react-native-star-rating';
import { 
    View,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    Image,
    ImageBackground
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";



//import data from '/Users/apple/Mixo/Assets/data.json'
const images = [

  require('/Users/apple/Mixo/Assets/blue.jpg'),
  require('/Users/apple/Mixo/Assets/mojito1.jpg')
  
]

class description extends Component {

  static navigationOptions = {
    title : 'Description',
    headerStyle :{
    backgroundColor : '#424242',
   
    }
    ,
    headerTitleStyle:{
      color : '#bdbdbd',
      fontWeight : 'bold',
      fontFamily : 'sans-serif-condensed'
    }
  };

    constructor(props){
        super(props);
        this.state = {
        data : this.props.navigation.state.params.data,
       // image :this.props.navigation.state.params.images[0] ,
       // i : this.props.navigation.state.params.i
        }
   
    }


    navigate = () => {
        const {navigate} = this.props.navigation;
              navigate('test', {name: 'test'})
      }
    render() {
        return (
         
            <View style = {styles.Background}>
               <ScrollView style = {styles.scrollcontainer}>
               
              <View style = {styles.view}>
            <ImageBackground source = {images[this.state.data.index]}
              style = {styles.image}
              
              ></ImageBackground>

              </View>
              <Text style = {styles.title}>{this.state.data.title}</Text>
              <View style = {{ flexDirection : 'row',alignSelf : 'center',paddingTop : 20}}>   
              <Text style = {{color : 'grey',paddingRight : 8}}>
                {this.state.data.rating}
              </Text>     
              <StarRating
              maxstars = {5}
              rating={this.state.data.rating}
              fullStarColor = 'grey'
              starSize = {22}
              >

              </StarRating>

             
             
              </View>
              
              <Text  style = {styles.text}>{this.state.data.description}</Text>
             
              <View style = {{flexDirection : 'row' , alignSelf :'center'}}>
              <Text style = {{color: 'grey',paddingTop : 13}}>
                $
              </Text>
        <Text style = {{color : 'grey',fontSize: 40 }}>{this.state.data.price}</Text>
              </View>
      <View style = {{paddingTop : 20}}>
            <TouchableOpacity style = {styles.button}
            >
                
                <Text  style = {styles.textButt}>
                  MIX IT NOW
                </Text>
             
               
              </TouchableOpacity>
              </View>
    </ScrollView>
               </View>
              
        );
    }
}
export default description;

const styles = StyleSheet.create({
    scrollcontainer : {
        flex : 1,
        color : 'black'
    },
    container:{
      flex : 1,
     flexDirection : 'row',
     flexWrap : 'wrap',
      padding : 2
    },
    box1:{
      borderBottomLeftRadius : 20,
      borderTopRightRadius : 20,
      margin : 20,
      marginTop : 20,
      height: 200,

      justifyContent:'center',
      alignItems:'center',
      backgroundColor : '#000000',
      flex :1,
      borderColor : '#484848',
      borderWidth : 5
      

    },
  Background:{
    backgroundColor: '#000000',
    flex :1
  },
  image :{
        
       marginStart : 50,
        resizeMode : 'cover',
        paddingTop : 50,
        height : 300
  },
  text:{
    paddingTop : 20,
    color : 'white',
    paddingStart : 15,
    paddingEnd : 15

  },
  view :{
      paddingTop: 50,
      width : 300,
      height : 300,
    
  },
  title : {
    color : 'white',
    alignSelf : 'center',
    paddingTop: 50,
    fontSize : 20,
    fontFamily : 'sans-serif-light'
  },
  button : {
    
    borderColor : 'white',
    borderWidth : 2,
    width : 200,
    height :50,
    alignSelf : 'center',
    borderRadius : 30,
    opacity : .7
    
  },
  textButt : {
        color : 'white',
        alignSelf : 'center',
        opacity : 0.8,
        textAlignVertical : 'center',
        fontSize : 20,
        paddingTop : 4
  }
  })
