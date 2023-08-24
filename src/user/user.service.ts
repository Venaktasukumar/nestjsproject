import { Injectable } from '@nestjs/common';
import { CreateUserInputs } from './dto/create-user.input';
import { UserRepository } from './user.repository';

@Injectable()
export class UserService {
  constructor(private readonly userRepo: UserRepository) {}

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.userRepo.createUser(createUserInputs);
  }

public async getalluser()
{
  return this.userRepo.getalluser()
}

public async deleteuser(userid:string)
{
  return this.userRepo.deleteuser(userid)
}

}
