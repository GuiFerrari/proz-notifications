"use client";

import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import {
  BellIcon,
  AcademicCapIcon,
  CheckIcon,
  ChevronRightIcon
} from '@heroicons/react/20/solid';
import { NotificationTitle } from './Notifications/NotificationTitle';
import { NotificationFooter } from './Notifications/NotificationFooter';

export function NotificationsDropdown() {
  const [bookmarksChecked, setBookmarksChecked] = React.useState(true);
  const [urlsChecked, setUrlsChecked] = React.useState(false);
  const [person, setPerson] = React.useState('pedro');

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button
          className="bg-white h-6 w-6 flex justify-center items-center rounded-full relative"
          aria-label="Customise options"
        >
          <BellIcon className="h-5 w-5 text-purple-800" />
          <div className="absolute -top-1 -right-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
            </span>
          </div>
        </button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal>
        <DropdownMenu.Content
          className="min-w-[220px] bg-white rounded-lg shadow-xl pt-4"
          sideOffset={5}
          align='end'
        >
          <DropdownMenu.Item className="px-4">
            <NotificationTitle />
          </DropdownMenu.Item>
          
          <DropdownMenu.Item className="px-4">
            <NotificationTitle />
          </DropdownMenu.Item>
          
          <DropdownMenu.Item className="px-4">
            <NotificationTitle />
          </DropdownMenu.Item>
          
          <DropdownMenu.Item className="px-4">
            <NotificationTitle />
          </DropdownMenu.Item>
          
          <DropdownMenu.Item className="px-4">
            <NotificationTitle />
          </DropdownMenu.Item>
          
          <DropdownMenu.Item>
            <NotificationFooter />
          </DropdownMenu.Item>

          <DropdownMenu.Arrow className="fill-white" />
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
};
