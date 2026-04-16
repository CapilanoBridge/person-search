// component/mutable-dialog.tsx

'use client';

import React from 'react';
import { useState, useEffect } from 'react';
import { useForm, UseFormReturn, FieldValues, DefaultValues } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { toast } from "../hooks/use-toast"; // Using shadcn toast hook for notifications.
import { ZodType } from 'zod';

export interface ActionState <T>{
    success: boolean;
    message: string | null;
    data?: T;
  }
interface GenericDialogProps<T extends FieldValues> {
  formSchema: ZodType<T>;
  FormComponent: React.ComponentType<{ form: UseFormReturn<T> }>;
  action?: (data: T) => Promise<ActionState<T>>;
  triggerButtonLabel?: string;
  addDialogTitle?: string;
  editDialogTitle?: string;
  dialogDescription?: string;
  submitButtonLabel?: string;
  defaultValues?: DefaultValues<T>; // If present, this will indicate edit mode
}

export default function MutableDialog<T extends FieldValues>({
  formSchema,
  FormComponent,
  action, 
  defaultValues,
  triggerButtonLabel = defaultValues ? 'Edit' : 'Add',
  addDialogTitle = 'Add',
  editDialogTitle = 'Edit',
  dialogDescription = defaultValues ? 'Make changes to your item here. Click save when you\'re done.' : 'Fill out the form below to add a new item.',
  submitButtonLabel = defaultValues ? 'Save' : 'Add',
}: GenericDialogProps<T>) {
  const [open, setOpen] = useState(false);

  const form = useForm<T>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues,
  });

  // Reset the form when the dialog is closed
  useEffect(() => {
    if (!open) {
      form.reset();
    }
  }, [open, form]);

  async function handleSubmit(data: T) {
    if (!action) {
      throw new Error("No action function provided");
    }

    console.log('calling submit');
    const actions = await action(data);  // Call the provided action directly

    console.log('actions:', actions);

    if (actions.success) {
      const toastMessage = actions.message;
      console.log('toastMessage:', toastMessage);
      toast({
        title: "Success",
        description: toastMessage,
        variant: "default",
      });
    } else {
      const toastMessage = actions.message;
      console.log('toastMessage:', toastMessage);
      toast({
        title: "Error",
        description: toastMessage || "Failed to add User",
        variant: "destructive",
      });
    }
    setOpen(false);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-900 font-bold px-6 py-2 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105">
          {triggerButtonLabel}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-slate-900 to-slate-800 border border-blue-500/30 backdrop-blur-sm">
        <DialogHeader>
          <DialogTitle className="text-slate-100">{defaultValues ? editDialogTitle : addDialogTitle}</DialogTitle>
          <DialogDescription className="text-slate-400">
            {dialogDescription}
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={form.handleSubmit(handleSubmit)}>
          <FormComponent form={form} />
          <div className="mt-4">
            <DialogFooter className="gap-2">
              <Button type="button" variant="outline" onClick={() => setOpen(false)} className="bg-slate-800 border-blue-500/30 text-slate-300 hover:bg-slate-700 hover:text-slate-100">Close</Button>
              <Button type="submit" className="bg-gradient-to-r from-blue-500 to-cyan-400 text-slate-900 font-semibold hover:shadow-lg hover:shadow-cyan-500/50">
                {submitButtonLabel}
              </Button>
            </DialogFooter>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
} 