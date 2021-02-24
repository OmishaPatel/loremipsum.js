
let results = [];

fetch('https://baconipsum.com/api/?type=meat-and-filler')
.then((resp) => resp.json())
.then((data) => results.push(...data));
 
console.log(results)



const form = document.querySelector('.form');
const amount = document.getElementById('amount');
const result = document.querySelector('.text');

form.addEventListener('submit', function(e) {
    // A click on a form submit button - initiates its submission to the server
    e.preventDefault();
    const value = parseInt(amount.value);
    const random = Math.floor(Math.random() * results.length);
    // inserting condition to check is value is less than 0 and more than 4 as API only results a array of 5 items
    if(isNaN(value) || value <= 0 || value > 4) {
        result.innerHTML = `<p class="result">${results[random]}</p>`;
    } else {
        let tempResults = results.slice(0, value);// getting array values from api based on user's input
        tempResults = tempResults.map(item => {
            return `<p class="result">${item}</p>`
        }).join(''); // using join to avoid the comments in the html display
        result.innerHTML = tempResults;
    }
});

 