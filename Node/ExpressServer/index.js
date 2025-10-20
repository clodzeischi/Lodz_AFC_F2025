// Foundation
import express from 'express';
import logger from 'morgan';


const app = express();
const port = process.env.PORT || 3000;

app.use(logger('dev'));

// Route handlers
app.get('/', (req, res) => {
    res.redirect('/login');
});

app.get('/login', (req, res) => {
    res.end('You made it to the login page');
});

app.use((req, res) => {
    res.status(404).send('No route handler');
});




// Listeners
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
});