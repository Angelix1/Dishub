import {
    Client,
    Message
} from 'discord.js'

export function Say(
    message: Message,
    content: String
): Output;

export function Re(
    message: Message,
    content: String
): Output;

export function LOG(content: String): Output;

export function Lreply(
    message: Message,
    content: String
): Output;

export function Edit(
    message: Message,
    content: String,
    time: Number    
): Output;

export function Delete(
    message: Message,
    option: { 
        1: 'Normal',
        2: 'Default Reply', 
        3: 'Inline Reply', 
        4: 'Inline Without Mentions'
    },
    content: String,
    time: Number
): Output;
