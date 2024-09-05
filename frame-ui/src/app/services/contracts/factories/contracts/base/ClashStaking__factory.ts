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
import type { NonPayableOverrides } from "../../../common";
import type {
  ClashStaking,
  ClashStakingInterface,
} from "../../../contracts/base/ClashStaking";

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
    inputs: [
      {
        internalType: "address",
        name: "target",
        type: "address",
      },
    ],
    name: "AddressEmptyCode",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "AddressInsufficientBalance",
    type: "error",
  },
  {
    inputs: [],
    name: "EtherCannotBeAccepted",
    type: "error",
  },
  {
    inputs: [],
    name: "FailedInnerCall",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidAmount",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidInitialization",
    type: "error",
  },
  {
    inputs: [],
    name: "InvalidSender",
    type: "error",
  },
  {
    inputs: [],
    name: "NotInitializing",
    type: "error",
  },
  {
    inputs: [],
    name: "ReentrancyGuardReentrantCall",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "token",
        type: "address",
      },
    ],
    name: "SafeERC20FailedOperation",
    type: "error",
  },
  {
    inputs: [],
    name: "StakingNotAvailable",
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
        indexed: false,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint40",
        name: "stakedAt",
        type: "uint40",
      },
      {
        indexed: false,
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "enum LockPeriod",
        name: "lockPeriod",
        type: "uint8",
      },
    ],
    name: "Staked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "transactionId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "enum TransactionStatus",
        name: "status",
        type: "uint8",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "score",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint40",
        name: "unstakedAt",
        type: "uint40",
      },
    ],
    name: "Unstaked",
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
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum LockPeriod",
        name: "lockPeriod",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "calculateScore",
    outputs: [
      {
        internalType: "uint256",
        name: "score",
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
        name: "transactionId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "calculateScoreByTransaction",
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
    name: "clashToken",
    outputs: [
      {
        internalType: "contract IERC20",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "emissionPeriod",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getNumberOfTransactionsByUser",
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
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "getUserActiveTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "transactionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "score",
            type: "uint256",
          },
          {
            internalType: "uint40",
            name: "stakedAt",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "unstakedAt",
            type: "uint40",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "enum LockPeriod",
            name: "lockPeriod",
            type: "uint8",
          },
          {
            internalType: "enum TransactionStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct TransactionWithId[]",
        name: "userTransactions",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "from",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "to",
        type: "uint256",
      },
    ],
    name: "getUserTransactions",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "transactionId",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "score",
            type: "uint256",
          },
          {
            internalType: "uint40",
            name: "stakedAt",
            type: "uint40",
          },
          {
            internalType: "uint40",
            name: "unstakedAt",
            type: "uint40",
          },
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "enum LockPeriod",
            name: "lockPeriod",
            type: "uint8",
          },
          {
            internalType: "enum TransactionStatus",
            name: "status",
            type: "uint8",
          },
        ],
        internalType: "struct TransactionWithId[]",
        name: "userTransactions",
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
        name: "clashToken_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "startTime_",
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
        name: "clashToken_",
        type: "address",
      },
    ],
    name: "setClashToken",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "emissionPeriod_",
        type: "uint256",
      },
    ],
    name: "setEmissionPeriod",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "startTime_",
        type: "uint256",
      },
    ],
    name: "setStartTimestamp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "enum LockPeriod",
        name: "lockPeriod",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "startTime",
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
    name: "totalTransactions",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "transactions",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "score",
        type: "uint256",
      },
      {
        internalType: "uint40",
        name: "stakedAt",
        type: "uint40",
      },
      {
        internalType: "uint40",
        name: "unstakedAt",
        type: "uint40",
      },
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "enum LockPeriod",
        name: "lockPeriod",
        type: "uint8",
      },
      {
        internalType: "enum TransactionStatus",
        name: "status",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "unstake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "userTransactionIds",
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
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b5061258d806100206000396000f3fe60806040526004361061018f5760003560e01c80637cc2a960116100d6578063b9a600381161007f578063ceb01d8611610059578063ceb01d861461055e578063d547741f1461057e578063ee821fc41461059e57600080fd5b8063b9a6003814610508578063c44bef751461051e578063cd6dc6871461053e57600080fd5b80639ace38c2116100b05780639ace38c214610452578063a217fddf146104dd578063a5fbe1b7146104f257600080fd5b80637cc2a960146103ad57806391d14854146103cd578063991f2fac1461043257600080fd5b80633dbd9feb116101385780635e050f48116101125780635e050f4814610357578063786fc9041461037757806378e979251461039757600080fd5b80633dbd9feb146102e157806346227037146103175780634cdb0f501461033757600080fd5b80632f2ff15d116101695780632f2ff15d1461027457806336568abe1461029457806337526fca146102b457600080fd5b806301ffc9a7146101cb578063248a9ca3146102005780632def66201461025d57600080fd5b366101c6576040517fca6bd3b100000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600080fd5b3480156101d757600080fd5b506101eb6101e63660046120d5565b6105d6565b60405190151581526020015b60405180910390f35b34801561020c57600080fd5b5061024f61021b366004612117565b60009081527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015490565b6040519081526020016101f7565b34801561026957600080fd5b5061027261066f565b005b34801561028057600080fd5b5061027261028f36600461214c565b610795565b3480156102a057600080fd5b506102726102af36600461214c565b6107df565b3480156102c057600080fd5b506102d46102cf366004612178565b610830565b6040516101f791906121e5565b3480156102ed57600080fd5b5061024f6102fc3660046122a0565b6001600160a01b031660009081526001602052604090205490565b34801561032357600080fd5b5061024f6103323660046122bb565b610b70565b34801561034357600080fd5b506102726103523660046122a0565b610ba1565b34801561036357600080fd5b5061024f6103723660046122e5565b610bdc565b34801561038357600080fd5b5061024f610392366004612316565b610cd6565b3480156103a357600080fd5b5061024f60035481565b3480156103b957600080fd5b506102726103c8366004612351565b610d7b565b3480156103d957600080fd5b506101eb6103e836600461214c565b60009182527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408084206001600160a01b0393909316845291905290205460ff1690565b34801561043e57600080fd5b5061027261044d366004612117565b61107a565b34801561045e57600080fd5b506104ca61046d366004612117565b60006020819052908152604090208054600182015460029092015490919064ffffffffff80821691650100000000008104909116906001600160a01b03600160501b8204169060ff600160f01b8204811691600160f81b90041687565b6040516101f7979695949392919061238d565b3480156104e957600080fd5b5061024f600081565b3480156104fe57600080fd5b5061024f60045481565b34801561051457600080fd5b5061024f60025481565b34801561052a57600080fd5b50610272610539366004612117565b61108b565b34801561054a57600080fd5b506102726105593660046122bb565b61109c565b34801561056a57600080fd5b506102d46105793660046122a0565b611221565b34801561058a57600080fd5b5061027261059936600461214c565b611625565b3480156105aa57600080fd5b506005546105be906001600160a01b031681565b6040516001600160a01b0390911681526020016101f7565b60007fffffffff0000000000000000000000000000000000000000000000000000000082167f7965db0b00000000000000000000000000000000000000000000000000000000148061066957507f01ffc9a7000000000000000000000000000000000000000000000000000000007fffffffff000000000000000000000000000000000000000000000000000000008316145b92915050565b610677611669565b336000908152600160209081526040808320805482518185028101850190935280835291929091908301828280156106ce57602002820191906000526020600020905b8154815260200190600101908083116106ba575b5050505050905060005b815181101561076857600080808484815181106106f7576106f76123e5565b60200260200101518152602001908152602001600020600201601f9054906101000a900460ff16600281111561072f5761072f6121ab565b0361075657610756828281518110610749576107496123e5565b60200260200101516116cc565b8061076081612411565b9150506106d8565b505061079360017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b62680060205260409020600101546107cf8161198a565b6107d98383611997565b50505050565b6001600160a01b0381163314610821576040517f6697b23200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b61082b8282611a66565b505050565b6001600160a01b038316600090815260016020908152604080832080548251818502810185019093528083526060949383018282801561088f57602002820191906000526020600020905b81548152602001906001019080831161087b575b50505050509050826000036108af57600181516108ac919061242a565b92505b805167ffffffffffffffff8111156108c9576108c961243d565b60405190808252806020026020018201604052801561094157816020015b61092e6040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a081018290529060c082019081526020016000905290565b8152602001906001900390816108e75790505b509150835b838111610b67576000806000848481518110610964576109646123e5565b6020908102919091018101518252818101929092526040908101600020815160e08101835281548152600182015493810193909352600281015464ffffffffff808216938501939093526501000000000081049092166060840152600160501b82046001600160a01b031660808401529060a0830190600160f01b900460ff1660038111156109f5576109f56121ab565b6003811115610a0657610a066121ab565b815260200160028201601f9054906101000a900460ff166002811115610a2e57610a2e6121ab565b6002811115610a3f57610a3f6121ab565b815250509050604051806101000160405280848481518110610a6357610a636123e5565b602090810291909101810151825283519082015260400160008360c001516002811115610a9257610a926121ab565b14610aa1578260200151610ac0565b610ac083600001518460a00151856040015164ffffffffff1642610cd6565b8152602001826040015164ffffffffff168152602001826060015164ffffffffff16815260200182608001516001600160a01b031681526020018260a001516003811115610b1057610b106121ab565b81526020018260c001516002811115610b2b57610b2b6121ab565b905284610b38888561242a565b81518110610b4857610b486123e5565b6020026020010181905250508080610b5f90612411565b915050610946565b50509392505050565b60016020528160005260406000208181548110610b8c57600080fd5b90600052602060002001600091509150505481565b6000610bac8161198a565b506005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600082815260208181526040808320815160e08101835281548152600182015493810193909352600281015464ffffffffff808216938501939093526501000000000081049092166060840152600160501b82046001600160a01b0316608084015283929160a0830190600160f01b900460ff166003811115610c6157610c616121ab565b6003811115610c7257610c726121ab565b815260200160028201601f9054906101000a900460ff166002811115610c9a57610c9a6121ab565b6002811115610cab57610cab6121ab565b905250805160a08201516040830151929350610cce9264ffffffffff1686610cd6565b949350505050565b6000806004548484610ce8919061242a565b610cf29190612453565b905060005b81811015610d715760008160045460035488610d13919061242a565b610d1d9190612453565b610d279190612475565b905068056bc75e2d63100000610d3d8883611b0c565b610d47908a612488565b610d519190612453565b610d5b9085612475565b9350508080610d6990612411565b915050610cf7565b5050949350505050565b610d83611669565b82600003610dbd576040517f2c5211c600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600354421015610df9576040517fb559376800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6002546001600160a01b03821615610e115781610e13565b335b915060006040518060e00160405280868152602001600081526020014264ffffffffff168152602001600064ffffffffff168152602001846001600160a01b03168152602001856003811115610e6b57610e6b6121ab565b815260200160009052600083815260208181526040918290208351815590830151600182015590820151600282018054606085015160808601516001600160a01b0316600160501b027fffff0000000000000000000000000000000000000000ffffffffffffffffffff64ffffffffff928316650100000000000269ffffffffffffffffffff199094169290951691909117919091179283168117825560a08501519495508594927fff00ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff9091167fff000000000000000000000000000000000000000000ffffffffffffffffffff90911617600160f01b836003811115610f7357610f736121ab565b021790555060c082015181600201601f6101000a81548160ff02191690836002811115610fa257610fa26121ab565b0217905550506002805491506000610fb983612411565b90915550506001600160a01b0383166000908152600160208181526040832080549283018155835290912001829055611000336005546001600160a01b0316903088611ca0565b7f1011dae3157ab991f4144e313d8766ad3e9277508228e8cb10a100a5a53b768a828260000151836040015184608001518560a0015160405161104795949392919061249f565b60405180910390a1505061082b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b60006110858161198a565b50600455565b60006110968161198a565b50600355565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a00805468010000000000000000810460ff16159067ffffffffffffffff166000811580156110e75750825b905060008267ffffffffffffffff1660011480156111045750303b155b905081158015611112575080155b15611149576040517ff92ee8a900000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b845467ffffffffffffffff19166001178555831561117d57845468ff00000000000000001916680100000000000000001785555b611185611d1c565b61118d611d24565b611198600033611997565b506005805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b038916179055600386905562015180600455831561121857845468ff000000000000000019168555604051600181527fc7f505b2f371ae2175ee4913f4499e1f2633a7b5936321eed1cdaeb6115181d29060200160405180910390a15b50505050505050565b6001600160a01b038116600090815260016020908152604080832080548251818502810185019093528083526060949383018282801561128057602002820191906000526020600020905b81548152602001906001019080831161126c575b505050505090506000805b825181101561130757600080808584815181106112aa576112aa6123e5565b60200260200101518152602001908152602001600020600201601f9054906101000a900460ff1660028111156112e2576112e26121ab565b036112f557816112f181612411565b9250505b806112ff81612411565b91505061128b565b508067ffffffffffffffff8111156113215761132161243d565b60405190808252806020026020018201604052801561139957816020015b6113866040805161010081018252600080825260208201819052918101829052606081018290526080810182905260a081018290529060c082019081526020016000905290565b81526020019060019003908161133f5790505b5092506000805b835181101561161c57600080808684815181106113bf576113bf6123e5565b60200260200101518152602001908152602001600020600201601f9054906101000a900460ff1660028111156113f7576113f76121ab565b0361160a576000806000868481518110611413576114136123e5565b6020908102919091018101518252818101929092526040908101600020815160e08101835281548152600182015493810193909352600281015464ffffffffff808216938501939093526501000000000081049092166060840152600160501b82046001600160a01b031660808401529060a0830190600160f01b900460ff1660038111156114a4576114a46121ab565b60038111156114b5576114b56121ab565b815260200160028201601f9054906101000a900460ff1660028111156114dd576114dd6121ab565b60028111156114ee576114ee6121ab565b815250509050604051806101000160405280868481518110611512576115126123e5565b602090810291909101810151825283519082015260400160008360c001516002811115611541576115416121ab565b1461155057826020015161156f565b61156f83600001518460a00151856040015164ffffffffff1642610cd6565b8152602001826040015164ffffffffff168152602001826060015164ffffffffff16815260200182608001516001600160a01b031681526020018260a0015160038111156115bf576115bf6121ab565b81526020018260c0015160028111156115da576115da6121ab565b8152508684815181106115ef576115ef6123e5565b6020026020010181905250828061160590612411565b935050505b8061161481612411565b9150506113a0565b50505050919050565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602052604090206001015461165f8161198a565b6107d98383611a66565b7f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f008054600119016116c6576040517f3ee5aeb500000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60029055565b6000818152602081905260409020600201546001600160a01b03600160501b909104163314611727576040517fddb5de5e00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b600081815260208181526040808320815160e08101835281548152600182015493810193909352600281015464ffffffffff808216938501939093526501000000000081049092166060840152600160501b82046001600160a01b031660808401529060a0830190600160f01b900460ff1660038111156117aa576117aa6121ab565b60038111156117bb576117bb6121ab565b815260200160028201601f9054906101000a900460ff1660028111156117e3576117e36121ab565b60028111156117f4576117f46121ab565b815250509050600080600061180c8460a00151611d34565b90504261181c8262015180612488565b856040015164ffffffffff166118329190612475565b421015611842576001935061187c565b6002935061186585600001518660a00151876040015164ffffffffff1642610cd6565b600087815260208190526040902060010181905592505b60008681526020819052604090206002908101805486927effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff90911690600160f81b9084908111156118ce576118ce6121ab565b02179055506000868152602081905260409020600201805469ffffffffff000000000019166501000000000064ffffffffff84160217905561191f3386516005546001600160a01b03169190611da1565b7ff304d64d1aedaabce9d21258c4c9a6d55428a9376d5933adc0db56acd3b106ca8685858460405161195494939291906124d6565b60405180910390a1505050505050565b60017f9b779b17422d0df92223018b32b4d1fa46e071723d6817e2486d003becc55f0055565b6119948133611dd2565b50565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff16611a5c576000848152602082815260408083206001600160a01b03871684529091529020805460ff19166001179055611a123390565b6001600160a01b0316836001600160a01b0316857f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a46001915050610669565b6000915050610669565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602081815260408084206001600160a01b038616855290915282205460ff1615611a5c576000848152602082815260408083206001600160a01b0387168085529252808320805460ff1916905551339287917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a46001915050610669565b600080836003811115611b2157611b216121ab565b03611b2e57506064610669565b6001836003811115611b4257611b426121ab565b03611bc15760c86003831015611b59579050610669565b601e8310611b6b576064915050610669565b611b7660028461242a565b611b8190600a612488565b611b8c906078612475565b8111611b99576078611bb9565b611ba460028461242a565b611baf90600a612488565b611bb9908261242a565b915050610669565b6002836003811115611bd557611bd56121ab565b03611c2d5761012c6003831015611bed579050610669565b603c8310611bff576064915050610669565b611c0a60028461242a565b611c1590600a612488565b611c2090608c612475565b8111611b9957608c611bb9565b6101906003831015611c40579050610669565b605a8310611c52576064915050610669565b611c5d60028461242a565b611c6890600a612488565b611c739060b4612475565b8111611c805760b4610cce565b611c8b60028461242a565b611c9690600a612488565b610cce908261242a565b6040516001600160a01b0384811660248301528381166044830152606482018390526107d99186918216906323b872dd906084015b604051602081830303815290604052915060e01b6020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050611e68565b610793611ee4565b611d2c611ee4565b610793611f4b565b60006001826003811115611d4a57611d4a6121ab565b03611d575750601e919050565b6002826003811115611d6b57611d6b6121ab565b03611d785750603c919050565b6003826003811115611d8c57611d8c6121ab565b03611d995750605a919050565b506000919050565b6040516001600160a01b0383811660248301526044820183905261082b91859182169063a9059cbb90606401611cd5565b60008281527f02dd7bc7dec4dceedda775e58dd541e08a116c6c53815c0bd028192f7b626800602090815260408083206001600160a01b038516845290915290205460ff16611e64576040517fe2517d3f0000000000000000000000000000000000000000000000000000000081526001600160a01b0382166004820152602481018390526044015b60405180910390fd5b5050565b6000611e7d6001600160a01b03841683611f53565b90508051600014158015611ea2575080806020019051810190611ea09190612506565b155b1561082b576040517f5274afe70000000000000000000000000000000000000000000000000000000081526001600160a01b0384166004820152602401611e5b565b7ff0c57e16840df040f15088dc2f81fe391c3923bec73e23a9662efc9c229c6a005468010000000000000000900460ff16610793576040517fd7e6bcf800000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b611964611ee4565b6060611f6183836000611f68565b9392505050565b606081471015611fa6576040517fcd786059000000000000000000000000000000000000000000000000000000008152306004820152602401611e5b565b600080856001600160a01b03168486604051611fc29190612528565b60006040518083038185875af1925050503d8060008114611fff576040519150601f19603f3d011682016040523d82523d6000602084013e612004565b606091505b509150915061201486838361201e565b9695505050505050565b6060826120335761202e82612093565b611f61565b815115801561204a57506001600160a01b0384163b155b1561208c576040517f9996b3150000000000000000000000000000000000000000000000000000000081526001600160a01b0385166004820152602401611e5b565b5080611f61565b8051156120a35780518082602001fd5b6040517f1425ea4200000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b6000602082840312156120e757600080fd5b81357fffffffff0000000000000000000000000000000000000000000000000000000081168114611f6157600080fd5b60006020828403121561212957600080fd5b5035919050565b80356001600160a01b038116811461214757600080fd5b919050565b6000806040838503121561215f57600080fd5b8235915061216f60208401612130565b90509250929050565b60008060006060848603121561218d57600080fd5b61219684612130565b95602085013595506040909401359392505050565b634e487b7160e01b600052602160045260246000fd5b600481106121d1576121d16121ab565b9052565b600381106121d1576121d16121ab565b602080825282518282018190526000919060409081850190868401855b82811015612293578151805185528681015187860152858101518686015260608082015164ffffffffff908116918701919091526080808301519091169086015260a0808201516001600160a01b03169086015260c080820151612268828801826121c1565b505060e0908101519061227d868201836121d5565b5050610100939093019290850190600101612202565b5091979650505050505050565b6000602082840312156122b257600080fd5b611f6182612130565b600080604083850312156122ce57600080fd5b6122d783612130565b946020939093013593505050565b600080604083850312156122f857600080fd5b50508035926020909101359150565b80356004811061214757600080fd5b6000806000806080858703121561232c57600080fd5b8435935061233c60208601612307565b93969395505050506040820135916060013590565b60008060006060848603121561236657600080fd5b8335925061237660208501612307565b915061238460408501612130565b90509250925092565b8781526020810187905264ffffffffff8681166040830152851660608201526001600160a01b038416608082015260e081016123cc60a08301856121c1565b6123d960c08301846121d5565b98975050505050505050565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b600060018201612423576124236123fb565b5060010190565b81810381811115610669576106696123fb565b634e487b7160e01b600052604160045260246000fd5b60008261247057634e487b7160e01b600052601260045260246000fd5b500490565b80820180821115610669576106696123fb565b8082028115828204841417610669576106696123fb565b8581526020810185905264ffffffffff841660408201526001600160a01b038316606082015260a0810161201460808301846121c1565b848152608081016124ea60208301866121d5565b83604083015264ffffffffff8316606083015295945050505050565b60006020828403121561251857600080fd5b81518015158114611f6157600080fd5b6000825160005b81811015612549576020818601810151858301520161252f565b50600092019182525091905056fea26469706673582212206ee75eac88a739e66f2f48ae1873da8245330337407d30ea627b12d0356ffc0664736f6c63430008140033";

type ClashStakingConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ClashStakingConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ClashStaking__factory extends ContractFactory {
  constructor(...args: ClashStakingConstructorParams) {
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
      ClashStaking & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ClashStaking__factory {
    return super.connect(runner) as ClashStaking__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ClashStakingInterface {
    return new Interface(_abi) as ClashStakingInterface;
  }
  static connect(
    address: string,
    runner?: ContractRunner | null
  ): ClashStaking {
    return new Contract(address, _abi, runner) as unknown as ClashStaking;
  }
}
