import dotenv from "dotenv"

const envObj = dotenv.config().parsed
if (!envObj) process.exit(1)

const config = {
    env: envObj,
}

export default config
