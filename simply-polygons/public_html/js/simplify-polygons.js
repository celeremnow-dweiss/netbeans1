/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function test() {
    // find the element in the DOM
    var box1 = document.getElementById("v1");
    var box2 = document.getElementById("v2");
    
    if box1.value 
        {if box2.value
            {
            // This creates a new element.  
            var newElement = document.createElement("div");
            // Set the value to what you want
            newElement.innerHTML = box1.value * box2.value
            document.body.appendChild(newElement);
            }
        else
            {
                alert('You haven\'t filled in ' + box2.name + '!');
                box2.focus()
                // No returns necessary, since we're not dealing with formsubmittal.
            }
    else
        { 
            alert('You haven\'t filled in ' + box1.name + '!');
            box1.focus()
        }
    newElement.innerHTML = box.value;
    document.body.appendChild(newElement)
}

// This hooks up the function we just wrote to the click event of the button.
document.getElementById("button1").onclick = test;