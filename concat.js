//concat.js

function concat(list1, list2)
{
// concatenate 2 arrays

//  build a 3rd array which is the result of the 2 lists ,
// only add items to the list if the starget ource array is not empty
  var list3 = [];         // initialize the array
  if (list1.length >0){     // only add from list1 if its not empty
    for (var i =0; i < list1.length;i++)
    list3.push(list1[i]);
  }
  if (list2.length > 0) {
    for (var i =0; i < list2.length;i++)
      list3.push(list2[i]);
  }
  // console.log(" Final State of list3: " + list3 +" \n");
  return list3;
}
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);