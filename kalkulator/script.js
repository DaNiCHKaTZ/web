function Calculator(displayElement) {
    this.displayElement = displayElement;
    this.buttons = Array.from(document.querySelectorAll(".button"));
    this.displayElement.innerText = "0";
    this.registerEvents();
  }
  
  Calculator.prototype.registerEvents = function () {
    this.buttons.map((button) => {
      button.addEventListener("click", (e) => {
        switch (e.target.innerText) {
          case "C":
            this.displayElement.innerText = "0";
            break;
            case "CE":
              this.displayElement.innerText = this.displayElement.innerText.replace(/\d+$/, '');
              if (this.displayElement.innerText === "") {
                this.displayElement.innerText = "0";
              }
              break;
          case "←":
            this.displayElement.innerText = this.displayElement.innerText.slice(0, -1);
            if (this.displayElement.innerText === "") {
              this.displayElement.innerText = "0";
            }
            break;
          case "=":
            try {
              let result = eval(this.displayElement.innerText);
              if (isFinite(result)) {
                this.displayElement.innerText = result;
              } else {
                throw new Error("Division by zero");
              }
            } catch (e) {
              this.displayElement.innerText = "Error!";
            }
            break;
          case "+/-":
            this.displayElement.innerText = this.displayElement.innerText.startsWith("-") ? this.displayElement.innerText.slice(1) : "-" + this.displayElement.innerText;
            break;
            case "√":
              let num = parseFloat(this.displayElement.innerText);
              if (num >= 0) {
                  this.displayElement.innerText = Math.sqrt(num).toString();
              } else {
                  this.displayElement.innerText = "Error";
              }
              break;
          case "1/x":
            try {
              this.displayElement.innerText = (1 / parseFloat(this.displayElement.innerText)).toString();
              if (!isFinite(this.displayElement.innerText)) {
                throw new Error("Division by zero");
              }
            } catch (e) {
              this.displayElement.innerText = "Error!";
            }
            break;
          case "%":
            this.displayElement.innerText = (parseFloat(this.displayElement.innerText) / 100).toString();
            break;
            default:
            let lastChar = this.displayElement.innerText.slice(-1);
            if (["+", "*", "/"].includes(e.target.innerText) && ["+", "-", "*", "/"].includes(lastChar)) {
                
                this.displayElement.innerText = this.displayElement.innerText.slice(0, -1) + e.target.innerText;
            }
            else if (["-"].includes(e.target.innerText) && ["-"].includes(lastChar)) {  
          }
          else if (["+"].includes(e.target.innerText) && ["-"].includes(lastChar)) {  
          }
              

            
            else {
                if (e.target.innerText === "." && this.displayElement.innerText.includes(".")) {
                    
                } else {
                    if (this.displayElement.innerText === "0" && e.target.innerText !== ".") {
                        this.displayElement.innerText = e.target.innerText;
                    } else {
                        this.displayElement.innerText += e.target.innerText;
                    }
                }
            }
            break;
        }
      });
    });
  };
  
  new Calculator(document.querySelector(".display"));
  