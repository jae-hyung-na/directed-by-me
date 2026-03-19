import Database from "better-sqlite3";

const db = new Database("portfolio.db");

try {
  // Add year column if it doesn't exist
  db.prepare("ALTER TABLE projects ADD COLUMN year TEXT").run();
  console.log("Added 'year' column to projects table.");
} catch (error: any) {
  if (error.message.includes("duplicate column name")) {
    console.log("'year' column already exists.");
  } else {
    console.error("Error adding column:", error);
  }
}

// Update the Zico project with the year 2023 as an example
const result = db.prepare("UPDATE projects SET year = ? WHERE title LIKE '%ZICO%'").run("2023");
console.log("Updated rows with year:", result.changes);
