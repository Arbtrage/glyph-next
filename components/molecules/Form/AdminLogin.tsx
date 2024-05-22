"use client"

import React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Label } from "@/components/ui/label"

export function AdminLogin() {
    const [isLoading, setIsLoading] = useState<boolean>(false)

    async function onSubmit(event: React.SyntheticEvent) {
        event.preventDefault()
        setIsLoading(true)

        setTimeout(() => {
            setIsLoading(false)
        }, 3000)
    }

    return (
        <div className="flex flex-col gap-2 items-center w-full">
            <Card className="w-full bg-transparent border-none flex flex-col gap-5">
                <CardHeader className="space-y-1 mb-5">
                    <CardTitle className="text-3xl">Welcome Back</CardTitle>
                    <CardDescription>
                        Enter your email below to sign in
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col gap-3">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="m@example.com" disabled={isLoading} className="bg-transparent backdrop-blur-sm" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" placeholder="m@1234" disabled={isLoading} className="bg-transparent backdrop-blur-sm" />
                    </div>
                    <Button className="mt-4" disabled={isLoading} onClick={onSubmit}>Login</Button>
                </CardContent>
            </Card>
        </div>
    )
}
