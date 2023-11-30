const dotenv = require('dotenv');
import { dot } from "module";
const path = require('path');

dotenv.config({
    path: path.join(
        process.cwd(), '.env'
    )
})