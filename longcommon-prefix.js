/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  const stackStrs = strs.map((str) => str.split(""));
  console.log({ stackStrs });
  //   const result = stackStrs.reduce((ac, cur, index) => {

  //   }, "")
  for (i = 0; i < arr1.length; i++) {
    for (j = 0; j < 10; j++) {
      vert = arr2.reduce(function (prev, curr) {
        return prev + curr[j];
      }, "");
      if (vert.indexOf(arr1[i]) > -1) {
        output.innerHTML += "isVertical: " + arr1[i] + "\n";
      }
    }
  }
};

longestCommonPrefix(["flower", "flow", "flight"]);
