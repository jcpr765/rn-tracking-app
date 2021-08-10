import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SignupScreen = () => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        buttonText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <NavLink
        routeName="Signin"
        linkText="Already have an account? Sign in instead"
      />
    </View>
  );
};

SignupScreen.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1,
    marginBottom: 250,
  },
});

export default SignupScreen;
