import { Entity, Column, CreateDateColumn, PrimaryColumn, ManyToOne, OneToMany, ManyToMany } from "typeorm";
import {v4 as uuid} from "uuid"
import { Fazenda } from "./Fazendas";

@Entity("cultura")
export class Cultura {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome: string;

  @CreateDateColumn()
  created_at: Date;

  @OneToMany(type => Fazenda, cultura => Cultura)

  @CreateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}
