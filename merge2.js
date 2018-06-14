//merge.js

// merges 2 sorted arrays


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


function merge(list1 , list2)
{
  var list3 = concat (list1, list2);
  return list3.sort();

}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
