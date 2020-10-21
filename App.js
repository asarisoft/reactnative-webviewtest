/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Dimensions,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { WebView } from 'react-native-webview';


const App: () => React$Node = () => {
  return (
    <>
      <WebView
        source={{ uri: 'https://netpolitan-eval.percipio.com/courses/6b68cf67-439e-477f-9bdd-3d5e3df91b15?preventAppDownload=true&chromeless=true' }}
        style={{ marginTop: 20,
          width: Dimensions.get('window').width,
          flex: 1 
        }}
      />
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  webview: {
    flex: 1,
    backgroundColor: 'red'
  },
  body: {
    backgroundColor: Colors.white,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default App;
