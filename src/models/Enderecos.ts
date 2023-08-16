import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("endereco")
export class Endereco {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  cidade: string;

  @Column()
  estado: string;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid()
    }
  }
}
