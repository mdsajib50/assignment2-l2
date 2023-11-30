import dotenv from "dotenv";
import moduleName from 'path';

dotenv.config({
    path: path.join(
        process.cwd(), '.env'
    )
})