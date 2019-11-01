import { Controller, Get, Header, Param, NotFoundException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  // @Header('Content-Type', 'text/html')
  // getHello(): string {
  //   return this.appService.getHello();
  getHello(): {name: string} {
    return {name: 'Danish'};
  }

  @Get(':id')
  @Header('Content-Type', 'application/json')
  getProduct(@Param('id') id: string) {
    // return id;
    throw new NotFoundException(id);
  }
}
