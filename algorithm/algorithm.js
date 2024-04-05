// Mini-Max Sum Algorithm
/** miniMaxSum function
 * @param {number[]} arr
 * @return {void}
 */
function miniMaxSum(arr) {
  arr.sort((a, b) => a - b);
  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i < 4) minSum += arr[i];
    if (i > 0 && i < 5) maxSum += arr[i];
  }

  console.log(minSum + " " + maxSum);
}

// Bouns
/** Count total of array
 * @param {number[]} arr
 * @return {number}
 */
function sumArr(arr) {
  return arr.reduce((sum, current) => sum + current, 0);
}

/** Find min in array
 * @param {number[]} arr
 * @return {number}
 */
function findMin(arr) {
  arr.sort((a, b) => a - b);
  return arr[0];
}

/** Find max in array
 * @param {number[]} arr
 * @return {number}
 */
function findMax(arr) {
  arr.sort((a, b) => b - a);
  return arr[0];
}

/** Find even elements in array
 * @param {number[]} arr
 * @return {number[]}
 */
function findEvenElements(arr) {
  return arr.filter((el) => el % 2 === 0);
}

/** Find odd elements in array
 * @param {number[]} arr
 * @return {number[]}
 */
function findOddElements(arr) {
  return arr.filter((el) => el % 2 !== 0);
}

function main() {
  const arr1 = [2, 4, 5, 1, 3];
  const arr2 = [20, 16, 19, 17, 18];
  const arr3 = [32, 35, 33, 34, 31];
  const arr4 = [100, 104, 102, 103, 101];
  const arr5 = [2023, 2021, 2024, 2022, 2020];

  miniMaxSum(arr1); // Output: 10 14
  miniMaxSum(arr2); // Output: 70 74
  miniMaxSum(arr3); // Output: 130 134
  miniMaxSum(arr4); // Output: 406 410
  miniMaxSum(arr5); // Output: 8086 8090

  // Bouns
  console.log(sumArr(arr1));
  console.log(findMin(arr1));
  console.log(findMax(arr1));
  console.log(findEvenElements(arr1));
  console.log(findOddElements(arr1));
}

main();
