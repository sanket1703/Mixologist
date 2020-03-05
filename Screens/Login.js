import React, { Component } from "react";
import { GoogleSignin, GoogleSigninButton ,statusCodes} from 'react-native-google-signin';
import { 
    Text,
    View,
    StyleSheet,
    Alert,
    Button,Image
    
} from "react-native";


class Login extends Component {

  static navigationOptions = {
    drawerLabel : 'Home',
    drawerIcon : ({tintColor})=>(

      <Image source = {require('/Users/apple/Mixo/Assets/purp.jpg')}></Image>
    ),
 
   headerStyle: {
    backgroundColor: '#212121',
  },
  };
    
    state = {
        userInfo: null,
        error: null,
      };

    async componentDidMount() {
        this._configureGoogleSignIn();
        await this._getCurrentUser();
      }
    
      _configureGoogleSignIn() {
        GoogleSignin.configure({
          webClientId: "20745865138-0ksj94qobumht2plk99uee2n1a6736d2.apps.googleusercontent.com",
          offlineAccess: false,
        });
      }
      _signOut = async () => {
        try {
          await GoogleSignin.revokeAccess();
          await GoogleSignin.signOut();
    
          this.setState({ userInfo: null, error: null });
        } catch (error) {
          this.setState({
            error,
          });
        }
      };
    
    renderIsSignedIn() {
        return (
          
          
          <Button
            onPress={async () => {

              const isSignedIn = await GoogleSignin.isSignedIn();
              Alert.alert(String(isSignedIn));
            }}
            title="is user signed in?"
          />
        );
      }
    

      _signIn = async () => {
        try {
          await GoogleSignin.hasPlayServices();
          const userInfo = await GoogleSignin.signIn();
          await GoogleSignin.revokeAccess();
            console.log('Success',userInfo);
            const {navigate} = this.props.navigation;
            navigate('home', {name: 'home'})
        } catch (error) {
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
            // sign in was cancelled
            Alert.alert('cancelled');
          } else if (error.code === statusCodes.IN_PROGRESS) {
            // operation in progress already
            Alert.alert('in progress');
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            Alert.alert('play services not available or outdated');
          } else {
            console.log('Something went wrong', error.toString());
            Alert.alert('Something went wrong', error.toString());
            this.setState({
              error,
            });
          }
        }
      };
    render() {
        const { userInfo } = this.state;
        const body = userInfo ? this.renderUserInfo(userInfo) : this.renderSignInButton();
        return (
            
            <View style={styles.Background}>
            

 
            <Text style = {styles.txt}>Mixologist</Text>
           
              <GoogleSigninButton
        style={styles.button}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Light}
        onPress={this._signIn}/>
        
        
            
            </View>
        )
    }

renderIsSignedIn() {
    return (
      <Button
        onPress={async () => {
          const isSignedIn = await GoogleSignin.isSignedIn();
          Alert.alert(String(isSignedIn));
          const {navigate} = this.props.navigation;
          navigate('home', {name: 'home'})
        }}
        title="is user signed in?"
      />
    );
  }

  renderGetCurrentUser() {
    return (
      <Button
        onPress={async () => {
          const userInfo = await GoogleSignin.getCurrentUser();
          Alert.alert('current user', userInfo ? JSON.stringify(userInfo.user) : 'null');
        }}
        title="get current user"
      />
    );
  }

  renderGetTokens() {
    return (
      <Button
        onPress={async () => {
          const isSignedIn = await GoogleSignin.getTokens();
          Alert.alert('tokens', JSON.stringify(isSignedIn));
        }}
        title="get tokens"
      />
    );
  }

  renderUserInfo(userInfo) {
    return (
      <View style={styles.container}>
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 20 }}>
          Welcome {userInfo.user.name}
        </Text>
        <Text>Your user info: {JSON.stringify(userInfo.user)}</Text>
        <TokenClearingView userInfo={userInfo} />

        <Button onPress={this._signOut} title="Log out" />
        {this.renderError()}
      </View>
    );
  }

  renderSignInButton() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Auto}
          onPress={this._signIn}
        />
      
      </View>
    );
  }

  renderError() {
    const { error } = this.state;
    if (!error) {
      return null;
    }
    const text = `${error.toString()} ${error.code ? error.code : ''}`;
    return <Text>{text}</Text>;
  }
}
export default Login;

const styles = StyleSheet.create({
  scrollcontainer : {
      flex : 1
  },
  container:{
    flex : 1,
    flexDirection : 'row',
    flexWrap : 'wrap',
    padding : 2
  },
  txt : {
   
    fontSize : 40,
    fontStyle : 'italic',
    fontFamily : 'sans-serif-thin',
    color : '#bdbdbd',
    marginLeft : 67,
    marginTop : 250,
    textShadowColor : '#8e24aa',
  textShadowRadius : 15

  },
  box1:{
    borderBottomLeftRadius : 20,
    borderTopRightRadius : 20,
    
    margin : 20,
    marginTop : 50,
    height: 200,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor : '#000000',
    flex :1,
    borderColor : '#484848',
    borderWidth : 10
    

  },
Background:{
  backgroundColor: '#212121',
  height : 1000
},
button : {
  height : 50,
  width : 250,
  margin : 55,
  marginTop : 200
  
  //borderRadius : 100

  
  

},
buttoncol :{
  color : '#ffffff'
}
})
