import React from "react";
import { Button, Text } from "react-native";

const TrackListScreen = ({ navigation }) => {
  return (
    <>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to TrackDetailScreen"
        onPress={() => {
          navigation.navigate("TrackDetailScreen");
        }}
      />
    </>
  );
};

export default TrackListScreen;
