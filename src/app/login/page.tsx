"use client";
import React from 'react'

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod"
import { UseFormReturn, useForm } from "react-hook-form"
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"



const formSchema = z.object({
    email: z.string().email(),
    username: z.string().min(2,
        { message: "Username must be at least 2 characters long." }
    ),
    password: z.string().min(8,
        { message: "Password must be at least 8 characters long." }
    ),
})

const handleSubmit = (form: UseFormReturn<z.infer<typeof formSchema>>) => {
    console.log(form.getValues())
    console.log("Submitted form.")
}

const Login = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            email: "",
            password: "",
        }
    });
    return (
        <div className='flex flex-col gap-10 justify-center items-center h-full w-full'>
            <Card className='w-full max-w-96'>
                <CardHeader>
                    <CardTitle>Welcome back</CardTitle>
                    <CardDescription>Login to access your account...</CardDescription>
                </CardHeader>
                <CardContent>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(() => handleSubmit(form))} className="flex flex-col justify-center gap-3 w-full">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="username" {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name="email"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="email" type='email' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            /><FormField
                                control={form.control}
                                name="password"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormControl>
                                            <Input placeholder="password" type='password' autoComplete='on' {...field} />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit">Login</Button>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default Login
