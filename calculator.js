let string = "";
let buttons = document.querySelectorAll(".button, .equal");
document.getElementById("clear").addEventListener("click", () => {
    string = ""; // Clear the internal state
    document.getElementById("result").value = ""; // Clear the display
});

Array.from(buttons).forEach((button) => {
    button.addEventListener("click", (e) => {
        let value = e.target.value;
        // logic  to ensure that input not contain two operator consecutively
        let lastchar=string.slice(-1);
        let operator=['+','-','*','/','.'];
        let zeros=[0];

    
        if (value === "AC") {
            string = ""; // Clear the string
        } else if (value === "DC") {
            string = string.slice(0, -1); // Delete the last character
        } 
        else if(value=='='){
            string=eval(string).toString(); //.toString is added to convert result to string. so that we can add operation after result. 
        }

        else {
            if(!(operator.includes(lastchar)&& operator.includes(value)))
            string += value; // Append the value to the string
            
        }

        document.getElementById("result").value = string;
    
    });
});

