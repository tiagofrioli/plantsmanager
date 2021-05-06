export interface EnvironmentsProps{
  key: string;
  title:string;
}

export interface PlantsProps{
  id: string;
  name: string;
  about: string;
  water_tips: string;
  photo: string;
  environments:[string];


}