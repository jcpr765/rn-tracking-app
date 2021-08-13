import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Input, Button } from "react-native-elements";
import Spacer from "./Spacer";
import { Context as LocationContext } from "../context/LocationContext";

const TrackForm = () => {
  const {
    startRecording,
    stopRecording,
    changeName,
    state: { name, recording, locations },
  } = useContext(LocationContext);

  return (
    <>
      <Spacer>
        <Input
          placeholder="Enter Name"
          autoCorrect={false}
          onChangeText={changeName}
          value={name}
        />
      </Spacer>
      {recording ? (
        <Button title="Stop" onPress={stopRecording} />
      ) : (
        <Button title="Start Recording" onPress={startRecording} />
      )}
    </>
  );
};

const styles = StyleSheet.create({});

export default TrackForm;
