var SHA256 = require("crypto-js/sha256");
class Block {
    constructor(timeStamp, transcation, previousHash) {
        this.timeStamp = timeStamp;
        this.transcation = transcation;
        this.previousHash = previousHash;
        this.hash = this.calculateHash();
        //console.log(timeStamp, transcation, previousHash);
    }

    calculateHash() {
        return SHA256(this.timeStamp + this.transcation + this.previousHash).toString();
    }
}

var block = new Block(10, 10, 10);
console.log(block.hash);