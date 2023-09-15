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
app.use('/assets', express.static('public/images'))

// ========================================
// ROUTING URL PAGE / DATA
// ========================================
const usersRoutes = require('./routes/users');

app.use('/users', usersRoutes);

// ========================================
// ROUTING URL UPLOAD
// ========================================
const upload = require('./middleware/multer');

app.post('/upload', upload.single('photo') ,(req,res) => {
    res.json({
        message : 'Upload Berhasil'
    })
})

app.use((err, req, res, next) => {
    res.json ({
        message: err.message
    })
})

// ======================================
// SERVER
// =======================================
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
})