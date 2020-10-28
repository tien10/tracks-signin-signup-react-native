import React, { useContext, useState } from "react";
import { Button, Input, Text } from "react-native-elements";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Spacer from "../components/Spacer";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);
  console.log("state: ", state);

  // console.log(state);
  return (
    <View style={styles.container}>
      {/* <Text>SignupScreen</Text>
      <Button title="Go to SigninScreen" onPress={() => { navigation.navigate('SigninScreen') }} />
      <Button title="Go to mainFlow" onPress={() => { navigation.navigate('mainFlow') }} /> */}
      <AuthForm
        headerText="Signup"
        errorMessage={state.errorMessage}
        submitButtonText="Signup"
        onSubmit={signup}
      />
      <NavLink
        routeName="SigninScreen"
        text="Already have an account? Sign in instead"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    // header: null
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 10,
    // borderColor: 'red',
    flex: 1,
    justifyContent: "flex-start",
    // marginBottom: 250,
    marginTop: 15,
  },
  errorMessage: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
    marginTop: 15,
  },
  link: {
    color: "blue",
  },
});

export default SignupScreen;
