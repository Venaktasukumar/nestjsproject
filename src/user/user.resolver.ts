import { Args, Mutation, Resolver, Query } from '@nestjs/graphql';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';
import { UserService } from './user.service';

@Resolver()
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  @Mutation(() => User)
  public async createUser(
    @Args('createUserInputs') createUserInputs: CreateUserInputs,
  ) {
    return this.userService.createUser(createUserInputs);
  }

  @Mutation(()=>String)
  public async deleteuser(@Args('userid') userid:string)
  {
      return this.userService.deleteuser(userid)
  }


  @Query(()=>[User])
  public async getalluser()
  {
    return this.userService.getalluser()
  }


  
}
