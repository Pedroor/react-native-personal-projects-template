import { ProfileStack } from "@/Navigators/Stacks/ProfileStack";
import EditProfile from "@/Screens/Profile/EditProfile";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";

const ProfileNavigator: React.FC = () => {
  const Stack = createNativeStackNavigator<ProfileStack>();

  return (
    <Stack.Navigator>
      <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  );
};

export default ProfileNavigator;
