#! /usr/bin/env node

/** csv file: first line keys. Use , to separate. */
const csv = require('csvtojson');
const path = require('path');
const fs = require('fs');

const myArgs = process.argv.slice(2);
const [csvFilePath, ...notusedargs] = myArgs;
const dirname = path.dirname(csvFilePath);
const basename = path.basename(csvFilePath, '.csv');
const jsonfilename = dirname + '/' + basename + '.json';

csv()
  .fromFile(csvFilePath)
  .then((jsonObj)=>{
    fs.writeFileSync(jsonfilename, JSON.stringify(jsonObj), 'utf-8');
  });