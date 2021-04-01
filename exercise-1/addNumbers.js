// Declare function addNumbers
function addNumbers() {
  // Declare variable firstNum and assign it a value of 9.
  var firstNum = 9
  // Declare variable secondNum and assign it a value of 14.
  var secondNum = 14

  // Reassign variable firstNum to a value of 3.
  firstNum = 3
  // Reassign variable secondNum to a value of 4.
  secondNum = 4
  // Declare variable nums and assign it to an array with values firstNum and secondNum.
  var nums = [firstNum, secondNum]
  // Declare variable product and assign it a value of firstNum multiplied by secondNum.
  var product = firstNum * secondNum
  // Declare variable sum and assign it a value of firstNum added to secondNum.
  var sum = firstNum + secondNum
  // Declare variable average and assign it a value of sum divided by the number of items in array nums.
  var average = sum / nums.length

  // Log to the console the first item in the array nums, index value 0, which is variable firstNum, with a  value of 3.
  console.log(nums[0])
  // Log to the console the second item in the array nums, index value 1, which is variable secondNum, with a value of 4.
  console.log(nums[1])

  // Using interpolation, log to the console a string with values for num1 and num2.
  console.log(`The first number is ${num1} and the second number is ${num2}!`)
  // Return to the console the value of sum, which is 7.
  return sum
}
