import { TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

export interface EnviromentProps{
  title?: string;
  active?: boolean;
  onPress?: () => void;
}

