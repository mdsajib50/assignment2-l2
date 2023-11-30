import dotenv from "dotenv";
import moduleName from 'module';

dotenv.config({
    path: path.join(
        process.cwd(), '.env'
    )
})