import Database from "better-sqlite3";

const db = new Database("portfolio.db");
const result = db.prepare("UPDATE projects SET thumbnail_url = 'YAY.png', video_url = 'https://www.youtube.com/embed/XHVuoRXXWJM' WHERE title LIKE '%ZICO X Crush%'").run();
console.log("Updated rows:", result.changes);
