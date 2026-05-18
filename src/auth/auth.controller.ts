import { Controller, Post, Body, Get, Query } from '@nestjs/common';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('challenge')
  @ApiOperation({ summary: 'Get a challenge message to sign with your Stellar keypair' })
  getChallenge(@Query('address') address: string) {
    return { challenge: this.authService.getChallenge(address) };
  }

  @Post('login')
  @ApiOperation({ summary: 'Login with a signed Stellar challenge' })
  login(@Body() dto: LoginDto) {
    return this.authService.login(dto.stellarAddress, dto.signature, dto.message);
  }
}
