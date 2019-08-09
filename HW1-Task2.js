function myStr(str)
{
    let newstr = str.split(' ');
    let result = newstr.map(myFunction);
    function myFunction(eachWord)
    {
    let newtest = eachWord.split('')
    for (let i = 2; i < newtest.length; i=i+3)
        {
	    newtest[i]='Yes';
        }
    console.log(newtest.join(''));
    }
}
myStr("Xochy yehat na Sri Lanky, a ne vot eto vot vse")