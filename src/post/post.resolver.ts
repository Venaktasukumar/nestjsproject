import { Resolver, Mutation, Args ,Query} from '@nestjs/graphql';
import { PostService } from './post.service';
import { Post } from './entities/post.entity';
import { CreatePostInput } from './dto/create-post.input';
// import { Query } from '@nestjs/common';

@Resolver(() => Post)
export class PostResolver {
  constructor(private readonly postService: PostService) {}

  @Mutation(() => Post)
  public async createPost(@Args('userid') userid:string,
    @Args('createPostInput') createPostInput: CreatePostInput) {
    return this.postService.create(userid,createPostInput);
  }
  
  @Mutation(()=>String)
  public async deletepostbyid(@Args("postid") postid:string)
  {
    return this.postService.deletepostbyid(postid)
  }

   @Query(()=>[Post])
   public async getallpost()
   {
    return this.postService.getallpost();
   }
}
