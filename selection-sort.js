function findSmallest(list) {
  let smallestIndex = 0;
  let smallest = list[smallestIndex];

  for (let i = 1; i < list.length; i++) {
    if (list[i] < smallest) {
      smallest = list[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function swap(array, firstIndex, secondIndex) {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  return array;
}

function selectionSort(list) {
//   console.log({list1: list.slice(1, list.length)})
  let newArray = [];
  for (let i = 0; i < list.length; i++) {
    let smallest = findSmallest(list.slice(i, list.length));
    console.log(list.slice(i, list.length))
    console.log({smallest})
    // console.log(swap(list, i, smallest))
    // console.log({list})
    // swap(list, smallest, i)
    // console.log({ smallest });
    // newArray.push(list[smallest]);
    // delete list[smallest];
    // console.log({test: list.slice(0, smallest)})
  }

  return list;
}

// console.log(findSmallest([4, 5, 6, 1]));
console.log(selectionSort([4, 5, 6, 3434]));
