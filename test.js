const Blockchain = require("./blockchain.js");

const bitcoin = new Blockchain();

const bc1 = {
  chain: [
    {
      index: 1,
      timestamp: 1679021418053,
      transactions: [],
      nonce: 10,
      hash: "0",
      previousBlockHash: "0",
    },
    {
      index: 2,
      timestamp: 1679021621973,
      transactions: [],
      nonce: 18140,
      hash: "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
      previousBlockHash: "0",
    },
    {
      index: 3,
      timestamp: 1679021956766,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "73702750c46e11ed84244dd8d7cd5b3b",
          transactionId: "ecfccab0c46e11ed84244dd8d7cd5b3b",
        },
        {
          amount: 300000,
          sender:
            "deeee9f2292fb052bf4cd126656c2027777269595387e41c89bee256f26f4fc3",
          recipient:
            "28280040a60d691efe3db09402b0e3d9502083732f5e847aa94e0c4c74c19e17",
          transactionId: "88173670c46f11edbe899f9993b43983",
        },
      ],
      nonce: 15857,
      hash: "000024c549bc170defd989634f77865b3be2253a8e319b802559df4bc11906cf",
      previousBlockHash:
        "0000b9135b054d1131392c9eb9d03b0111d4b516824a03c35639e12858912100",
    },
    {
      index: 4,
      timestamp: 1679022023195,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "73702750c46e11ed84244dd8d7cd5b3b",
          transactionId: "b489d820c46f11ed84244dd8d7cd5b3b",
        },
        {
          amount: 20000,
          sender:
            "deeee9f2292fb052bf4cd126656c2027777269595387e41c89bee256f26f4fc3",
          recipient:
            "28280040a60d691efe3db09402b0e3d9502083732f5e847aa94e0c4c74c19e17",
          transactionId: "d4e4ece0c46f11edbe899f9993b43983",
        },
        {
          amount: 1000,
          sender:
            "deeee9f2292fb052bf4cd126656c2027777269595387e41c89bee256f26f4fc3",
          recipient:
            "28280040a60d691efe3db09402b0e3d9502083732f5e847aa94e0c4c74c19e17",
          transactionId: "d75f62c0c46f11edbe899f9993b43983",
        },
        {
          amount: 500,
          sender:
            "deeee9f2292fb052bf4cd126656c2027777269595387e41c89bee256f26f4fc3",
          recipient:
            "28280040a60d691efe3db09402b0e3d9502083732f5e847aa94e0c4c74c19e17",
          transactionId: "d9a9ef00c46f11edbe899f9993b43983",
        },
      ],
      nonce: 177974,
      hash: "00004c3e022b00fd0cda409b38ff319b6804f81eeb81b623ce88aaa19ba28031",
      previousBlockHash:
        "000024c549bc170defd989634f77865b3be2253a8e319b802559df4bc11906cf",
    },
    {
      index: 5,
      timestamp: 1679022230774,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "73702750c46e11ed84244dd8d7cd5b3b",
          transactionId: "dc229020c46f11ed84244dd8d7cd5b3b",
        },
      ],
      nonce: 9924,
      hash: "0000ec105107ff43676e9f5f4d74681b67470f5336cd5be22c02b47863e819af",
      previousBlockHash:
        "00004c3e022b00fd0cda409b38ff319b6804f81eeb81b623ce88aaa19ba28031",
    },
    {
      index: 6,
      timestamp: 1679022232019,
      transactions: [
        {
          amount: 12.5,
          sender: "00",
          recipient: "73702750c46e11ed84244dd8d7cd5b3b",
          transactionId: "57dc4cb0c47011ed84244dd8d7cd5b3b",
        },
      ],
      nonce: 130234,
      hash: "0000ebe0c883682188f55afe30a77892ac325cce0b59f63594f6c14b029a094b",
      previousBlockHash:
        "0000ec105107ff43676e9f5f4d74681b67470f5336cd5be22c02b47863e819af",
    },
  ],
  pendingTransaction: [
    {
      amount: 12.5,
      sender: "00",
      recipient: "73702750c46e11ed84244dd8d7cd5b3b",
      transactionId: "589a1e70c47011ed84244dd8d7cd5b3b",
    },
  ],
  currentNodeUrl: "http://localhost:3001",
  networkNodes: [
    "http://localhost:3002",
    "http://localhost:3003",
    "http://localhost:3004",
    "http://localhost:3005",
  ],
};

console.log(bitcoin.chainIsValid(bc1.chain));
