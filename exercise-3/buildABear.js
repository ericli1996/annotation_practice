// Declare function buildABear and give it some parameters.
function buildABear(name, age, fur, clothes, specialPower) {
  // Declare variable greeting and assign it a string with variable name interpolated into it.
  var greeting = `Hey partner! My name is ${name} - will you be my friend?!`
  // Declare variable demographics and assign it to an array of two variables.
  var demographics = [name, age]
  // Declare variable powerSaying and assign it a string with variable specialPower concatenated into it.
  var powerSaying = "Did you know that I can " + specialPower + " ?"
  // Declare an object builtBear and give it some properties.
  var builtBear = {
    basicInfo: demographics,
    clothes: clothes,
    exterior: fur,
    cost: 49.99,
    sayings: [greeting, powerSaying, "Goodnight my friend!"],
    isCuddly: true,
  }
  // Return to the caller the object builtBear.
  return builtBear
}

// Run the function twice, each time with different parameters.
buildABear('Fluffy', 4, 'brown', ['pants', 'jorts', 'tanktop'], 'give you nightmares');
buildABear('Sleepy', 2, 'purple', ['pajamas', 'sleeping cap'], 'sleeping in');
