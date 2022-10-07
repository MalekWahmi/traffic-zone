import { IsBoolean, IsString, IsInt } from "class-validator";

export class LocationsDTO {
  @IsInt()
  id: number;

  @IsString()
  state: string;
  @IsString()
  street: string;
  @IsBoolean()
  activate: boolean;
}
