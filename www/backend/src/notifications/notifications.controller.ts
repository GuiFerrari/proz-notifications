import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Put,
  Query,
} from '@nestjs/common';
import { NotificationsService } from './notifications.service';
import { NotificationsQuery } from './entities/notification.entity';

@Controller('notifications')
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) {}

  @Post()
  create() {
    return this.notificationsService.create();
  }

  @Get()
  findAll(@Query() query: NotificationsQuery) {
    return this.notificationsService.findAll(query);
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
