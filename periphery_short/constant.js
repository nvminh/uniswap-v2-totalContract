const TOKENS = {
  dai: {
    address: '0x31f42841c2db5173425b5223809cf3a38fede360',
    amountDesired: (0.1 * 10 ** 18).toString(),
    amountMin: (0.1 * 10 ** 18).toString(),
    amountETHMin: (1 * 10 ** 18).toString(),
  },
  minh: {
    address: '0x6756cd4c9692292Be5D71a6491B43a88691f4847',
    amountDesired: '1000000000000000000' + '000', //21
    amountMin: '1000000000000000000' + '000', //21
    amountETHMin: '1000000000000000000'
  }
};

const SWAP_EXACT_ETH_FOR_TOKENS = {
  dai: {
    address: '0x31f42841c2db5173425b5223809cf3a38fede360',
    amountETH: (0.01 * 10 ** 18).toString(),
  },
  minh: {
    address: '0x6756cd4c9692292Be5D71a6491B43a88691f4847',
    amountETH: '100000000000000000',//17
  }
};

const WETH = '0xc778417E063141139Fce010982780140Aa0cD5Ab';
const DEADLINE = '2000000000';

module.exports = { TOKENS, WETH, DEADLINE, SWAP_EXACT_ETH_FOR_TOKENS };
