import { prisma } from '../client'
const main = async () => {
    await prisma.user.create({
        data: {
            name: 'Jason',
            email: 'test@gmail.com'
        }
    })
}

main();