import { dotenv } from "dotenv";
const path = require('path');

dotenv.config({
    path: path.join(
        process.cwd(), '.env'
    )
})