import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private readonly userService: UsersService, private readonly jwtService: JwtService){}

    async login(user) {
        const payload = { sub: user.id, username: user.username}

        return{
            token: this.jwtService.sign(payload)
        }
    }

    async validateUser(username: string, password: string){
        let user
        try{
            user = await this.userService.findOne(username);
            console.log(user)

        } catch (error) {
            return null
        }

        const isPasswordValid = password == user.password;

        if(!isPasswordValid) return null

        return user
    }
}