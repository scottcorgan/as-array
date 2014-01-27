var isArgs = require('is-args');

module.exports = function (data) {
  if (!data) data = [];
  if (isArgs(data)) data = [].splice.call(data, 0);
  
  return Array.isArray(data)
    ? [].splice.call(data, 0)
    : [data]
};