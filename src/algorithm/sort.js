function quickSort(a, low, hight) {
  if (low > hight) {
    return;
  }
  let i = low;
  let j = hight;
  let index = a[i];
  while (i < j) {
    // 从表的两端交替向中间扫描
    while (i < j && a[j] >= index) j--;
    if (i < j) a[i++] = a[j]; // 用比基准小的记录替换低位记录
    while (i < j && a[i] < index) i++;
    if (i < j)
      // 用比基准大的记录替换高位记录
      a[j--] = a[i];
  }
  a[i] = index; // 将基准数值替换回 a[i]
  quickSort(a, low, i - 1); // 对低子表进行递归排序
  quickSort(a, i + 1, hight); // 对高子表进行递归排序
}

function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let t = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = t;
      }
    }
  }
}

let arr = [13, 22, 1, 45, 22, 9];

// quickSort(arr, 0, arr.length - 1);
// console.log(`quickSort: ${arr}`);

bubbleSort(arr);
console.log(`bubbleSort: ${arr}`);
