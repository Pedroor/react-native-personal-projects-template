import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { AuthenticatedStack } from "../Stacks/AuthenticatedStack";
import ProfileNavigator from "./ProfileNavigator";

const AuthenticatedNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator<AuthenticatedStack>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileNavigator" component={ProfileNavigator} />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
