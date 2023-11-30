import dotenv from "dotenv";
import p from 'path';

dotenv.config({
    path: path.join(
        process.cwd(), '.env'
    )
})