import Database from "better-sqlite3";

const db = new Database("portfolio.db");

const result = db.prepare("UPDATE projects SET title = ?, description = ? WHERE title LIKE '%ZICO X Crush%'").run(
  "ZICO, Crush 'Yin and Yang'",
  "Ment, SMTM 12"
);

console.log("Updated rows:", result.changes);
