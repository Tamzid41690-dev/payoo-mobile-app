document.getElementById('myButton').addEventListener('click', function(e) {
    e.preventDefault();
    const mobileNum = 1878778943;
    const pinNum = 41690;
    const mobileNumValue = document.getElementById('mobile-Num').value;
    const pinNumValue = document.getElementById('pin').value;
    const mobileNumconverted= parseInt(mobileNum);
    const pinNumconverted= parseInt(pinNum); 
    if(mobileNumValue == mobileNumconverted && pinNumValue == pinNumconverted) {
        window.location.href = 'home.html';
    }
    else {
        alert('Invalid mobile number or PIN. Please try again.');
    }

});