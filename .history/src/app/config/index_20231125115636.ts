const dotenv = require('dotenv');
import { dotenv } from "module";
const path = require('path');

dotenv.config({
    path: path.join(
        process.cwd(), '.env'
    )
})