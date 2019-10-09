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

    if (openArray.indexOf(queue.peek()) === closeArray.indexOf(bracketArray[i])) 
      queue.pop();
    else 
      return false;
  }

  result = queue.isEmpty();
  return result;  
}
