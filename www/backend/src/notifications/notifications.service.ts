import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

import { CreateNotificationDto } from './dto/create-notification.dto';

let notifications: CreateNotificationDto[] = [];

@Injectable()
export class NotificationsService {
  create() {
    const notification: CreateNotificationDto = {
      id: uuid(),
      title: `Proz | Comunidado sobre nova unidade ${notifications.length + 1}`,
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. --- Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do “eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      readed: false,
      created_at: new Date(),
    };

    notifications.push(notification);

    return notifications;
  }

  read(id: string) {
    const novoArray = notifications.map((notification) => {
      if (notification.id === id) {
        return { ...notification, readed: true };
      }

      return notification;
    });

    notifications = novoArray;

    return novoArray;
  }

  findAll() {
    return notifications.sort((a, b) => {
      return b.created_at.getTime() - a.created_at.getTime();
    });
  }

  remove(id: string) {
    const indice = notifications.findIndex(
      (notification) => notification.id === id,
    );

    if (indice !== -1) {
      notifications.splice(indice, 1);
    }

    return notifications;
  }
}
