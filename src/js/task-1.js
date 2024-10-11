//1
const depositBtn = document.querySelector(".depositBtn");
const withdrawBtn = document.querySelector(".withdrawBtn");

let bankAccount = {
  ownerName: "Max Viichuk ",
  accountNumber: "4547457",
  balance: 0,

  deposit(amount) {
    this.balance += amount;
    alert(`Операція успішна на вашому балансі: ${this.balance}`);
  },
  withdraw(amount) {
    if (amount > this.balance) {
      alert("Занадто велика сума");
    } else {
      this.balance -= amount;
      alert(`Операція успішеа на вашому балансі: ${this.balance}`);
    }
  },
};

depositBtn.addEventListener("click", () => {
  const amount = parseFloat(prompt("Ведіть суму для попвнення"));
  bankAccount.deposit(amount);
});
withdrawBtn.addEventListener("click", () => {
  const amount = parseFloat(prompt("Ведіть суму для знімання"));
  bankAccount.withdraw(amount);
});
