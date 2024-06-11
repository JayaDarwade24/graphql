const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.json({ message: "Welcome" });
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`listening to port : http://localhost:${PORT}`);
})
