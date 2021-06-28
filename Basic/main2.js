function highestNum () {
    let num1 = Math.round(Math.random() * 100);
    let num2 = Math.round(Math.random() * 100);
    let num3 = Math.round(Math.random() * 100);
    let num4 = Math.round(Math.random() * 100);
    console.log(num1, num2, num3, num4);
    
    let arr = [num1, num2, num3, num4];
    let max = 0;

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] > max) {
            max = arr[i];
            console.log(arr[i]);
        }
    }
    return max;
}

console.log(highestNum());