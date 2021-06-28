const random = (min = -25, max = 35) => {

    let num = Math.round(Math.random() * (max - min) + min);
    let weather = document.getElementsByClassName("weather").innerHTML;

    if (num <= -5) {
        document.getElementById("weather").innerHTML = "The weather is really cold: " + num + " Celsius today" + '<br><img src="https://images.unsplash.com/photo-1514632595-4944383f2737?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" alt=>';
    }    else if (num <= 10) {
        document.getElementById("weather").innerHTML = "The weather cold: " + num + " Celsius today" + '<br><img src="https://images.unsplash.com/photo-1595231951275-23967b222566?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=375&q=80" alt=>';
    } else if (num <= 20) {
        document.getElementById("weather").innerHTML = "The weather is moderate: " + num + " Celsius today" + '<br><img src="https://images.unsplash.com/photo-1592210454359-9043f067919b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=>';
    } else if (num <= 35) {
        document.getElementById("weather").innerHTML = "The weather is hot: " + num + " Celsius today" + '<br><img src="https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" alt=>';
    } else {
        document.getElementById("weather").innerHTML = "The weather is dangerous: " + num + " Celsius today" + '<br><img src="https://images.unsplash.com/photo-1454789476662-53eb23ba5907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80" alt=>';
        }
    return Math.round(num);
}
random()