function grades() {
    let arr =  [
        ["Martin", 76],
        ["Thomas", 85],
        ["Klaus", 65],
        ["Maria", 93],
        ["David", 81]
    ];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i][1] < 60) {
            console.log(arr[i][0] + " F");
        } else if (arr[i][1] < 70) {
            console.log(arr[i][0] + " D");
        } else if (arr[i][1] < 80) {
            console.log(arr[i][0] + " C");
        } else if (arr[i][1] < 90) {
            console.log(arr[i][0] + " B");
        } else if (arr[i][1] < 100) {
            console.log(arr[i][0] + " A");
        }

    }
    let avg = 0;
    for(var i = 0; i < arr.length; i++) {
        avg += arr[i][1];
    }
    avg /= i;
    console.log(avg);
}
grades();