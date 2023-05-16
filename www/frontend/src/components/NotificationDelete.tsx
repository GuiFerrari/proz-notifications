"use client";

import React, { Fragment } from "react";
import { Transition } from "@headlessui/react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline';
import { clsx } from "clsx";

import { Button } from "./Default/Button";

import { NotificationDialogProps } from "@/interfaces";

export function NotificationDelete({
  isOpen,
  setIsOpen
}: NotificationDialogProps) {
  return (
    <DialogPrimitive.Root open={isOpen} onOpenChange={setIsOpen}>
      <DialogPrimitive.Portal forceMount>
        <Transition.Root show={isOpen}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <DialogPrimitive.Overlay
              forceMount
              className="fixed inset-0 z-20 bg-black/50"
            />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPrimitive.Content
              forceMount
              className={clsx(
                "fixed z-50",
                "w-[95vw] max-w-[31rem] rounded-lg p-4 md:w-full",
                "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
                "bg-white"
              )}
            >

              <div className="flex flex-col justify-center items-center gap-2">
                <ExclamationTriangleIcon className="w-16 text-orange-600" />

                <span className="italic opacity-80 font-medium text-2xl">Excluir mensagem</span>
                <span className="opacity-80 font-light text-base">Deseja realmente excluir a mensagem?</span>
              </div>

              <div className="flex justify-center items-center gap-4 pt-6">
                <Button size="full" buttonText="Não" buttonAction={() => {}}/>
                <Button variant="delete" size="full" buttonText="Sim" buttonAction={() => {}}/>
              </div>
              

            </DialogPrimitive.Content>
          </Transition.Child>
        </Transition.Root>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};
