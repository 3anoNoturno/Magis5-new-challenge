import { AuthGuard } from "@nestjs/passport";
import { AuthService } from './auth.service'
import { Controller, Req, UseGuards, Post } from "@nestjs/common";

@Controller('/auth')
export class AuthController{
    constructor(private readonly authService: AuthService){}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Req() req:any){
        return await this.authService.login(req.user)
    }
}