function printRange()
{
  var i;
  var stringOut = "";

  for ( i = 100; i <= 200; i++ ){
    if ((i % 3 !== 0) && (i % 4 !== 0))
      stringOut = i;
    else if ((i % 3 === 0) && (i % 4 !== 0))
      stringOut = "Loopy";
    else if ((i % 4 === 0) && ( i % 3 !== 0))
      stringOut = "Lighthouse";
    else
      stringOut = "LoopyLighthouse";
    console.log(stringOut);
  }

}
printRange();