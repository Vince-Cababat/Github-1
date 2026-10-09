/*
    POLYMORPHISM — MANY FORMS
Meaning

Polymorphism means:

Different objects can respond to the same operation in different ways.
 */

class Payment {
  process(amount) {
    throw new Error('process() must be implemented.');
  }
}

class CreditCardPayment extends Payment {
  process(amount) {
    console.log(`Processing ₱${amount} through credit card.`);
  }
}

class PayPalPayment extends Payment {
  process(amount) {
    console.log(`Processing ₱${amount} through PayPal.`);
  }
}

class BankTransferPayment extends Payment {
  process(amount) {
    console.log(`Processing ₱${amount} through bank transfer.`);
  }
}

function checkout(payment, amount) {
  payment.process(amount);
}

checkout(new CreditCardPayment(), 1000);
checkout(new PayPalPayment(), 1000);
checkout(new BankTransferPayment(), 1000);
