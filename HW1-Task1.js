//let Rever = Palindrom.split("").reverse("").join("")
function checkPalindrom(Palindrom){
let Rever = Palindrom.split("").reverse("").join("")

if (Palindrom===Rever)
{
 console.log('Palindrom')
} else{
  console.log('not Palindrom')
  }

}
checkPalindrom("bob");