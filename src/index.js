
exports.min = function min (array) {
  if (array && array.length != 0) {
    return Math.min(...array);
  }

  return 0;
}

exports.max = function max (array) {
  if (array && array.length !== 0) {
    return Math.max(...array);
  }

  return 0;
}

exports.avg = function avg (array) {
  if (array && array.length !== 0) {
    return array.reduce((sum, current) => sum + current, 0) / array.length;
  }

  return 0;
}
