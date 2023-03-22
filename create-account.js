function createAccount(pin, amount = 0) {
    let balance = amount;

    function checkBalance(pinInput){
        if (pinInput !== pin) return "Invalid PIN."
        return `$${balance}`;
    }

    function deposit(pinInput, depositAmt){
        if (pinInput !== pin) return "Invalid PIN."
        balance += depositAmt;

        return `Succesfully deposited $${depositAmt}. Current balance: $${balance}.`;
    }

    function withdraw(pinInput, withdrawAmt){
        if (pinInput !== pin) return "Invalid PIN.";
        if (balance < withdrawAmt) {
            return "Withdrawal amount exceeds account balance. Transaction cancelled.";
        }
        balance -= withdrawAmt;
        return `Succesfully withdrew $${withdrawAmt}. Current balance: $${balance}.`;
    }

    function changePin(currentPin, newPin){
        if (currentPin !== pin) return "Invalid PIN.";
        
        pin = newPin;
        return "PIN successfully changed!";
    }
    
    return {
        checkBalance,
        deposit,
        withdraw,
        changePin
    };
}

module.exports = { createAccount };
