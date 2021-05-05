import { RectButtonProps } from "react-native-gesture-handler";

export interface EnviromentProps extends RectButtonProps{
  title: string;
  active?: boolean;
}