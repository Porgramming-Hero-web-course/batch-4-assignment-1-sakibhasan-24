// sumArray([1, 2, 3, 4, 5]);

const sumArray = (nums: Array<number>): number => {
  let sum: number = 0;
  sum = nums.reduce((acc, currentValue) => acc + currentValue, 0);
  // console.log(sum);
  return sum;
};
