//get values from the user. Get the fizzValue and the Buzz value.
function getValues() {
    //get the user values from the page.
    let fizzValue = document.querySelector('#fizzValue').value;
    let buzzValue = document.querySelector('#buzzValue').value;

    //parseInt for numbers
    fizzValue = parseInt(fizzValue);
    buzzValue = parseInt(buzzValue);

    //check to make sure they are fizzValue
    if (Number.isInteger(fizzValue) && Number.isInteger(buzzValue)) {
        //we call fizzBuzz
        let fbArray = fizzBuzz(fizzValue, buzzValue)

        //wwe call displayData and write values to the screen.
        displayData(fbArray);


    } else {
        alert("You must enter an integer")
    }

}

//do fizz buzz
function fizzBuzz(fizzValue, buzzValue) {
    //intialise the return array.
    let returnArray = [];

    //loop from 1 to 100
    for (let i = 1; i <= 100; i++) {

        if (i % fizzValue == 0 && i % buzzValue ==0) {
            returnArray.push('FizzBuzz');
        } else if (i % fizzValue == 0) {
            returnArray.push('Fizz');
        } else if (i % buzzValue == 0) {
            returnArray.push('Buzz');
        } else {
            returnArray.push(i);
        }
    }
    //we need to check the current value if its in three steps:
    //check to see if divisible by both (3 and 5) then push 'FizzBuzz' into the array.
    //check to see if divisible by fizz value (3), if so push 'Fizz' into the array
    //check to see if divisible by buzz value (5), if so push 'Buzz' into the array.
    //if none then push the number into the array.

    //return The array
    return returnArray;
}

function fizzBuzzB(fizzValue, buzzValue){
    let returnArray =[];
    let Fizz = false;
    let Buzz = fasle;

    for(let i = 1; i <= 100; i++){
        Fizz = i% fizzValue ==0;
        Buzz = i% buzzValue ==0;

        switch(true){
            case Fizz & Buzz:{
                returnArray.push('FizzBuzz');
                break;
            }
            case Fizz:{
                returnArray.push('Fizz');
                break;
            }
            case Buzz:{
                returnArray.push('Buzz');
                break;
            }
            default:{
                returnArray.push(i);
                break;
            }
        }
    }

    return returnArray;
}

function fizzBuzzC(fizzValue, buzzValue){
    //here we'll use a teranary operator

    let returnArray = [];
    for(let i=1; i <=100; i++){
let value = ((i % fizzValue ==0 ? 'Fizz' : '') + ( i % buzzValue ==0 ? 'Buzz' : '') || i);
returnArray.push(value);
    }

    return returnArray;
}

//loop over the array and create a tableRow for each item.
function displayData(fbArray) {

    //get the table body element form the page
    let tableBody = document.querySelector('#results');

    //get the template row
    let templateRow = document.querySelector('#fbTemplate');

    //clear the table first
    tableBody.innerHTML = '';

    for (let y = 0; y < fbArray.length; y += 5) {
        let tableRow = document.importNode(templateRow.content, true);

        //grab and use the td to put into array
        let rowCols = tableRow.querySelectorAll('td');

        rowCols[0].classList.add(fbArray[y])
        rowCols[0].textContent = fbArray[y];

        rowCols[1].classList.add(fbArray[y+1])
        rowCols[1].textContent = fbArray[y + 1];

        rowCols[2].classList.add(fbArray[y+2])
        rowCols[2].textContent = fbArray[y + 2];

        rowCols[3].classList.add(fbArray[y+3])
        rowCols[3].textContent = fbArray[y + 3];

        rowCols[4].classList.add(fbArray[y+4])
        rowCols[4].textContent = fbArray[y + 4];

        tableBody.appendChild(tableRow);
    }
    //add all the rows to the table.
}