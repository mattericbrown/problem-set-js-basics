/*
  Palindrome Detector

  Create a function `isPalindrome` that returns a boolean indicating whether a given string is a palindrome.

  Here are some examples of palindromes (from easiest to hardest, try to get as many as you can!):

  TRUE:
  - mom
  - racecar
  - stack cats
  - Pull up if I pull up
  - Amore, Roma.
  - A man, a plan, a canal: Panama.

  FALSE:
  - these
  - will not
  - work!

*/

// YOUR CODE HERE
function isPalindrome (n){
    palindromeForward = n.split('');
    palindromeInitial = palindromeForward;
    palindromeReverse = n.split('');
    reverse = palindromeReverse.reverse();
    for (var i = 0; i < palindromeInitial.length; i++ ) {
      if (palindromeForward[i]=== " "){
        palindromeForward.splice(i,1);
      }
    }
    for (var i = 0; i < palindromeInitial.length; i++ ) {
      if (palindromeForward[i]=== ","){
          palindromeForward.splice(i,1);
      }
    }
    for (var i = 0; i < palindromeInitial.length; i++ ) {
      if (palindromeForward[i]=== "."){
          palindromeForward.splice(i,1);
      }
    }
    for (var i = 0; i < palindromeInitial.length; i++ ) {
      if (palindromeForward[i]=== ":"){
          palindromeForward.splice(i,1);
      }
    }
    for (var i = 0; i < palindromeReverse.length; i++ ) {
      if (palindromeReverse[i]=== " "){
        palindromeReverse.splice(i,1);
      }
    }
    for (var i = 0; i < palindromeReverse.length; i++ ) {
      if (palindromeReverse[i]=== ","){
          palindromeReverse.splice(i,1);
      }
    }
    for (var i = 0; i < palindromeReverse.length; i++ ) {
      if (palindromeReverse[i]=== "."){
          palindromeReverse.splice(i,1);
      }
    }
    for (var i = 0; i < palindromeReverse.length; i++ ) {
      if (palindromeReverse[i]=== ":"){
          palindromeReverse.splice(i,1);
      }
    }
    stringForward = palindromeForward.join('');
    stringBackward = palindromeReverse.join('');
    forward = stringForward.toLowerCase();
    backward = stringBackward.toLowerCase();
    return (forward === backward)
}
