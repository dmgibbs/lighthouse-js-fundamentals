function printRange(start, end)
{
  var list = [];
  if (start > end)
    console.log(" Range is not valid. Start value should be less than end value");
  else {
    for (var i = start; i <= end ; i++)
    {

      var  str0 = "";
      var stringOut = "";
      var str1 = "";  // initialize str1 with i ;
      var str2 = "";
      if (i % 3 === 0) str1 = "Loopy";
      if (i % 4 === 0) str2 = "Lighthouse";
      if ((i % 3 !== 0) && (i % 4 !== 0)  )
        str0 = i;
      stringOut = str0 + str1 + str2;
      /*
      if ((i % 3==0) && (i %4 ==0)
        stringOut = "LoopyLighthouse";
      else if ((i %3 ==0) && (i % 4  !=0))
        stringOut = "loopy";
      else if ()
        */
      list.push(stringOut);
      console.log(stringOut);

    } // end else statement

  } // end for
  //console.log(list);

}  // end function

printRange (100, 200);