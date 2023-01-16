import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"
import { emptyOrRows } from "../../utils/helper.util"
const prisma = new PrismaClient()

interface config {
    id: string
    user: string
    name: string
    content: string
}

export default {
    /* 
    Get config logic.
    */
    getMultiple: async ({ user }: config) => {
        const config = prisma.configs.findMany({
            where: {
                user: user,
            },
        })

        return emptyOrRows(config)
    },

    getSingle: async (id: any) => {
        const config = prisma.configs.findUnique({
            where: {
                id: id,
            },
        })
        return config
    },

    create: async ({ user, name, content }: config) => {
        const config = await prisma.configs.create({
            data: {
                id: uuidv4(),
                user: user,
                name: name,
                content: content,
            },
        })
        return config
    },

    update: async ({ id, content }: config) => {
        const config = await prisma.configs.update({
            where: {
                id: id,
            },
            data: {
                content: content,
            },
        })
        return config
    },

    delete: async ({ id }: config) => {
        await prisma.configs.delete({
            where: {
                id: id,
            },
        })
        return "Succesfully deleted config!"
    },
}
