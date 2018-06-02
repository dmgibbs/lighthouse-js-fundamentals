var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
var i = 0;
console.log("\nUsing a while loop");

while (i < ingredients.length ) {
  console.log(ingredients[i]);
  i++;
}
console.log("\nUsing a for loop");
// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);

}
console.log("\nUsing loop , printing in reverse");

// Write any loop (while or for) that prints out the contents of ingredients backwards:
for (var i = ingredients.length-1; i>=0 ;i--) {
  console.log(ingredients[i]);

}
