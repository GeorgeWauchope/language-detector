const franc = require('franc');
const langs = require('langs');
const input = process.argv[2];
const langsCode = franc(input);

const language = langs.where('3', langsCode);


console.log(language.name);
