const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.send('Docker Hub + Azure ACR 멀티 레지스트리 자동 배포 성공! 🚀');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
