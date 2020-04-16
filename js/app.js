
'use strict'
var greeting = alert('Welcome to your Dream World')
var order = prompt('you want house or mansion');
while (order !== 'house' && order !== 'mansion') {
    order = prompt('please write house or mansion');
}

var numbers = prompt('please enter the numbers of buildings that you want to show');
var item = '';
var showHouse = function () {
    for (var i = 0; i < numbers; i++) {
        console.log(numbers);
        
        if (order === "house") {
            console.log(order)
            item = item + '<img src="pic/house.jpg">';
        } else if (order === "mansion") {
            item = item + '<img src ="pic/mansion.jpg">';
        }// else {
           // item = "order not found";
       // }
          
          
          console.log(numbers)
    }
    return item;
}  // document.write(showHouse);