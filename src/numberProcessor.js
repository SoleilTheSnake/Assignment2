const fs = require('fs');
const path = require('path');

const dataFolder = path.join(__dirname, '..', 'data');

fs.readdir(dataFolder, (err, files) => {
  if (err) {
    console.error('Error reading folder:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(dataFolder, file);

    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) {
        console.error('Error reading file:', err);
        return;
      }

      console.log(`Analysis for ${file}:`);
      console.log(numberProcessor(data));
    });
  });
});

    //Calculate the sum of all numbers
    //Find the highest and lowest numbers
    //Calculate the average
const numberProcessor = (data = "") => {
    if (!data) return { sum: 0, average: 0, max: null, min: null };
    
    const numbers = data.split('\n').map(Number).filter(n => !isNaN(n));
    const sum = numbers.reduce((a, b) => a + b, 0);
    const average = numbers.length > 0 ? sum / numbers.length : 0;
    const max = numbers.length > 0 ? Math.max(...numbers) : null;
    const min = numbers.length > 0 ? Math.min(...numbers) : null;
    
        return { sum, average, max, min };
    };