import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import COLORS from "../constants/colors";

const Login = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <View style={{ flex: 1, marginHorizontal: 22 }}>
        <Text
          style={{
            fontSize: 40,
            fontWeight: 500,
            color: COLORS.black,
            marginView: 12,
          }}
        >
          Log In
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Login;
