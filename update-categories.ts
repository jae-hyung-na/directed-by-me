import Database from 'better-sqlite3';

const db = new Database('portfolio.db');

// 기존 카테고리를 새 카테고리로 매핑
const categoryMapping: { [key: string]: string } = {
  'Music Video': 'Music Video',
  'Short Film': 'Film & Documentary',
  'Documentary': 'Film & Documentary',
  'Promotional Video': 'Commercial & Brand',
  'Campaign Film': 'Commercial & Brand',
  'Personal Project': 'Film & Documentary' // 성격에 따라 조정 가능하지만 일단 영화로 분류
};

const projects = db.prepare('SELECT id, category FROM projects').all() as { id: number, category: string }[];

for (const project of projects) {
  const newCategory = categoryMapping[project.category] || project.category;
  db.prepare('UPDATE projects SET category = ? WHERE id = ?').run(newCategory, project.id);
  console.log(`Updated project ${project.id}: ${project.category} -> ${newCategory}`);
}

console.log('Database categories updated.');
