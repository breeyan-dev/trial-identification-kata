const csv = require('csv-parser');
const fs = require('fs');

const csvFileLoader = async (path) => {
    return await new Promise((resolve, reject) => {
        const content = [];
        try {
            fs.createReadStream(path)
                .pipe(csv())
                .on('data', (data) => content.push(data))
                .on('end', () => resolve(content))
        } catch (e) {
            console.log(`Loading ${path} error...`, e)
            reject(e)
        }
    })
}

module.exports = csvFileLoader;