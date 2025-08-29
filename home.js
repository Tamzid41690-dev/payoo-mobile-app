    // ...existing code...
    document.getElementById('add-money-section').style.display = 'none';
    document.getElementById('cashout-section').style.display = 'none';
    document.getElementById('Transfer-section').style.display = 'none';
    document.getElementById('bonus-section').style.display = 'none';
    document.getElementById('pay-bill-section').style.display = 'none';
    document.getElementById('trx-section').style.display = 'none';
    // ...existing code...
    function selectOption(optionId) {
    const optionIds = [
        'add-option',
        'cashout-option',
        'transfer-option',
        'bonus-option',
        'pay-bill-option',
        'trx-option'
    ];
    for (const id of optionIds) {
        const el = document.getElementById(id);
        if (el) {
            el.classList.remove('border-blue-500', 'bg-blue-50');
            el.classList.add('border-gray-200', 'bg-white');
        }
    }
    const selected = document.getElementById(optionId);
    if (selected) {
        selected.classList.remove('border-gray-200', 'bg-white');
        selected.classList.add('border-blue-500', 'bg-blue-50');
    }
}

    const trxData = [];
    
    
    
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

        const data = {
            name: 'Add Money',
            date : new Date().toLocaleDateString(),
        }
        trxData.push(data);
    });

    document.getElementById('add-option').addEventListener('click', function() {
        selectOption('add-option');
        document.getElementById('add-money-section').style.display = 'block';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('Transfer-section').style.display = 'none';
        document.getElementById('bonus-section').style.display = 'none';
         document.getElementById('pay-bill-section').style.display = 'none';
       
         

    });
    document.getElementById('cashout-option').addEventListener('click', function() {
        selectOption('cashout-option');
        document.getElementById('cashout-section').style.display = 'block';
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('Transfer-section').style.display = 'none';
        document.getElementById('bonus-section').style.display = 'none';
        document.getElementById('pay-bill-section').style.display = 'none';
        document.getElementById('trx-section').style.display = 'none';
    });
    document.getElementById('transfer-option').addEventListener('click', function() {
        selectOption('transfer-option');
        document.getElementById('Transfer-section').style.display = 'block';
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('bonus-section').style.display = 'none';
        document.getElementById('pay-bill-section').style.display = 'none';
        document.getElementById('trx-section').style.display = 'none';
    });
    document.getElementById('bonus-option').addEventListener('click', function() {
        selectOption('bonus-option');
        document.getElementById('bonus-section').style.display = 'block';
        document.getElementById('Transfer-section').style.display = 'none';
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('pay-bill-section').style.display = 'none';
        document.getElementById('trx-section').style.display = 'none';
    });
    document.getElementById('pay-bill-option').addEventListener('click', function() {
        selectOption('pay-bill-option');
        document.getElementById('pay-bill-section').style.display = 'block';
        document.getElementById('bonus-section').style.display = 'none';
        document.getElementById('Transfer-section').style.display = 'none';
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('trx-section').style.display = 'none';
    });
    document.getElementById('trx-option').addEventListener('click', function() {
        selectOption('trx-option');
        document.getElementById('trx-section').style.display = 'block';
        document.getElementById('bonus-section').style.display = 'none';
        document.getElementById('Transfer-section').style.display = 'none';
        document.getElementById('add-money-section').style.display = 'none';
        document.getElementById('cashout-section').style.display = 'none';
        document.getElementById('pay-bill-section').style.display = 'none';
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

         const data = {
            name: 'Cash Out',
            date : new Date().toLocaleDateString(),
        }
        trxData.push(data);

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

         const data = {
            name: 'Transfer',
            date : new Date().toLocaleDateString(),
        }
        trxData.push(data);

    });

    document.getElementById('bonus-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const code = document.getElementById('bonus-code').value;
        const validCode = "PAYOO2025"; // Example valid code
        const bonusAmount = 100; // Fixed bonus amount for valid code
        const currentAmount = parseInt(document.getElementById('main-amount').innerText);
        if (code !== validCode) {
            alert('Invalid bonus code. Please try again.');
            return;
        };
        const newAmount = currentAmount + bonusAmount;
        document.getElementById('main-amount').innerText = newAmount;
        alert('Bonus applied successfully! You received ' + bonusAmount + ' units.');

         const data = {
            name: 'Bonus',
            date : new Date().toLocaleDateString(),
        }
        trxData.push(data);
    });

    document.getElementById('pay-btn').addEventListener('click', function(e) {
        e.preventDefault();
        const biller = document.getElementById('pay-comp').value;
        const accountNumber = parseInt(document.getElementById('Billing-account').value);
        const amount = parseInt(document.getElementById('pay-amount').value);
        const pin = parseInt(document.getElementById('pay-pin').value);
        
        const currentAmount = parseInt(document.getElementById('main-amount').innerText);
        if (!biller || isNaN(accountNumber) || isNaN(amount) || isNaN(pin)) {
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

         const data = {
            name: 'Pay Bill',
            date : new Date().toLocaleDateString(),
        }
        trxData.push(data);

    });

    document.getElementById('trx-option').addEventListener('click', function() {

        const trxContainer = document.getElementById('trx-container');
        for (const trx of trxData) {
            const div = document.createElement('div');
            div.innerHTML = `
            <div class="bg-white p-4 m-4 rounded-2xl flex justify-between items-center">
                <div class="flex gap-4  items-center">
                    <div class="bg-[#f4f5f7] p-4 rounded-full">
                        <img src="./assets/wallet1.png" alt="">
                    </div>
                    <div>
                        <h2 class="font-bold text-lg">${trx.name}</h2>
                        <p>${trx.date}</p>
                    </div>
                </div>
                 <i class="fa-solid fa-ellipsis-vertical"></i>
          </div>
            `
            trxContainer.appendChild(div);
                      }

    });

    document.getElementById('log-out-home').addEventListener('click', function() {
        window.location.href = 'index.html';
    });