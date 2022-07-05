import fsPromises from 'fs/promises';
import path from 'path';

async function fetchPublications() {
  const filePath = path.join(process.cwd(), 'data/publications.json');
  const data = await fsPromises.readFile(filePath);
  return JSON.parse(data);
}

export default fetchPublications;
