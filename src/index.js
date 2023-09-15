const express   = require('express');
const app       = express();
const port      = 4000;

// ========================================
// DATABASE - MYSQL
// ========================================


// ========================================
// MIDDLEWARE
// ========================================
const middleWareLogRequest = require('./middleware/logs');

app.use(middleWareLogRequest);
app.use(express.json());

// ========================================
// ROUTING
// ========================================
const usersRoutes = require('./routes/users')


app.use('/users', usersRoutes);


// ======================================
// SERVER
// =======================================
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
})