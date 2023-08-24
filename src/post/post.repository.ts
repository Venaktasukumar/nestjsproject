import { Injectable } from '@nestjs/common/decorators';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreatePostInput } from './dto/create-post.input';
import { Post } from './entities/post.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class PostRepository extends BaseRepository<Post> {
  constructor(private readonly dataSource: DataSource) {
    super(Post, dataSource.createEntityManager());
  }


  public async createPost(userid:string,createPostInput: CreatePostInput) {
    return this.save({
      postname: createPostInput.postName,
      userId: userid,
      postorder:createPostInput.postorder
    });
  }
   
  public async getallpost()
  {
    return this.find()
  }
   
  public async deletepostbyid(postid:string)
  {
    try{
      const post=await this.findOneBy({postid})
       await this.softDelete(postid)
       return "Post deleted successfully"

    }
    catch(e)
    {
      throw new NotFoundException(`post id is not found`);
    }
  }
}
