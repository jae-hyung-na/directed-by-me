import Database from 'better-sqlite3';

const db = new Database('portfolio.db');

const role = "Producer, Poetry Writer, Voiceover Recordist & Editing, Post-Production Specialist";
const result = db.prepare("UPDATE projects SET role = ? WHERE title = '우리의 계절'").run(role);

console.log(`Updated project '우리의 계절' with role. Changes: ${result.changes}`);
