import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";
import { NavigationEvents } from "react-navigation";

const SignupScreen = ({ navigation }) => {
  const { state, signup, clearErrorMessage } = useContext(AuthContext);
  console.log("state signup: ", state);

  // console.log(state);
  return (
    <View style={styles.container}>
      {/* <Text>SignupScreen</Text>
      <Button title="Go to SigninScreen" onPress={() => { navigation.navigate('SigninScreen') }} />
      <Button title="Go to mainFlow" onPress={() => { navigation.navigate('mainFlow') }} /> */}
      <NavigationEvents
        onWillBlur={clearErrorMessage}
        onWillFocus={clearErrorMessage}
        // onDidBlur={clearErrorMessage}
        // onDidFocus={clearErrorMessage}
      />
      {/* <NavigationEvents
        onWillFocus={(payload) => console.log("will focus signup", payload)}
        onDidFocus={(payload) => console.log("did focus signup", payload)}
        onWillBlur={(payload) => console.log("will blur signup", payload)}
        onDidBlur={(payload) => console.log("did blur signup", payload)}
      /> */}
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
      {/* <NavLink routeName="DSPB" text="Go to DSPB" /> */}
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
    // borderColor: "red",
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
