import { Controller, Get, Post, Param, Delete, Put } from '@nestjs/common';
import { NotificationsService } from './notifications.service';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create() {
    return this.notificationsService.create();
  }

  @Get()
  findAll() {
    return this.notificationsService.findAll();
  }

  @Put(':id')
  read(@Param('id') id: string) {
    return this.notificationsService.read(id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.notificationsService.remove(id);
  }
}
