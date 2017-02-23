import React, { PropTypes, Component } from 'react';
import { TextInput, View, StatusBar, Text, TouchableHighlight} from 'react-native';
import styles from './styles';
import _, { isEqual } from 'lodash';
import { RegisterScene } from 'AppScenes';

class LoginScene extends Component {
  static propTypes = {
    pushScene: PropTypes.func.isRequired,
  };

  constructor(props, context) {
    super(props, context);

    StatusBar.setHidden(false);
  }

  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.topLabel}>ALREADY A MEMBER?</Text>
        <TextInput style={styles.inputEmail} fontSize={17} placeholder="Email" placeholderTextColor="#999" />
        <TextInput
          style={styles.inputEmail}
          fontSize={17}
          placeholder="Password"
          placeholderTextColor="#999"
          secureTextEntry={true}
        />
        <Text style={styles.forgotLabel}>Forgot your password?</Text>
        <View style={{ flexDirection: 'row', marginTop: 5, alignSelf: 'flex-end' }}>
          <TouchableHighlight
            onPress={() => {this.props.pushScene(RegisterScene)}}
            style={{ marginRight: 10 }}
            underlayColor="#bde7ff" >
            <Text style={styles.btnLogin}>REGISTER</Text>
          </TouchableHighlight>

          <TouchableHighlight
            onPress={() => {}}
            underlayColor="#bde7ff" >
            <Text style={styles.btnLogin}>LOGIN</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default LoginScene;
