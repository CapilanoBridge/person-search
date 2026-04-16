// app/components/user-form.tsx
'use client'

import { UseFormReturn } from 'react-hook-form'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { UserFormData } from '../actions/schemas'


interface FormComponentProps {
  form: UseFormReturn<UserFormData>
}

export function UserForm({ form }: FormComponentProps) {
  return (
    <Form {...form}>
      <FormField
        control={form.control}
        name="name"
        render={({ field, fieldState }) => (
          <FormItem className="mb-4">
            <FormLabel className="text-cyan-300 font-semibold">Full Name</FormLabel>
            <FormControl>
              <Input 
                placeholder="John Doe" 
                {...field} 
                className="bg-slate-800/50 border border-blue-500/30 text-slate-100 placeholder-slate-500 focus:ring-cyan-400 focus:border-cyan-400 focus:ring-1"
              />
            </FormControl>
            <FormDescription className="text-slate-400 text-xs">
              Enter full name.
            </FormDescription>
            {fieldState.error && (
              <p className="text-red-400 text-sm mt-1">
                {String(fieldState.error) || ''}
              </p>
            ) }
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="email"
        render={({ field, fieldState }) => (
          <FormItem className="mb-4">
            <FormLabel className="text-cyan-300 font-semibold">Email Address</FormLabel>
            <FormControl>
              <Input 
                type="email" 
                placeholder="john@example.com" 
                {...field} 
                className="bg-slate-800/50 border border-blue-500/30 text-slate-100 placeholder-slate-500 focus:ring-cyan-400 focus:border-cyan-400 focus:ring-1"
              />
            </FormControl>
            <FormDescription className="text-slate-400 text-xs">
              Enter email address.
            </FormDescription>
            {fieldState.error && (
              <p className="text-red-400 text-sm mt-1">
                {String(fieldState.error) || ''}
              </p>
            ) }
          </FormItem>
        )}
      />
      <FormField
        control={form.control}
        name="phoneNumber"
        render={({ field, fieldState }) => (
          <FormItem>
            <FormLabel className="text-cyan-300 font-semibold">Phone Number</FormLabel>
            <FormControl>
              <Input 
                placeholder="04xxxxxxxx" 
                {...field} 
                className="bg-slate-800/50 border border-blue-500/30 text-slate-100 placeholder-slate-500 focus:ring-cyan-400 focus:border-cyan-400 focus:ring-1"
              />
            </FormControl>
            <FormDescription className="text-slate-400 text-xs">
              Enter phone number in Australian format.
            </FormDescription>
            {fieldState.error && (
              <p className="text-red-400 text-sm mt-1">
                {String(fieldState.error) || ''}
              </p>
            ) }
          </FormItem>
        )}
      />
    </Form>
  )
}