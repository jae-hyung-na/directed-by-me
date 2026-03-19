import Database from 'better-sqlite3';

const db = new Database('portfolio.db');

function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, (txt) => {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

function processCredits(credits: string): string {
  const lines = credits.split('\n');
  const processedLines = lines.map(line => {
    if (line.includes('|')) {
      const [label, value] = line.split('|');
      return `${toTitleCase(label.trim())} | ${toTitleCase(value.trim())}`;
    }
    return line; // Keep lines without '|' as they are (e.g., copyright)
  });
  return processedLines.join('\n');
}

const projects = db.prepare('SELECT id, credits FROM projects').all() as { id: number, credits: string }[];

for (const project of projects) {
  const updatedCredits = processCredits(project.credits);
  db.prepare('UPDATE projects SET credits = ? WHERE id = ?').run(updatedCredits, project.id);
  console.log(`Updated project ${project.id}`);
}

console.log('All project credits updated to Style [C]');
