export function material(array: number[]): number {
  let result = 0;
  let left = 0;
  let right = array.length - 1;
  let leftMax = 0;
  let rightMax = 0;

  while (left < right) {
    if (array[left] < array[right]) {
      if (array[left] >= leftMax) {
        leftMax = array[left];
      } else {
        result += leftMax - array[left];
      }
      left++;
    } else {
      if (array[right] >= rightMax) {
        rightMax = array[right];
      } else {
        result += rightMax - array[right];
      }
      right--;
    }
  }

  return result;
}
