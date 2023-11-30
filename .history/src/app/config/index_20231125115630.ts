const dotenv = require('dotenv');
import { do } from "module";
const path = require('path');

dotenv.config({
    path: path.join(
        process.cwd(), '.env'
    )
})