import { PrismaClient } from "@prisma/client";
import shoes from './data/shoes.json';

const prisma = new PrismaClient();

async function main() {
    await prisma.shoes.createMany({ data: shoes });
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })

// yarn prisma db seed => insert data to models
// yarn reset-init-schema => reset schema, then insert data to models