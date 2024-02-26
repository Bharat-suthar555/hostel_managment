import { Field, ID, ObjectType } from "type-graphql";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseEntity } from "typeorm";
import "reflect-metadata";

@ObjectType()
@Entity({ name:  'users' })
export class User extends BaseEntity{
    @Field(() => ID)
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Field(() => String)
    @Column({type: 'varchar'})
    name: string;

}