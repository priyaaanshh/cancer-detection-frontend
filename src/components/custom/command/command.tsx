"use client";
import {
    CalendarIcon,
    EnvelopeClosedIcon,
    FaceIcon,
    GearIcon,
    PersonIcon,
    RocketIcon,
} from "@radix-ui/react-icons"

import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
    CommandShortcut,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"
import { useState } from "react";
import Image from "next/image";
import Pic from "../../../assets/pic.jpg"

export default function CommandDemo() {
    const [inputVal, setInputVal] = useState("");
    const clearInput = () => {
        setInputVal("");
    }
    return (
        <Command className={`${inputVal === "" ? "" : "shadow-md"} rounded-lg border`}>
            <CommandInput placeholder="Search..." value={inputVal} clearInput={clearInput} onValueChange={(value) => setInputVal(value)} />
            <CommandList className={inputVal === "" ? "hidden" : ""}>
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup heading="Suggestions">
                    <CommandItem >
                        {/* <CalendarIcon className="mr-2 h-4 w-4" /> */}
                        <Image alt="" src={Pic} className="mr-2 size-8 rounded-full" />
                        <span>Calendar</span>
                    </CommandItem>
                    <CommandItem>
                        <FaceIcon className="mr-2 h-4 w-4" />
                        <span>Search Emoji</span>
                    </CommandItem>
                    <CommandItem>
                        <RocketIcon className="mr-2 h-4 w-4" />
                        <span>Launch</span>
                    </CommandItem>
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup heading="Settings">
                    <CommandItem>
                        <PersonIcon className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                        <CommandShortcut>⌘P</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
                        <span>Mail</span>
                        <CommandShortcut>⌘B</CommandShortcut>
                    </CommandItem>
                    <CommandItem>
                        <GearIcon className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                        <CommandShortcut>⌘S</CommandShortcut>
                    </CommandItem>
                </CommandGroup>
            </CommandList>
        </Command>
    )
}
