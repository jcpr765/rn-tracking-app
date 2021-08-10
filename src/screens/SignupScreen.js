import React, { useContext } from "react";
import { Context as AuthContext } from "../context/AuthContext";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text } from "react-native-elements";
import Spacer from "../components/Spacer";
import AuthForm from "../components/AuthForm";

const SignupScreen = ({ navigation }) => {
  const { state, signup } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up for Tracker"
        buttonText="Sign Up"
        errorMessage={state.errorMessage}
        onSubmit={signup}
      />
      <TouchableOpacity onPress={() => navigation.navigate("Signin")}>
        <Spacer>
          <Text style={styles.link}>
            Already have an account? Sign in instead
          </Text>
        </Spacer>
      </TouchableOpacity>
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
  link: {
    color: "blue",
  },
});

export default SignupScreen;
