import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import iconHome from './icon/home.png';
import iconHomeActive from './icon/home-active.png';
import iconOrder from './icon/order.png';
import iconHelp from './icon/help.png';
import iconInbox from './icon/inbox.png';
import iconAccount from './icon/account.png';

export default class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={{flex: 1, backgroundColor: 'pink'}}>
          <Text>Clone Gojek App !</Text>
        </View>
        <View
          style={{
            height: 54,
            backgroundColor: 'white',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{width: 26, height: 26}}
              source={iconHomeActive}></Image>

            <Text
              style={{
                fontSize: 10,
                color: '#545454',
                color: '#43AB4A',
                marginTop: 4,
              }}>
              Home
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 26, height: 26}} source={iconOrder}></Image>

            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Order
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 26, height: 26}} source={iconHelp}></Image>

            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Help
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 26, height: 26}} source={iconInbox}></Image>

            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Inbox
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image style={{width: 26, height: 26}} source={iconAccount}></Image>

            <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
              Account
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
