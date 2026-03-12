const db = require('../db');
const labels = require('../labels');

exports.getTables = () => {
    return new Promise((resolve, reject) => {
        db.query('SHOW TABLES', (err, results) => {
            if (err) return reject (err)
            
            const tables = results.map(r =>{
                const tableName = Object.values(r)[0]
                return {id: tableName, label: labels[tableName] || tableName}
                
            });
            resolve(tables);
        });
    });
    
}