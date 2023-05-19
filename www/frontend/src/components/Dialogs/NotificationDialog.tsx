"use client";

import React from "react";

import { Dialog } from "@/components/Bases/Dialog";
import { NotificationTitle } from "@/components/Notifications/NotificationTitle";
import { NotificationFooter } from "@/components/Notifications/NotificationFooter";

import { useNotifications } from "@/hooks/useNotifications";
import { NotificationDialogProps } from "@/interfaces";

export function NotificationDialog({
  isOpen,
  setIsOpen
}: NotificationDialogProps) {
  const { notificationsOpen, closeDialog } = useNotifications()

  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="pt-4 px-4">
        <NotificationTitle notification={notificationsOpen!} closeButtonAction={closeDialog} />

        <p className="font-bold text-sm tracking-wide opacity-60 pb-4">
          {notificationsOpen?.description}
        </p>
      </div>
      

      <NotificationFooter buttonText="Fechar" buttonAction={closeDialog} />
    </Dialog>
  );
};
