const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const pool = new Pool({
  host: process.env.PGHOST,
  port: process.env.PGPORT,
  database: process.env.PGDATABASE,
  user: process.env.PGUSER,
  password: process.env.PGPASSWORD,
});

pool
  .connect()
  .then((client) => {
    console.log("PostgreSQL connected successfully");
    client.release();
  })
  .catch((error) => {
    console.error("PostgreSQL connection failed:", error.message);
  });

app.get("/", (req, res) => {
  res.json({
    message: "मछमरवा डिजिटल गाँव Backend चल रहा है 🚀",
  });
});

app.get("/api/health", (req, res) => {
  res.json({
    status: "OK",
    message: "API सही तरीके से काम कर रही है",
  });
});

app.post("/api/problems", async (req, res) => {
  try {
    const {
      name,
      mobile,
      category,
      description,
      location,
    } = req.body;

    const result = await pool.query(
      `INSERT INTO problems
       (name, mobile, category, description, location)
       VALUES ($1, $2, $3, $4, $5)
       RETURNING *`,
      [name, mobile, category, description, location]
    );

    res.status(201).json({
      success: true,
      message: "समस्या सफलतापूर्वक दर्ज हुई",
      problem: result.rows[0],
    });
  } catch (error) {
    console.error("Database error:", error.message);

    res.status(500).json({
      success: false,
      message: "समस्या दर्ज नहीं हो सकी",
    });
  }
});

app.listen(PORT, () => {
    console.log(`Backend server running on port ${PORT}`);
  
});