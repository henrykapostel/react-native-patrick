import React, { PropTypes, Component } from 'react';
import { Text, View, Image, StatusBar } from 'react-native';
import { default as styles} from './styles';

class ProfileView extends Component {
    static propTypes = {
        resetToScene: PropTypes.func,
    };

    constructor(props, context) {
        super(props, context);

        StatusBar.setHidden(false);
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={{ fontSize: 50, marginBottom: 100}}>ProfileView</Text>
            </View>
        );
    }
}

export default ProfileView;
