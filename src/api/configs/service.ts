import { PrismaClient } from "@prisma/client"
import { v4 as uuidv4 } from "uuid"
import { emptyOrRows } from "../../utils/helper.util"
const prisma = new PrismaClient()

export default {
    /* 
    Get config logic.
    */
    getMultiple: async (body: any) => {
        const config = prisma.configs.findMany({
            where: {
                user: body.user,
            },
        })

        return emptyOrRows(config)
    },

    getSingle: async (id: string) => {
        const config = prisma.configs.findUnique({
            where: {
                id: id,
            },
        })
        return config
    },

    create: async (body: any) => {
        const config = await prisma.configs.create({
            data: {
                id: uuidv4(),
                user: body.user,
                name: body.name,
                content: body.content,
            },
        })
        return config
    },

    update: async (body: any, id: string) => {
        const config = await prisma.configs.update({
            where: {
                id: id
            },
            data: {
                content: body.content
            }
        })
        return config
    },

    delete: async (id: string) => {
        const config = await prisma.configs.delete({
            where: {
                id: id
            },
        })
        return "Succesfully deleted config!"
    }
}
