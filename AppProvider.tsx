import RootNavigator from "@/Navigators/RootNavigator";
import React from "react";
import { View } from "react-native";

// import { Container } from './styles';

const AppProvider: React.FC = () => {
  return <RootNavigator />;
};

export default AppProvider;
