function selection_sort(arr){

    let currLow = 0;
    let currLowIndex = 0;
    let temp = 0;

    for (let k = 0; k < arr.length; k++){

        currLow=arr[k];
        currLowIndex = k;

        for (let i = k+1; i < arr.length; i++){
            if (arr[i] < currLow){
                currLow = arr[i];
                currLowIndex = i;
            }
        }

        temp = arr[k];
        arr[k] = currLow;
        arr[currLowIndex] = temp;

        console.log(arr);

    }

    return arr;

}

console.log(selection_sort(Array(1,4,3,9,6,5,7)))