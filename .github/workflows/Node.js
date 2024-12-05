const express = require('express');
const app = express();
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Configure nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'youremail@example.com',
        pass: 'yourpassword'
    }
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/contact', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'consolidatedmegalinks@gmail.com',
        subject: `Contact form submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ error: 'Failed to send email.' });
        }
        res.json({ success: 'Message sent successfully!' });
    });
});

const[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/Hami-Lemon/note/tree/8e7ae5b41e53c2cf9d2c6418e30c87123b8037b4/Java%2Fweb%E5%BC%80%E5%8F%91%2F%E5%89%8D%E7%AB%AF.md?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "1")[43dcd9a7-70db-4a1f-b0ae-981daa162054](https://github.com/CarlNierves/CarlNierves.github.io/tree/faf325f68517f148ef66653d9dbd3488d7e85b91/index.php?citationMarker=43dcd9a7-70db-4a1f-b0ae-981daa162054 "2")
