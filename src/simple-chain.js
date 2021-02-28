const chainMaker = { 
  getLength() {
    return this.chain.length
  },
  addLink(value) { 
    if (!this.chain){
      this.chain = []
    }if (value !== undefined) {
      this.chain.push(`( ${value} )`);
      return this
    }
    this.chain.push("( )")
    return this  
    },
  removeLink(position) {
    if (Number.isInteger(position) && isFinite(position)){
      this.chain.splice(position-1,1)
      return this
    }
    this.chain=[];
    throw new Error("THROWN");
    
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this
    
  },
  finishChain() {
    this.a = this.chain;
    this.chain = [];
    return this.a.join("~~")
  }
};

module.exports = chainMaker;
