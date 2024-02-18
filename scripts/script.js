const seatButtons = document.querySelectorAll('.seat_btn');
const TotalpriceDisplay=document.getElementById('totalPrice')
const grandprice=document.getElementById('grandprice')
const seatsLeftDisplay = document.getElementById('seatsLeft');
const subscriptionDetails = document.getElementById('subscriptionDetails');
const tableSetInfo = document.getElementById('seatInfo');
const applyCopun = document.getElementById('applyCopun');
const couponInput = document.getElementById('couponInput');
const inputNumber = document.getElementById('inputNumber');
const invalid = document.getElementById('invalid');
const nextbutton = document.getElementById('nextbutton');
const modal = document.getElementById('modal');
const overlay = document.getElementById('overlay');
let clickFullfil=0
let value=4
let totalPrice = 0;
let seatsLeft = 40;
const ticketPrice = 550;
seatButtons.forEach(button => {
    button.addEventListener('click', () => {
        if (clickFullfil < 4) {
            clickFullfil++;
            console.log(button.textContent, 'clicked');
            button.disabled = true;
            button.classList = 'w-fit lg:w-[6em] btn bg-[#33b933]';
            
            // Increment total price and update display
            totalPrice += ticketPrice;
            TotalpriceDisplay.innerText = totalPrice;
            grandprice.innerText = totalPrice;

            // Decrement seats left and update display
            seatsLeft--;
            seatsLeftDisplay.textContent = seatsLeft;
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${button.textContent}</td>
                <td>${'Economy'}</td>
                <td>$${ticketPrice.toFixed(2)}</td>
            `;
            subscriptionDetails.appendChild(row);
            inputNumber.disabled = false; 
            // Check if exactly 4 buttons have been clicked
            if (clickFullfil === 4) {
                applyCopun.disabled = false; // Enable the "Apply" button
                // Enable the "Apply" button
            }
        }
    });
});



applyCopun.addEventListener('click',()=>{
    const couponValue = couponInput.value;
    if (couponValue.toUpperCase() === 'NEW15') { // Check if the coupon value is 'NEW15'
        const discountAmount = totalPrice * 0.15;
        const discountedTotalPrice = totalPrice - discountAmount;
        grandprice.innerText=discountedTotalPrice
        applyCopun.disabled=true
        couponInput.value='success'
    }
    else if (couponValue === 'Couple20') { // Check if the coupon value is 'NEW15'
        const discountAmount = totalPrice * 0.20;
        const discountedTotalPrice = totalPrice - discountAmount;
        grandprice.innerText=discountedTotalPrice
        applyCopun.disabled=true
        couponInput.value='success'
        invalid.innerText='Success'
    }else{
       invalid.innerText='Invalid Copoun'
    }
})

// next button
inputNumber.addEventListener('input', () => {
    if (inputNumber.value.length >= 1) {
        nextbutton.disabled = false;
    } 
});



// module

function openModal() {
    modal.style.display = 'block';
    overlay.style.display = 'block';
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
}

// Event listener for nextButton
nextbutton.addEventListener('click', () => {
    openModal();
});

// Event listener for closing the modal when clicking on the overlay or close button
overlay.addEventListener('click', () => {
    closeModal();
});

document.querySelector('.close').addEventListener('click', () => {
    closeModal();
});


/* 

if(input.vallue ==='new20'){
    applybtn.function(){
        totalprice % 15
    }
}
else if(input.vallue ==='copule20'){
    applybtn.function(){
        totalprice % 20
    }else{
        console.log(not valid)
    }
}

*/