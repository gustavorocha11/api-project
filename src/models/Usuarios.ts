import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import {v4 as uuid} from "uuid"

@Entity("usuario")
export class Usuario {
  
  @PrimaryColumn()
  readonly id: string;

  @Column()
  nome: string;

  @Column()
  email: string;
  isUnique: true
  
  @Column()
  senha: string;

  @Column()
  admin: boolean;

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
