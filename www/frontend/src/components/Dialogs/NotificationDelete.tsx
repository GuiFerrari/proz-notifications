"use client";

import React from "react";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';

import { Dialog } from "@/components/Bases/Dialog";
import { Button } from "@/components/Bases/Button";

import { NotificationDialogProps } from "@/interfaces";
import { useNotifications } from "@/hooks/useNotifications";

export function NotificationDelete({
  isOpen,
  setIsOpen
}: NotificationDialogProps) {
  const { closeDeleteDialog, deleteNotification } = useNotifications()

  return (
    <Dialog isOpen={isOpen} setIsOpen={setIsOpen}>
      <div className="flex flex-col justify-center items-center gap-2">
        <ExclamationTriangleIcon className="w-16 text-orange-600" />

        <span className="italic opacity-80 font-medium text-2xl">Excluir mensagem</span>
        <span className="opacity-80 font-light text-base">Deseja realmente excluir a mensagem?</span>
      </div>

      <div className="flex justify-center items-center gap-4 pt-6">
        <Button size="full" buttonText="Não" buttonAction={closeDeleteDialog}/>
        <Button variant="delete" size="full" buttonText="Sim" buttonAction={deleteNotification}/>
      </div>
    </Dialog>
  );
};
