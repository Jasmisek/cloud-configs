/*import { config } from "../services/config-service"

async function getMultiple(req, res, next) {
    try {
        res.status(200).send(await config.getMultiple(req.query))
    } catch (err) {
        console.error(`Error while getting configs`, err.message)
        next(err)
    }
}

async function getSingle(req, res, next) {
    try {
        res.status(200).send(await config.getSingle(req.params.id))
    } catch (err) {
        console.error(`Error while getting configs`, err.message)
        next(err)
    }
}

async function create(req, res, next) {
    try {
        res.json(await config.create(req.body))
    } catch (err) {
        console.error(`Error while creating config`, err.message)
        next(err)
    }
}

async function update(req, res, next) {
    try {
        res.json(await config.update(req.params.id, req.body))
    } catch (err) {
        console.error(`Error while updating config`, err.message)
        next(err)
    }
}

async function remove(req, res, next) {
    try {
        res.json(await config.remove(req.params.id))
    } catch (err) {
        console.error(`Error while deleting config`, err.message)
        next(err)
    }
}

module.exports = {
    getMultiple,
    getSingle,
    create,
    update,
    remove,
}
*/

import service from "./service"
import { Request, Response } from "express"

export default {
    getMultiple: async (req: Request, res: Response) => {
        const config = await service.getMultiple(req.body)
        res.json({ response: config })
    },

    getSingle: async (req: Request, res: Response) => {
        const id: string = req.params.id

        const config = await service.getSingle(id)
        res.json({ response: config })
    },

    create: async (req: Request, res: Response) => {
        const config = await service.create(req.body)
        res.json({ response: config })
    },

    update: async (req: Request, res: Response) => {
        const config = await service.update(req.body)
        res.json({ response: config })
    },

    delete: async (req: Request, res: Response) => {
        const config = await service.delete(req.body)
        res.json({ response: config })
    },
}
