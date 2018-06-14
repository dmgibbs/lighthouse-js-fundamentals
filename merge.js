merge.js

// merges 2 sorted arrays

function merge(list1 , list2)
{
  //  build a 3rd array which is the result of the 2 lists ,
  // only add items to the list if the starget ource array is not empty
  var list3 = [];         // initialize the array
  if (list1.length === 0){     // only add from list1 if its not empty
    for (var i = 0; i < list2.length;i++)
      list3.push(list2[i]);
    return list3;
  }
  if (list2.length === 0) {
    for (var i =0; i < list2.length;i++)
      list3.push(list1[i]);
    return list3;
  }
  // we got this far, so lets walkthru each array merging as testing each elem
  var end = false;
  var l1index = 0; var l2index = 0;
  var l1max = list1.length;
  var l2max = list2.length;

  while (end !== true) {
    if (list1[l1index] === list2[l2index]){
      list3.push(list1[l1index++]);
      list3.push(list2[l2index++]);

    }
    else if (list1[l1index]  < list2[l2index])
      list3.push(list1[l1index++]);
    else if (list1[l1index] > list2[l2index])
      list3.push(list2[l2index++]);

    if ((l1index === l1max)
      if (l2index < l2max)){
      for (var i = l2index; i <l2max ;i++)
        list3.push(list2[i]);
      end = true;
    }
    else if ((l2index === l2max) && (l1index < l1max)){
      for (i= l1index; i <l1max ; i++)
       list3.push(list1[i]);
      end = true;
    }
    if
  }  // end while loop
}

  // console.log(" Final State of list3: " + list3 +" \n");
  return list3;
  console.log(list3);
}
console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);
