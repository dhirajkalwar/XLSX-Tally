const express = require('express');
const reader = require('xlsx');

const file = reader.readFile('./Ledger.xlsx');

let data = [];

const sheets = file.SheetNames;
// console.log(sheets);

for (let i = 0; i < sheets.length; i++) {
    const temp = reader.utils.sheet_to_json(file.Sheets[file.SheetNames[i]]);
    console.log(temp);

    temp.forEach((res) => {
        data.push(res);
        console.log(res);
    })
}

// console.log(data);



