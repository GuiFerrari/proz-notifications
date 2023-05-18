import { v4 as uuid } from 'uuid';
import { Injectable } from '@nestjs/common';

import { CreateNotificationDto } from './dto/create-notification.dto';
import { NotificationsQuery } from './entities/notification.entity';

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

  findAll({ page, limit }: NotificationsQuery) {
    const notificationsSorted = notifications.sort((a, b) => {
      return b.created_at.getTime() - a.created_at.getTime();
    });

    const pageNumber = page ? Number(page) : 1;
    const limitNumber = limit ? Number(limit) : 6;
    const limitNumberIndex = limitNumber !== 0 ? limitNumber : 30;

    const startIndex =
      ((page ? pageNumber : 1) - 1) * (limitNumber !== 0 ? limitNumber : 6);
    const pages = Math.ceil(notifications.length / limitNumberIndex);

    return {
      metadata: {
        page: pageNumber,
        results_per_page: limitNumberIndex,
        results_size: notifications.length,
        results_start: startIndex + 1,
        results_end: startIndex + notifications.length,
        total_pages: pages,
        next_page: startIndex < pages ? pageNumber + 1 : null,
        prev_page: startIndex > 0 ? pageNumber - 1 : null,
      },

      results: notificationsSorted.slice(startIndex, pageNumber * limitNumber),
    };
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
