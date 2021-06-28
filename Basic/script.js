const random = (min = -5, max = 25) => {

    let num = Math.round(Math.random() * (max - min) + min);

    if (num <= 10) {
        console.log("The weather is cold " + num)
    } else {
        console.log("The weather is moderate " + num)
        }
    return Math.round(num);
}

random()