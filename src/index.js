require('dotenv').config()

const express   = require('express');
const app       = express();
const PORT      = process.env.PORT || 5000;

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
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})