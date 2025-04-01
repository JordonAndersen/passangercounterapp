// intitalize the count to 0 
// listen for clicks on increment button 
// increment the count to variable when the button is clicked
// change the count-el in html to reflect the new count 

let countEl =  document.getElementById('count-el')

let count = 0 


function increment(){
    count = count + 1
    countEl = count
    
}