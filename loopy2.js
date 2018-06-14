//loopy2.js


function printRange(range, multiples, words)
{
  var i;
  var stringOut = "";

  for ( i = range[0]; i <= range[1]; i++ ){
    if ((i % multiples[0] !== 0) && (i % multiples[1] !== 0))
      stringOut = i;
    else if ((i % multiples[0] === 0) && (i % multiples[1] !== 0))
      stringOut = words[0];
    else if ((i % multiples[1] === 0) && ( i % multiples[0] !== 0))
      stringOut =  words[1];
    else
      stringOut =  words[0] + words[1];
    console.log(stringOut);
  }

}

function loopyLighthouse(range, multiples, words)
{//
  printRange(range, multiples, words);
}

loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);