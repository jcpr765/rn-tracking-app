import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { NavigationEvents } from "react-navigation";
import { View, StyleSheet } from "react-native";
import AuthForm from "../components/AuthForm";
import NavLink from "../components/NavLink";

const SigninScreen = () => {
  const { state, signin, clearErrorMessage } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <NavigationEvents onWillFocus={clearErrorMessage} />
      <AuthForm
        headerText="Sign In to Your Account"
        buttonText="Sign In"
        errorMessage={state.errorMessage}
        onSubmit={signin}
      />
      <NavLink
        routeName="Signup"
        linkText="Don't have an account? Go back to sign up."
      />
    </View>
  );
};

SigninScreen.navigationOptions = () => {
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

export default SigninScreen;
