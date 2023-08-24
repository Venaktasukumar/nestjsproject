import { Injectable, NotFoundException } from '@nestjs/common';
import { BaseRepository } from 'src/database/base.respoitory';
import { DataSource } from 'typeorm';
import { CreateUserInputs } from './dto/create-user.input';
import { User } from './entities/user.entity';

@Injectable()
export class UserRepository extends BaseRepository<User> {
  constructor(private readonly dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  public async createUser(createUserInputs: CreateUserInputs) {
    return this.save({
      fullname: createUserInputs.fullname,
      phonenumber:createUserInputs.phonenumber
    });
  }

  public async getalluser()
  {
    return this.find()
  }

  public async deleteuser(userid:string)
  {
    try{
      const user=await this.findOneBy({userid})
      await this.softDelete(userid)
      return "User deleted  successfully";
    }
    catch(e)
    {
      throw new NotFoundException(`User not found`);
    }
  }
}
