const express = require('express');
const cors = require('cors'); // 引入 cors 模块
const app = express();

app.use(cors()); // 使用 cors 中间件


app.get('/api/items', (req, res) => {
    const data = [
        { id: 1, name: 'Item 1' },
        { id: 2, name: 'Item 2' },
        { id: 3, name: 'Item 3' }
    ];
    res.json(data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
