import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { locationsEntity } from "./locations.entity";

@Entity({ name: "accidents" })
export class accidentEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;
  // @OneToOne(() => locationsEntity, (locations) => locations.id) // specify inverse side as a second parameter
  // @JoinColumn()
  locationId: number;
  distance: number;

  @Column()
  activate: boolean;
}
