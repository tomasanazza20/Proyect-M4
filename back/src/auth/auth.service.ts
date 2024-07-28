import { Injectable } from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { UsersService } from 'src/users/users.service';
import { SingInAuthDto } from './dto/singin.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService){}

  singIn(credentials:SingInAuthDto){
    const user = this.userService.findOneByEmail(credentials.email)
    if(user && user.password===credentials.password){
      return 'you are logged in';
    }
    return 'Email or password is incorrect, please try again';
  }


  create(createAuthDto: CreateAuthDto) {
    return 'This action adds a new auth';
  }

  findAll() {
    return `This action returns all auth`;
  }

  findOne(id: number) {
    return `This action returns a #${id} auth`;
  }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }
}
