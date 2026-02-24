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
      console.log(textAnalyzer(data));
    });
  });
});

const textAnalyzer = (data = "") => {
    if (!data) return { words: 0, longestWord: '', lines: 0 };

    const countWords = (text) =>
        text.trim().split(/\s+/).filter(word => word.length > 0).length;

    const findLongestWord = (text) =>
        text.split(/\s+/).reduce(
            (longest, word) =>
                word.length > longest.length ? word : longest,
            ''
        );

    const countLines = (text) =>
        text.split('\n').length;

    return {
        words: countWords(data),
        longestWord: findLongestWord(data),
        lines: countLines(data)
    };
};