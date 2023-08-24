/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostInput } from './dto/create-post.input';
import { PostRepository } from './post.repository';

@Injectable()
export class PostService {
  constructor(private readonly postRepo: PostRepository) {}

 public async create(userid: string,createPostInput: CreatePostInput) {
    return this.postRepo.createPost(userid,createPostInput);
  }
  
  public async getallpost()
  {
    return this.postRepo.getallpost()
  }


  public async deletepostbyid(postid:string)
  {
    return this.postRepo.deletepostbyid(postid)
  }

}
