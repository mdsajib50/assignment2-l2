const dotenv = require('dotenv');
im
const path = require('path');

dotenv.config({
    path: path.join(
        process.cwd(), '.env'
    )
})