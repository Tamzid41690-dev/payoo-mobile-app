    // ...existing code...
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('Transfer-section').style.display = 'none';
    // ...existing code...
    
    
    
    document.getElementById('add-money-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const bank = document.getElementById('bank').value;
        const bankAccount = parseInt(document.getElementById('bank-account').value);
        const amount = parseInt(document.getElementById('amount-add').value);
        const pin = parseInt(document.getElementById('pin-add').value);
        const currentAmount = parseInt(document.getElementById('main-amount').innerText);
        if (!bank || isNaN(bankAccount) || isNaN(amount) || isNaN(pin)) {
            alert('Please fill in all fields correctly.');
            return;
        };
        if (pin !== 41690) {
            alert('Incorrect PIN. Please try again.');
            return;
        }
        const newAmount = currentAmount + amount;
        document.getElementById('main-amount').innerText = newAmount;
    });

    document.getElementById('add-option').addEventListener('click', function() {
        document.getElementById('add-money-section').style.display = 'block';
        document.getElementById('cashout-section').style.display = 'none';
         document.getElementById('Transfer-section').style.display = 'none';
    });
    document.getElementById('cashout-option').addEventListener('click', function() {
        document.getElementById('cashout-section').style.display = 'block';
        document.getElementById('add-money-section').style.display = 'none';
         document.getElementById('Transfer-section').style.display = 'none';
    });
    document.getElementById('transfer-option').addEventListener('click', function() {
        document.getElementById('Transfer-section').style.display = 'block';
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
    });
    document.getElementById('cashout-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const agentNumber = parseInt(document.getElementById('bank-account-cashout').value);
        const amount = parseInt(document.getElementById('amount-cashout').value);
        const pin = parseInt(document.getElementById('pin-cashout').value);
        const currentAmount = parseInt(document.getElementById('main-amount').innerText);
        if (isNaN(agentNumber) || isNaN(amount) || isNaN(pin) ) {
            alert('Please fill in all fields correctly.');
            return;
        };
        if (pin !== 41690) {
            alert('Incorrect PIN. Please try again.');
            return;
        }
        if (amount >= currentAmount) {
            alert('Insufficient balance. Please enter a lower amount.');
            return;
        }
     
        const newAmount = currentAmount - amount;
        document.getElementById('main-amount').innerText = newAmount;
    });

    document.getElementById('transfer-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const recipientNumber = parseInt(document.getElementById('transfer-account').value);
        const amount = parseInt(document.getElementById('transfer-amount').value);
        const pin = parseInt(document.getElementById('transfer-pin').value);
        const currentAmount = parseInt(document.getElementById('main-amount').innerText);
        if (isNaN(recipientNumber) || isNaN(amount) || isNaN(pin) ) {
            alert('Please fill in all fields correctly.');
            return;
        };
        if (pin !== 41690) {
            alert('Incorrect PIN. Please try again.');
            return;
        }
        if (amount >= currentAmount) {
            alert('Insufficient balance. Please enter a lower amount.');
            return;
        }
        const newAmount = currentAmount - amount;
        document.getElementById('main-amount').innerText = newAmount;
        alert('Transfer successful!');

        

    });

    document.getElementById('log-out-home').addEventListener('click', function() {
        window.location.href = 'index.html';
    });