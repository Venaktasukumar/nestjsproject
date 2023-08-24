import { Delete } from '@nestjs/common';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { User } from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity({ name: 'post' })

export class Post {

  @Field()
  @PrimaryGeneratedColumn('uuid',{name:"post_id"})
  postid: string;
  
  @Field()
  @Column({name:'postname'})
  postname: string;

  @Field(()=>Int)
  @Column({name:'postorder'})
  postorder: string;

  @Field(()=>Date)
  @CreateDateColumn({name:'createddate'})
  createdAt: Date;

  @Field(()=>Date)
  @UpdateDateColumn({name:'updateddate'})
  updatedAt: Date;
  
  @Field(()=>Date)
  @DeleteDateColumn({name:'deleteddate'})
  deletedAt: Date;
  
  @Field()
  @Column({name:'user_id'})
  userId:string

  @Field()
  @ManyToOne(() => User, (user) => user.post)
  @JoinColumn({ name: 'user_id' })
  user: User;

}
