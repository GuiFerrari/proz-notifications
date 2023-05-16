"use client";

import React, { Fragment } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { BellIcon, EnvelopeIcon } from '@heroicons/react/20/solid';

import { NotificationTitle } from './Notifications/NotificationTitle';
import { NotificationFooter } from './Notifications/NotificationFooter';

import { useNotifications } from '@/hooks/useNotifications';

export function NotificationsDropdown() {
  const { notificationsCount, notificationsList } = useNotifications()

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="bg-white h-6 w-6 flex justify-center items-center rounded-full relative"
          aria-label="Customise options"
        >
          <BellIcon className="h-5 w-5 text-purple-800" />

          {notificationsCount > 0 && (
            <div className="absolute -top-1 -right-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
              </span>
            </div>
          )}
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-lg shadow-xl pt-4"
          sideOffset={5}
          align='end'
        >

          {notificationsCount > 0 ? (
            <Fragment>
              {notificationsList.map(notification => (
                <DropdownMenu.Item key={notification.id} className="px-4 border-none">
                  <NotificationTitle withoutCloseIcon />
                </DropdownMenu.Item>
              ))}

              <DropdownMenu.Item>
                <NotificationFooter buttonText='Ver todas' />
              </DropdownMenu.Item>
            </Fragment>
          ) : (
            <div className="flex justify-center items-center p-4 pt-0 gap-2">
              <EnvelopeIcon className="w-5 text-purple-300" />
              <span className="font-bold opacity-60 text-base tracking-wide">
                Não há nenhuma nova notificação
              </span>
            </div>
          )}

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
