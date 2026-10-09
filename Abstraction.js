/**
 * ABSTRACTION — SIMPLICITY
Meaning

Abstraction means:

Expose the important interface while hiding unnecessary implementation details.
 */

class Printer{
  Printing(){
    this.gettingPaper();
    this.coloringPaper();
    this.deliveringPaper();
  }

  gettingPaper(){
    console.log("Paper Inserted");
  }

  coloringPaper(){
    console.log("Designing Paper");
  }

  deliveringPaper(){
    console.log("Outputed the Brand New Paper")
  }
}

const printedPaper = new Printer();
printedPaper.Printing();