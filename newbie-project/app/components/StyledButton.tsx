import React from "react";
import { TouchableOpacity, Text, StyleSheet, Dimensions } from "react-native";

interface StyledButtonProps {
  title: string;
  onPress?: () => void;
}

export const StyledButton: React.FC<StyledButtonProps> = ({
  title,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const { width } = Dimensions.get("window");
const buttonWidth = Math.min(width - 40, 400);

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#446388",
    borderRadius: 15,
    paddingHorizontal: 24,
    paddingVertical: 16,
    width: buttonWidth,
    alignSelf: "center",
    minHeight: 52,
    justifyContent: "center",
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: width < 375 ? 14 : 16,
    textAlign: "center",
    fontFamily: "System",
    fontWeight: "600",
  },
});
