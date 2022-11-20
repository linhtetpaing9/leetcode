function search(list, item) {
    // point index
    let min = 0;
    let max = list.length - 1

    while(min <= max){
        let middle = Math.round((min + max) / 2)
        console.log({middle})

        if(item === list[middle]){
            return item
        }
        if(item < list[middle]){
            max = middle - 1
        }
        if(item > list[middle]){
            min = middle + 1
        }
    }

    return -1

}

// function search(list, item){

//     let min = 0;
//     let max = list.length - 1

//     while(min <= max){
//         let middle = Math.floor(min + (max - min) / 2)

//         if(item === list[middle]){
//             return item
//         }
//         if(item < list[middle]){
//             min = list[middle] + 1
//         }

//         if(item > list[middle]){
//             max = list[middle] - 1
//         }

//     }

//     return -1

// }

console.log(search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8))
