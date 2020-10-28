import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { Context as AuthContext } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = ({ navigation }) => {
  const { state, signin } = useContext(AuthContext);
  console.log("state: ", state);

  // console.log(state);
  return (
    <View style={styles.container}>
      {/* <Text>SignupScreen</Text>
      <Button title="Go to SigninScreen" onPress={() => { navigation.navigate('SigninScreen') }} />
      <Button title="Go to mainFlow" onPress={() => { navigation.navigate('mainFlow') }} /> */}
      <AuthForm
        headerText="Signin"
        errorMessage={state.errorMessage}
        submitButtonText="Signin"
        onSubmit={signin}
      />
      <NavLink
        routeName="SignupScreen"
        text="Dont have an account? Sign up instead"
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
