import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinColumn,
  OneToMany,
} from "typeorm";
import { accidentEntity } from "./accidents.entity.";

@Entity({ name: "locations" })
export class locationsEntity {
  @PrimaryGeneratedColumn({ type: "bigint" })
  id: number;
  @OneToMany(() => accidentEntity, (accident) => accident.id) // specify inverse side as a second parameter;
  @JoinColumn()
  accidentId: number;
  @Column()
  state: string;
  @Column()
  street: string;
  @Column()
  activate: boolean;
}
