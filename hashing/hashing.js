"use strict";

var crypto = require("crypto"); // load the crypto library that comes with node

// The Power of a Smile
// by Tupac Shakur
var poem = [
	"The power of a gun can kill",
	"and the power of fire can burn",
	"the power of wind can chill",
	"and the power of a mind can learn",
	"the power of anger can rage",
	"inside until it tears u apart",
	"but the power of a smile",
	"especially yours can heal a frozen heart",
];

var Blockchain = {
	blocks: [],
};

// Genesis block
Blockchain.blocks.push({
	index: 0,
	hash: "000000",
	data: "",
	timestamp: Date.now(),
});

// TODO: insert each line into blockchain
console.log(Blockchain.blocks[0])
for (let line of poem) {
	createBlock(line)
}

function createBlock(_data) { // use underscore to indicate a mutable variable and differentiate it from the local instance
	let block = {
		index: Blockchain.blocks.length, // since we start with index=0, this gives the current position
		prevHash: Blockchain.blocks[Blockchain.blocks.length-1].hash, // extract previous block's hash
		data: _data,
		timestamp: Date.now()
	}
	block.hash = blockHash(block)
	Blockchain.blocks.push(block)
	console.log(block)
	return block
}

// console.log(`Blockchain is valid: ${verifyChain(Blockchain)}`);


// **********************************

function blockHash(bl) {
	// block = JSON.stringify(bl) // alternate method for passing object attributes as strings
	return crypto.createHash("sha256").update(
		// TODO: use block data to calculate hash
		`${bl.index};${bl.prevHash};${bl.data};${bl.timestamp};`
		// block // alternate method
	).digest("hex");
}
