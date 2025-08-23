const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'main.html'));
});


app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});
app.listen(PORT, () => {
    console.log(`ScamShield server running on http://localhost:${PORT}`);
});
