const assertEqual = require('../assertEqual');
const tail = require('../tail');

const words = ['here', 'are', 'some', 'words'];
assertEqual(tail(words).length, 3);
