let button = document.getElementById('btn');

button.addEventListener('click', function(){
    let word = document.getElementById('str').value;
    
    /*split method: The split() method divides a String into an ordered list of substrings, puts these substrings into an array, and returns the array.*/
    let wordcount = word.split(" ").length;

    //solution is wrong; misses last word bc it doesn't work with newlines
   /* var counter = 0; 
   for(var i = 0; i < word.length; i++){
        if(word[i]==" " || word[i] =="\n"){
            counter++;
        }
    }*/

    //this counts #characters, not words
    // let count = word.length;
    
    let outputDiv = document.getElementById('output');

    outputDiv.innerHTML = `${wordcount}`
});
