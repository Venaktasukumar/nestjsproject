import { ObjectType, Field } from '@nestjs/graphql';
import { Post } from 'src/post/entities/post.entity';
import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

@ObjectType()
@Entity({ name: 'users' })
export class User {
  @Field()
  @PrimaryGeneratedColumn('uuid',{name:"user_id"})
  userid: string;

  @Field()
  @Column({name:"username"})
  fullname: string;

  @Field()
  @Column({name:"phonenumber"})
  phonenumber: string;

  @Field(()=>Date)
  @CreateDateColumn({name:'createddate'})
  createdAt: Date;

  @Field(()=>Date)
  @UpdateDateColumn({name:'updateddate'})
  updatedAt: Date;
  
  @Field()
  @DeleteDateColumn({name:'deleteddate'})
  deletedAt: Date;
  
  @Field(() => [Post], {nullable:true})
  @OneToMany(() => Post, (post) => post.user)
  post: Post[];

}
