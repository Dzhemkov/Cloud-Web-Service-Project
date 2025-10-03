import { PrismaClient} from '../src/generated/prisma'

export const prisma = new PrismaClient({
    log: ['query', 'info', 'warn', 'error']
})

const globalForPrisma = global as unknown as {prisma : PrismaClient | undefined}

if(process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma