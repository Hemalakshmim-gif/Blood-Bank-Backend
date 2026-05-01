const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/auth", require("./routes/auth"));
app.use("/donor", require("./routes/donor"));
app.use("/patient", require("./routes/patient"));
app.use("/request", require("./routes/request"));
app.use("/stock", require("./routes/stock"));
app.use("/donation", require("./routes/donation"));
app.use("/report", require("./routes/report"));

app.get("/", (req, res) => {
  res.send("Backend running clean 🚀");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});