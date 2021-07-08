import { RectButtonProps } from "react-native-gesture-handler";

export interface PlantProps extends RectButtonProps{
  data: Data;
  handleRemove: () => void;
}

export interface Data{
  name: string;
  photo: string;
  hour: string;
}