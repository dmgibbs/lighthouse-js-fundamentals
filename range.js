function range (start, end , step)
{
  var badData = false;
  var list = [];

  if (start > end)
    badData = true;
  if (step <= 0)
    badData = true;


  if (start === undefined)
    badData = true;
  if (end === undefined)
    badData = true;
  if (step === undefined)
    badData = true;
  if (badData !== true){
  // If data so far is ok, do the loop
    for (var i = start; i <= end ; i = i + step)
    {
      console.log("This is i:" + i);
      list.push(i);
    }
  }
  return list;
}
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));