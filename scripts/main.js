// you ensure that the code within the function is executed only after all the resources 
// (HTML, CSS, images, etc.) on the webpage have been fully loaded.

window.onload = ()=> {

    go.onclick = ()=>{

        calculate(
            new Date(checkIn.value),
            Number(nights.value),

            // function in JavaScript is used to select and retrieve the first HTML element that matches a 
            // specified CSS selector within the document. It allows you to locate and work 
            // with individual elements in the DOM (Document Object Model) based on their CSS selectors.

            document.querySelector("input[name=roomType]:checked").value,
            adults.value,
            children.value,
            document.querySelector("input[name=discounts]:checked").value
        );

        output.innerText = `
                Results:
                        Original Room Cost: ${originalRoomCost}
                        Discount Amount: ${discountAmount}
                        Discount Room Cost: ${discountedRoomCost}
                        Tax Amount: ${taxAmount}
                        Total Cost: ${totalCost} 

                        `;
    }

};

