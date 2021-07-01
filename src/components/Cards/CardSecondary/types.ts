import { RectButtonProps } from "react-native-gesture-handler";

export interface PlantProps extends RectButtonProps{
  data: Data;
 
}

export interface Data{
  name: string;
  photo: string;
  hour: string;
}