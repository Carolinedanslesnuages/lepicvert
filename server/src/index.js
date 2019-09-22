import http from 'http'
import app from './app'

// Configuring the database
import dbConfig from './mongodb.config'
import mongoose from 'mongoose'

// Connecting to the database
mongoose.connect(dbConfig.url)
.then(() => {
    console.log("Successfully connected to MongoDB.");    
}).catch(err => {
    console.log('Could not connect to MongoDB.');
    process.exit();
});
  
// Create a Server
const PORT = process.env.PORT || 8000
http.createServer(app).listen(PORT, 'localhost')
console.log(`Server run at http://localhost:${PORT}`)