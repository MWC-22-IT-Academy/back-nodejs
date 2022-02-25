const archivo = '../database/data.json';

const readDB = () => { 
    const info = fs.readFileSync(archivo, { encoding: 'utf-8' });
    const data = JSON.parse(info);
}