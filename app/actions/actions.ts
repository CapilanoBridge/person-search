'use server'

import { revalidatePath } from 'next/cache'
import { User, userSchema } from './schemas'

// ========== MOCK DATA ==========
const users: User[] = [
    { id: '1', name: 'John Doe', phoneNumber: '0412345678', email: 'john@example.com' },
    { id: '2', name: 'Jane Smith', phoneNumber: '0423456789', email: 'jane@example.com' },
    { id: '3', name: 'Alice Johnson', phoneNumber: '0434567890', email: 'alice@example.com' },
    { id: '4', name: 'Bob Williams', phoneNumber: '0445678901', email: 'bob@example.com' },
    { id: '5', name: 'Charlie Brown', phoneNumber: '0456789012', email: 'charlie@example.com' },
    { id: '6', name: 'Emily Davis', phoneNumber: '0467890123', email: 'emily@example.com' },
    { id: '7', name: 'Frank Miller', phoneNumber: '0478901234', email: 'frank@example.com' },
    { id: '8', name: 'Grace Lee', phoneNumber: '0489012345', email: 'grace@example.com' },
    { id: '9', name: 'Henry Moore', phoneNumber: '0490123456', email: 'henry@example.com' },
    { id: '10', name: 'Isabella Young', phoneNumber: '0401234567', email: 'isabella@example.com' },
]

export async function searchUsers(query: string): Promise<User[]> {
    const results = users.filter(user => user.name.toLowerCase().startsWith(query.toLowerCase()))
    return results
}

export async function addUser(data: Omit<User, 'id'>): Promise<User> {
    const newId = crypto.randomUUID()
    const newUser = { ...data, id: newId }
    const validatedUser = userSchema.parse(newUser)
    users.push(validatedUser)
    return validatedUser
}

export async function deleteUser(id: string): Promise<void> {
    const index = users.findIndex(user => user.id === id)
    if (index === -1) throw new Error(`User with id ${id} not found`)
    users.splice(index, 1)
    revalidatePath('/')
}

export async function updateUser(id: string, data: Partial<Omit<User, 'id'>>): Promise<User> {
    const index = users.findIndex(user => user.id === id)
    if (index === -1) throw new Error(`User with id ${id} not found`)
    const updatedUser = { ...users[index], ...data }
    const validatedUser = userSchema.parse(updatedUser)
    users[index] = validatedUser
    revalidatePath('/')
    return validatedUser
}

export async function getUserById(id: string): Promise<User | null> {
    const user = users.find(u => u.id === id)
    return user || null
}

export async function getUsers(): Promise<User[]> {
    return users
}

// ========== PRISMA / NEON ==========
export async function createPerson(data: { name: string; email: string }) {
    const { prisma } = await import('@/lib/prisma')
    await prisma.person.create({
        data: {
            name: data.name,
            email: data.email,
        },
    })
    revalidatePath('/')
}

export async function getPeople() {
    const { prisma } = await import('@/lib/prisma')
    return await prisma.person.findMany({
        orderBy: { createdAt: 'desc' },
    })
}

export async function deletePerson(id: number) {
    const { prisma } = await import('@/lib/prisma')
    await prisma.person.delete({ where: { id } })
    revalidatePath('/')
}

export async function updatePerson(id: number, data: { name: string; email: string }) {
    const { prisma } = await import('@/lib/prisma')
    await prisma.person.update({
        where: { id },
        data: {
            name: data.name,
            email: data.email,
        },
    })
    revalidatePath('/')
}
