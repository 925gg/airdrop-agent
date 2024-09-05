/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../../../common";
import type {
  ChibiBattleOfNationsRaffle,
  ChibiBattleOfNationsRaffleInterface,
} from "../../../../contracts/base/ChibiBattleOfNationsRaffle.sol/ChibiBattleOfNationsRaffle";

const _abi = [
  {
    inputs: [],
    name: "AccessControlBadConfirmation",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "neededRole",
        type: "bytes32",
      },
    ],
    name: "AccessControlUnauthorizedAccount",
    type: "error",
  },
  {
    inputs: [],
    name: "AlreadyJoinedRaffle",
    type: "error",
  },
  {
    inputs: [],
    name: "ECDSAInvalidSignature",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "length",
        type: "uint256",
      },
    ],
    name: "ECDSAInvalidSignatureLength",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "s",
        type: "bytes32",
      },
    ],
    name: "ECDSAInvalidSignatureS",
    type: "error",
  },
  {
    inputs: [],
    name: "EtherCannotBeAccepted",
    type: "error",
  },
  {
    inputs: [],
    name: "ExceedMaximumEntriesPerDay",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidConfiguration",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidDate",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidNumberOfEntries",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSignature",
    type: "error",
  },
  {
    inputs: [],
    name: "LandAlreadyDistributed",
    type: "error",
  },
  {
    inputs: [],
    name: "NoPlayersJoined",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "SignatureExpired",
    type: "error",
  },
  {
    inputs: [],
    name: "WinnerAlreadyPicked",
    type: "error",
  },
  {
    inputs: [],
    name: "WinnerNotPickedYet",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint64",
        name: "version",
        type: "uint64",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "LandDistributed",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "userId",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numberOfEntries",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "RaffleJoined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    name: "WinnerPicked",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MAX_ENTRIES_PER_DAY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "chibiKingdom",
    outputs: [
      {
        internalType: "contract IChibiKingdom",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "dates",
        type: "uint256[]",
      },
    ],
    name: "distributeLands",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "endDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "userId",
        type: "string",
      },
    ],
    name: "getNumberOfEntries",
    outputs: [
      {
        internalType: "uint256",
        name: "numberOfEntries",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "dates",
        type: "uint256[]",
      },
    ],
    name: "getRaffleDates",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "numberOfEntries",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "landDistributed",
            type: "bool",
          },
          {
            internalType: "address",
            name: "winner",
            type: "address",
          },
        ],
        internalType: "struct RaffleDate[]",
        name: "result",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "chibiKingdom_",
        type: "address",
      },
      {
        internalType: "address",
        name: "verifier_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startDate_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDate_",
        type: "uint256",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "date",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "userId",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "numberOfEntries",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "signature",
        type: "bytes",
      },
      {
        internalType: "uint256",
        name: "expiredAt",
        type: "uint256",
      },
    ],
    name: "joinRaffle",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256[]",
        name: "dates",
        type: "uint256[]",
      },
    ],
    name: "pickWinners",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "raffleDates",
    outputs: [
      {
        internalType: "uint256",
        name: "numberOfEntries",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "landDistributed",
        type: "bool",
      },
      {
        internalType: "address",
        name: "winner",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "rafflePlayers",
    outputs: [
      {
        internalType: "uint256",
        name: "numberOfEntries",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "wallet",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "rafflePositions",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "callerConfirmation",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "chibiKingdom_",
        type: "address",
      },
    ],
    name: "setChibiKingdom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startDate_",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "endDate_",
        type: "uint256",
      },
    ],
    name: "setDates",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "verifier_",
        type: "address",
      },
    ],
    name: "setVerifier",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startDate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "verifier",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50611ee7806100206000396000f3fe60806040526004361061018f5760003560e01c80639151f079116100d6578063d547741f1161007f578063eb990c5911610059578063eb990c591461059a578063f23bc971146105ba578063fa363b05146105e757600080fd5b8063d547741f1461053a578063dedf141e1461055a578063e660e6341461057a57600080fd5b8063a217fddf116100b0578063a217fddf146104ef578063c24a0f8b14610504578063d027c0d11461051a57600080fd5b80639151f0791461044a57806391d148541461046a5780639f99fe03146104cf57600080fd5b80632f2ff15d11610138578063505e4a7d11610112578063505e4a7d1461035a5780635437988d146103c557806376451a28146103e557600080fd5b80632f2ff15d146102e057806336568abe14610302578063375986061461032257600080fd5b8063248a9ca311610169578063248a9ca3146102395780632b2636a3146102885780632b7ac3f3146102c057600080fd5b806301ffc9a7146101cb5780630b97bc861461020057806314542d4f1461022457600080fd5b366101c6576040517fca6bd3b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b3480156101d757600080fd5b506101eb6101e6366004611979565b610607565b60405190151581526020015b60405180910390f35b34801561020c57600080fd5b5061021660005481565b6040519081526020016101f7565b34801561023057600080fd5b50610216600581565b34801561024557600080fd5b506102166102543660046119bb565b60009081527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015490565b34801561029457600080fd5b506005546102a8906001600160a01b031681565b6040516001600160a01b0390911681526020016101f7565b3480156102cc57600080fd5b506006546102a8906001600160a01b031681565b3480156102ec57600080fd5b506103006102fb3660046119f0565b6106a0565b005b34801561030e57600080fd5b5061030061031d3660046119f0565b6106ea565b34801561032e57600080fd5b5061021661033d366004611a1c565b600360209081526000928352604080842090915290825290205481565b34801561036657600080fd5b506103a16103753660046119bb565b6002602052600090815260409020805460019091015460ff81169061010090046001600160a01b031683565b6040805193845291151560208401526001600160a01b0316908201526060016101f7565b3480156103d157600080fd5b506103006103e0366004611a3e565b61073b565b3480156103f157600080fd5b5061042d610400366004611a1c565b6004602090815260009283526040808420909152908252902080546001909101546001600160a01b031682565b604080519283526001600160a01b039091166020830152016101f7565b34801561045657600080fd5b50610300610465366004611a3e565b610776565b34801561047657600080fd5b506101eb6104853660046119f0565b60009182527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408084206001600160a01b0393909316845291905290205460ff1690565b3480156104db57600080fd5b506103006104ea366004611a59565b6107b1565b3480156104fb57600080fd5b50610216600081565b34801561051057600080fd5b5061021660015481565b34801561052657600080fd5b50610216610535366004611b17565b6109a2565b34801561054657600080fd5b506103006105553660046119f0565b6109d2565b34801561056657600080fd5b50610300610575366004611a1c565b610a16565b34801561058657600080fd5b50610300610595366004611a59565b610a2d565b3480156105a657600080fd5b506103006105b5366004611b63565b610c36565b3480156105c657600080fd5b506105da6105d5366004611a59565b610dc8565b6040516101f79190611ba5565b3480156105f357600080fd5b50610300610602366004611c09565b610ed9565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061069a57507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b62680060205260409020600101546106da81611132565b6106e4838361113f565b50505050565b6001600160a01b038116331461072c576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610736828261120e565b505050565b600061074681611132565b506006805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600061078181611132565b506005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60006107bc81611132565b60008290036107de5760405163c52a9bd360e01b815260040160405180910390fd5b60005b828110156106e45760008484838181106107fd576107fd611c95565b9050602002013590506002600082815260200190815260200160002060000154600003610856576040517f0306cd0900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008181526002602052604090206001015461010090046001600160a01b0316156108ad576040517f841364aa00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000818152600260205260408120546108c690846112b4565b600083815260036020908152604080832084845282528083205486845260048352818420818552835281842082518084018452815481526001918201546001600160a01b039081168287018181528b8952600288529786902090930180547fffffffffffffffffffffff0000000000000000000000000000000000000000ff1661010090940293909317909255945192519216825293945085917f7286599a58b2822d6e330944038c6d3424134069b04156404050720b942d87ee910160405180910390a250505050808061099a90611cc1565b9150506107e1565b6000806109af848461131b565b600095865260046020908152604080882092885291905290942054949350505050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b6268006020526040902060010154610a0c81611132565b6106e4838361120e565b6000610a2181611132565b50600091909155600155565b6000610a3881611132565b6000829003610a5a5760405163c52a9bd360e01b815260040160405180910390fd5b60005b828110156106e4576000848483818110610a7957610a79611c95565b60209081029290920135600081815260029093526040909220600101549192505061010090046001600160a01b0316610ade576040517fb9442c8e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008181526002602052604090206001015460ff1615610b2a576040517f71690d7c00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000818152600260205260408082206001908101805460ff19169091179081905560055491517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b0361010090920482166004820152602481019390935216906340c10f1990604401600060405180830381600087803b158015610bb557600080fd5b505af1158015610bc9573d6000803e3d6000fd5b5050506000828152600260209081526040918290206001015491516101009092046001600160a01b031682528392507f83108c3a79e1a3c563e79ea10317c7bf4a0898b7ca358f1a96f45af2d3cc5d2a910160405180910390a25080610c2e81611cc1565b915050610a5d565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff16600081158015610c815750825b905060008267ffffffffffffffff166001148015610c9e5750303b155b905081158015610cac575080155b15610ce3576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b845467ffffffffffffffff191660011785558315610d1757845468ff00000000000000001916680100000000000000001785555b610d1f61134e565b610d2a60003361113f565b50600580546001600160a01b03808c1673ffffffffffffffffffffffffffffffffffffffff199283161790925560068054928b1692909116919091179055600087905560018690558315610dbd57845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b505050505050505050565b60608167ffffffffffffffff811115610de357610de3611cda565b604051908082528060200260200182016040528015610e2e57816020015b6040805160608101825260008082526020808301829052928201528252600019909201910181610e015790505b50905060005b82811015610ed25760026000858584818110610e5257610e52611c95565b6020908102929092013583525081810192909252604090810160002081516060810183528154815260019091015460ff81161515938201939093526101009092046001600160a01b0316908201528251839083908110610eb457610eb4611c95565b60200260200101819052508080610eca90611cc1565b915050610e34565b5092915050565b6000610ee86201518042611d06565b90506000610ef6888861131b565b9050600054891080610f09575060015489115b80610f145750888214155b15610f4b576040517f81bf7f6700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600089815260046020908152604080832084845290915290205415610f9c576040517fc909c3c800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6005861115610fd7576040517fc7a1b1d100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b85600003611011576040517f5080ed2400000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61103689898989898989600660009054906101000a90046001600160a01b0316611358565b60008981526004602090815260408083208484528252808320898155600101805473ffffffffffffffffffffffffffffffffffffffff1916331790558b83526002909152812054905b878110156110c35760008b81526003602090815260408083208584529091529020839055816110ad81611cc1565b92505080806110bb90611cc1565b91505061107f565b5060008a815260026020526040812080548992906110e2908490611d1a565b909155508a90507fdb54c261dc33a202ed008fc07bad192f92ec6c9b524210aeace9cc493eb9c9578a8a8a3360405161111e9493929190611d2d565b60405180910390a250505050505050505050565b61113c81336114b0565b50565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff16611204576000848152602082815260408083206001600160a01b03871684529091529020805460ff191660011790556111ba3390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a4600191505061069a565b600091505061069a565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff1615611204576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a4600191505061069a565b6000823360405160609190911b6bffffffffffffffffffffffff191660208201524260348201524360548201524460748201526094810184905260b4016040516020818303038152906040528051906020012060001c6113149190611d76565b9392505050565b60008282604051602001611330929190611d8a565b60405160208183030381529060405280519060200120905092915050565b611356611546565b565b81421115611392576040517f0819bdcd00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006114116113a08a6115ad565b89896113ab8a6115ad565b6113b4886115ad565b6040516020016113c8959493929190611dca565b604051602081830303815290604052805190602001207f19457468657265756d205369676e6564204d6573736167653a0a3332000000006000908152601c91909152603c902090565b9050600061145786868080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250869392505061164d9050565b9050826001600160a01b0316816001600160a01b0316146114a4576040517f8baa579f00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50505050505050505050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408083206001600160a01b038516845290915290205460ff16611542576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602481018390526044015b60405180910390fd5b5050565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16611356576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b606060006115ba83611677565b600101905060008167ffffffffffffffff8111156115da576115da611cda565b6040519080825280601f01601f191660200182016040528015611604576020820181803683370190505b5090508181016020015b600019017f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a850494508461160e57509392505050565b60008060008061165d8686611759565b92509250925061166d82826117a6565b5090949350505050565b6000807a184f03e93ff9f4daa797ed6e38ed64bf6a1f01000000000000000083106116c0577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000830492506040015b6d04ee2d6d415b85acef810000000083106116ec576d04ee2d6d415b85acef8100000000830492506020015b662386f26fc10000831061170a57662386f26fc10000830492506010015b6305f5e1008310611722576305f5e100830492506008015b612710831061173657612710830492506004015b60648310611748576064830492506002015b600a831061069a5760010192915050565b600080600083516041036117935760208401516040850151606086015160001a611785888285856118aa565b95509550955050505061179f565b50508151600091506002905b9250925092565b60008260038111156117ba576117ba611e9b565b036117c3575050565b60018260038111156117d7576117d7611e9b565b0361180e576040517ff645eedf00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600282600381111561182257611822611e9b565b0361185c576040517ffce698f700000000000000000000000000000000000000000000000000000000815260048101829052602401611539565b600382600381111561187057611870611e9b565b03611542576040517fd78bce0c00000000000000000000000000000000000000000000000000000000815260048101829052602401611539565b600080807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08411156118e5575060009150600390508261196f565b604080516000808252602082018084528a905260ff891692820192909252606081018790526080810186905260019060a0016020604051602081039080840390855afa158015611939573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b0381166119655750600092506001915082905061196f565b9250600091508190505b9450945094915050565b60006020828403121561198b57600080fd5b81357fffffffff000000000000000000000000000000000000000000000000000000008116811461131457600080fd5b6000602082840312156119cd57600080fd5b5035919050565b80356001600160a01b03811681146119eb57600080fd5b919050565b60008060408385031215611a0357600080fd5b82359150611a13602084016119d4565b90509250929050565b60008060408385031215611a2f57600080fd5b50508035926020909101359150565b600060208284031215611a5057600080fd5b611314826119d4565b60008060208385031215611a6c57600080fd5b823567ffffffffffffffff80821115611a8457600080fd5b818501915085601f830112611a9857600080fd5b813581811115611aa757600080fd5b8660208260051b8501011115611abc57600080fd5b60209290920196919550909350505050565b60008083601f840112611ae057600080fd5b50813567ffffffffffffffff811115611af857600080fd5b602083019150836020828501011115611b1057600080fd5b9250929050565b600080600060408486031215611b2c57600080fd5b83359250602084013567ffffffffffffffff811115611b4a57600080fd5b611b5686828701611ace565b9497909650939450505050565b60008060008060808587031215611b7957600080fd5b611b82856119d4565b9350611b90602086016119d4565b93969395505050506040820135916060013590565b602080825282518282018190526000919060409081850190868401855b82811015611bfc57815180518552868101511515878601528501516001600160a01b03168585015260609093019290850190600101611bc2565b5091979650505050505050565b600080600080600080600060a0888a031215611c2457600080fd5b87359650602088013567ffffffffffffffff80821115611c4357600080fd5b611c4f8b838c01611ace565b909850965060408a0135955060608a0135915080821115611c6f57600080fd5b50611c7c8a828b01611ace565b989b979a50959894979596608090950135949350505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201611cd357611cd3611cab565b5060010190565b634e487b7160e01b600052604160045260246000fd5b634e487b7160e01b600052601260045260246000fd5b600082611d1557611d15611cf0565b500490565b8082018082111561069a5761069a611cab565b606081528360608201528385608083013760006080858301015260006080601f19601f87011683010190508360208301526001600160a01b038316604083015295945050505050565b600082611d8557611d85611cf0565b500690565b8183823760009101908152919050565b6000815160005b81811015611dbb5760208185018101518683015201611da1565b50600093019283525090919050565b7f646174653a00000000000000000000000000000000000000000000000000000081526000611dfc6005830188611d9a565b7f2f7573657249643a0000000000000000000000000000000000000000000000008152858760088301377f2f6e756d6265724f66456e74726965733a000000000000000000000000000000600891870191820152611e5d6019820186611d9a565b90507f2f6578706972656441743a0000000000000000000000000000000000000000008152611e8f600b820185611d9a565b98975050505050505050565b634e487b7160e01b600052602160045260246000fdfea2646970667358221220aa3e0cf2b0536c14d520aa82f86d037f6e69adf3918f449aa425db7ecdcb0c3164736f6c63430008140033";

type ChibiBattleOfNationsRaffleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ChibiBattleOfNationsRaffleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ChibiBattleOfNationsRaffle__factory extends ContractFactory {
  constructor(...args: ChibiBattleOfNationsRaffleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      ChibiBattleOfNationsRaffle & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(
    runner: ContractRunner | null
  ): ChibiBattleOfNationsRaffle__factory {
    return super.connect(runner) as ChibiBattleOfNationsRaffle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ChibiBattleOfNationsRaffleInterface {
    return new Interface(_abi) as ChibiBattleOfNationsRaffleInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ChibiBattleOfNationsRaffle {
    return new Contract(
      address,
      _abi,
      runner
    ) as unknown as ChibiBattleOfNationsRaffle;
  }
}
