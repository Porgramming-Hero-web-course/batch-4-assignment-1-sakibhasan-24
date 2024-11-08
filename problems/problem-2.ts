// Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])
const removeDuplicates = (arr: Array<number>): Array<number> => {
  const uniqueArr: Array<number> = arr.filter(
    (value, idx) => arr.indexOf(value) === idx
  );
  return uniqueArr;
};
// console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
