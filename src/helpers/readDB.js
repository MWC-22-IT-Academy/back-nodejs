import archivo from '../database/json/data.json';

export const readDB = () => { 
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info);
}