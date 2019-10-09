module.exports = function check(str, bracketsConfig) {
  
  class Stack {
    constructor () {
      this.items = [];
    }
  
    push (element) {
      this.items.push(element);
    }
  
    pop () {
      if (this.items.length === 0) 
        return "stack is empty!" 
      return this.items.pop();
    }
  
    peek() {
      return this.items[this.items.length-1];
    }
  
    isEmpty() {
      if (this.items.length === 0) {
        return true;
      } else return false;
    }
  }
  
  let result = true;
  let openArray = [];
  let closeArray = [];
  let queue = new Stack;
  let bracketArray = str.split("");

  bracketsConfig.forEach(bracketPair => {
    openArray.push(bracketPair[0]);
    closeArray.push(bracketPair[1]);
  })

  for (let i = 0; i < bracketArray.length; i++) {
    
    if ( (bracketArray[i] === queue.peek()) && (openArray[openArray.indexOf(bracketArray[i])] === closeArray[closeArray.indexOf(bracketArray[i])]) ) {
      queue.pop();
      
      continue;
    }
    
    if (openArray.indexOf(bracketArray[i]) != -1) {
      queue.push(bracketArray[i]); 
      continue;
    }

    if (openArray.indexOf(queue.peek()) === closeArray.indexOf(bracketArray[i])) {
      queue.pop();
      //console.log(queue);
    } else {
      return false;
    }

  }

  if (queue.isEmpty() === true) result = true;
    else result = false;

  //console.log(openArray);
  ////console.log(closeArray);
  return result;
  

    // function escapeRegExp(string) {
    //   return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // }

    // let openBracket = bracketPair[0];
    // let closeBracket = bracketPair[1];
    // let regexOpen = RegExp(escapeRegExp(openBracket),"g");
    // let regexClose = RegExp(escapeRegExp(closeBracket),"g");
    
    // if (str.match(regexOpen).length != str.match(regexClose).length) {
    //   result = false;
    // }
  

  
}
