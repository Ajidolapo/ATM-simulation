
let name = prompt("Enter your name: ");
let pin = prompt("Enter your pin: ");
const correctPin = 209;
const acctBal = 2000.76;
if(pin==correctPin){
    alert(`Your account balance is ${acctBal}.`)
    const another = confirm("Do you wish to perform another transaction?")
    if(another==true){
        const transaction = prompt("Select an action:\n Withdrawal\n Deposit\n ")
        if(transaction=="Withdrawal"){
            amount = prompt("Enter the amount you want to withdraw: ")
            if(amount <= acctBal){
                alert("Successfully withdrawn.")
                alert(`Your new balance is ${acctBal - amount}`)
            }
            else{
                alert("Insufficient funds.")
            }
        }
        else if(transaction=="Deposit"){
            let amount2 = prompt("Enter the amount you intend to deposit: ")
            newbal = amount2 + acctBal;
            alert("Successfully deposited.")
            alert(`Your new account balance is ${newbal}`)
        }
        else{
            alert("Invalid action.")
        }
    }
       
}
else{
    alert("Invalid pin!")
}
