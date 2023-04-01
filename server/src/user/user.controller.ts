import { Body, Controller, Get, Post } from '@nestjs/common';
import { SignupDto } from './dto/signup.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private usersService: UserService) {}
  @Get()
  getUserList() {
    return this.usersService.getUserList();
  }
  @Post('signup')
  signUp(@Body() signupDto: SignupDto) {
    return this.usersService.createUser(signupDto);
  }
}
