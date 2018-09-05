import React from 'react';
import PropTypes from 'prop-types';
import {
  StyleSheet,
  View
} from 'react-native';
import {Font} from 'expo';
import BlankView from '../../components/BlankView/BlankView.react';
import Logo from '../../components/Logo/Logo.react';
import SignIn from './SignIn/SignIn.react';

export default class Auth extends React.Component {

  static navigationOptions = {
    headerStyle: {
      height: 0
    }
  }

  static propTypes = {
    navigation: PropTypes.object.isRequired
  }

  state = {
    isReady: false
  };

  async componentDidMount() {
    await Font.loadAsync({
      'pacifico': require('../../assets/fonts/Pacifico-Regular.ttf')
    });
    this.setState({isReady: true});
  }

  render() {
    if (!this.state.isReady) {
      return <BlankView />;
    }
    return (
      <View style={styles.container}>
        <Logo />
        <SignIn navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#5f4b8b',
    flex: 1,
    justifyContent: 'center',
  }
});