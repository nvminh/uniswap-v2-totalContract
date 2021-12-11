const TOKENS = {
  dai: {
    address: '0x31f42841c2db5173425b5223809cf3a38fede360',
    amountDesired: (50 * 10 ** 18).toString(),
    amountMin: (30 * 10 ** 18).toString(),
    amountETHMin: (0.1 * 10 ** 18).toString(),
  },
};

const SWAP_EXACT_ETH_FOR_TOKENS = {
  dai: {
    address: '0x31f42841c2db5173425b5223809cf3a38fede360',
    amountETH: (0.01 * 10 ** 18).toString(),
  },
};

const WETH = '0xc778417E063141139Fce010982780140Aa0cD5Ab';
const DEADLINE = '2000000000';

module.exports = { TOKENS, WETH, DEADLINE, SWAP_EXACT_ETH_FOR_TOKENS };
