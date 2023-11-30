const dotenv = require('dotenv');
import { dotenv } from "dot";
const path = require('path');

dotenv.config({
    path: path.join(
        process.cwd(), '.env'
    )
})