/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let min = 1;
    let max = n;
    while (min <= max) {
      const mid = Math.floor(min + (max - min) / 2);
      if (isBadVersion(mid)) {
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }
    return min;
  };
};

const result = solution((n) => {
  return n === 8;
})(1000);

console.log({ result });
