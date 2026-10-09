/*Data hiding

Modern JavaScript supports private class fields using #.*/
class BankAccount{

  #balance;

  constructor(initailBalance) {
    this.#balance = initailBalance;
  }

  getDeposit(amount) {
    this.#balance += amount;
  }

  getWithdraw(amount){
    this.#balance -= amount;
  }

  getBalance(){
    return console.log(this.#balance);
  }

}

const MyAccount = new BankAccount(1000);

MyAccount.getDeposit(1000);
MyAccount.getWithdraw(500);

MyAccount.getBalance();