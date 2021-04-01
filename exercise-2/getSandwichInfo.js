// declare a function getSandwichInfo
function getSandwichInfo() {
  // Declare variable sandwiches and assign it to an array of strings of sandwich names.
  var sandwiches = ['Philly cheesesteak', 'Italian sub', 'Reuben', 'Banh Mi', 'Nashville Hot Chicken', 'Caprese']
  // Declare variable whatIsShift and assign it to the shift method for the sandwiches array, which removes
  // the 0th element in the array. (In this case, "Philly cheesesteak").
  var whatIsShift = sandwiches.shift()
  // Declare variable whatIsPop and assign it to the pop method for the sandwiches array, which removes the last
  // element from an array. (In this case, "Caprese").
  var whatIsPop = sandwiches.pop()
  // Declare variable whatIsLength and assign it to the length method on the sandwiches array, which returns the
  // quantity of items in the array.
  var whatIsLength = sandwiches.length
  // Declare variable whatIsIndex to return index element 2 from the sandwich array, in this case, "Reuben".
  var whatIsIndex = sandwiches[2]
  // Declare a for loop, with the counter starting at the second to last element in the array sandwiches. This
  // loop will run 5 times.
  for (var i = sandwiches.length - 1; i >= 0; i--) {
    // Log to the console a string, and interpolate the value of the ith element in the sandwiches array into the string.
    console.log(`Hmmmm... Lemme get uh... Ummm... I'll take a ${sandwiches[i]} please. Thanks.`)
  }
  // Declare variable dinnerSpecial and assign it to an array containing index element 1 from the sandwiches array, the
  // second to last element in the sandwiches array, and two strings.
  var dinnerSpecial = [sandwiches[1], sandwiches[sandwiches.length - 1], 'fries', 'two drinks']
  // Log to the console the 1st element in the array dinnerSpecial. In this case, "Nashville Hot Chicken".
  console.log(dinnerSpecial[1])
  // Add element 3 to array dinnerSpecial, a string.
  dinnerSpecial[3] = 'a coupla Baja Blasts'
  // Log to the console the 2nd element in array dinnerSpecial.
  console.log(dinnerSpecial[2])
  // Reassign the 2nd elemnt in array dinnerSpcial to "onion rings".
  dinnerSpecial[2] = 'onion rings'
  // Declare variable dailySpecial and assign it an array containing two strings and the 0th element of the sandwiches array.
  var dailySpecial = [sandwiches[0], 'chips', 'drink']
  // Log to the console the 2nd element in the dailySpecial array. In this case, it is "drink".
  console.log(dailySpecial[2])
  // Reassign the 0th element in array dailySpecial to 'Chesseburkle'.
  dailySpecial[0] = 'Chesseburkle'
  // Log to the console the array dailySpecial. ['Chesseburkle', 'chips', 'drink']
  console.log(dailySpecial)
  // Reassign the 1st element in array dailySpecial to the 3rd element in the sandwiches array.
  dailySpecial[1] = sandwiches[3]
}
