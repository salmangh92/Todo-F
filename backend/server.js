import app from "./src/app.js";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
dotenv.config({ quiet: true });

const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => console.log(`Server lüft auf port ${PORT}`));
  })
  .catch((err) => {
    console.error("Fehler bei der MongoDB-verbindung", err);
    process.exit(1);
  });
