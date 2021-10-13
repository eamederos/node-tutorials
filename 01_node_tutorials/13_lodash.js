const _ = require('lodash');

items = [1,[2,[3,[4]]]];

newItems = _.flattenDeep(items);

console.log(newItems);