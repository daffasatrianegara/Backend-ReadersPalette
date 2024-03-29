const { port, db } = require('./config');
const app = require('./server');

const startServer = async () => {
    return app.listen(port, async () => {
        try {
            console.log(`Server is listening on port ${port}`);
        } catch(error) {
            console.log(`Cannot start server, error: ${error.message}`);
            process.exit(1);
        }
    })
}

startServer()

const connect = app.connect(db)
if(connect) {
    console.log('database connected successfully');
} else {
    console.log('cannot connect to database');
}

