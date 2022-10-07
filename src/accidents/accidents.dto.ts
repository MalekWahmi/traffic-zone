import { IsBoolean, IsString, IsInt } from "class-validator";

export class AccidentsDTO {
  @IsInt()
  id: number;

  @IsInt()
  locationId: number;
  @IsInt()
  distance: number;
  @IsBoolean()
  activate: boolean;
}
