const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const mysql = require('mysql2');


//Load env
dotenv.config({ path: './env' });


const app = express();

//Dev logging
if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

//Profile routes
app.use('/api/v1/profile', require('./routes/profile'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${port} http://localhost:${port}`);

});
