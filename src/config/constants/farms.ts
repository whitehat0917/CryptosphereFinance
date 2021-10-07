import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  // {
  //   pid: 35,
  //   risk: 5,
  //   lpSymbol: 'CRY-BTCB PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcc4556f4bb777b5c880597ee7a962f307eff1683',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-btc',
  // }, 
  // {
  //   pid: 36,
  //   risk: 5,
  //   lpSymbol: 'CRY-ETH PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x84b0e4c6b80431b31093cf18feb1cf05bdff51f4',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-eth',
  // }, 
  // {
  //   pid: 25,
  //   risk: 5,
  //   lpSymbol: 'CRY-EGLD PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1ffbEdCe98F4566E6ABedaC96855A181b307b570',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-egld',
  // },
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'CRY-BUSD PCS LP',
    lpAddresses: {
      97: '0xe22f6a3d99d52b721ce69ec061c04f896f7b474d',
      56: '0x6357d33da4c00fda43db2d5f84a3ea798bc6b534',
    },
    tokenSymbol: 'CRY',
    tokenAddresses: {
      97: '0x548afC24e769726d6A47EC3AC9b44E1d37ad6bD2',
      56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    logoName: 'cry-busd',
  },
  // {
  //   pid: 38,
  //   risk: 5,
  //   lpSymbol: 'CRY-USDT PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x33220bb7f425c5cb35b5065245258a01cdc27ad9',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-usdt',
  // },
  {
    pid: 13,
    risk: 5,
    lpSymbol: 'CRY-BNB PCS LP',
    lpAddresses: {
      97: '0x53b8ce051958a0d1f092b582ac857d9b048e1eb9',
      56: '0x31A49410762a59017034F4993e1f4C163eE64a2e',
    },
    tokenSymbol: 'CRY',
    tokenAddresses: {
      97: '0x548afC24e769726d6A47EC3AC9b44E1d37ad6bD2',
      56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
    logoName: 'cry-bnb',
  },
  // {
  //   pid: 28,
  //   risk: 5,
  //   lpSymbol: 'CRY-CAKE PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3f4046b8b0161f1f08fd64317663525882bfcf64',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-cake',
  // },
  // {
  //   pid: 27,
  //   risk: 5,
  //   lpSymbol: 'CRY-BUNNY PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9a4aaDACb965831eAeab442B3163a6DdFCda7C5a',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-bunny',
  // },
  // {
  //   pid: 46,
  //   risk: 5,
  //   lpSymbol: 'CRY-ORN PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xb84b2be331eb089e33834d7c146a62cc3938754b',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-orn',
  // },
  // {
  //   pid: 44,
  //   risk: 5,
  //   lpSymbol: 'CRY-BAND PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xf767ac0203ccfb2231c0a7c26d912f28041fc5d2',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-band',
  // },
  // {
  //   pid: 42,
  //   risk: 5,
  //   lpSymbol: 'CRY-LTC PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x69d4ba781284e8300baca8cf5b2e51d26a4c4ed0',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-ltc',
  // },
  // {
  //   pid: 40,
  //   risk: 5,
  //   lpSymbol: 'CRY-BAT PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xbd24cae49ffba72e71f78b0b7ed5d3d7097254a3',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-bat',
  // },
  // {
  //   pid: 23,
  //   risk: 5,
  //   lpSymbol: 'CRY-CAPS PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xB52f706461d4FAACcbfA2f94977664E5AC9782c0',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-caps',
  // },
  // {
  //   pid: 19,
  //   risk: 5,
  //   lpSymbol: 'CRY-PMON PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9dba8d5a36e6133093e627f02e4570b1ccbbfd5a',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-pmon',
  // },
  // {
  //   pid: 34,
  //   risk: 5,
  //   lpSymbol: 'CRY-REEF PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xeec98d827c9b63dad79d1b4a7615642a66dde35f',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-reef',
  // },
  // {
  //   pid: 30,
  //   risk: 5,
  //   lpSymbol: 'CRY-SYL PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x6a3e5a5Db5c481BA1A2b91a71f57d683B08c8619',
  //   },
  //   tokenSymbol: 'CRY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  //   logoName: 'cry-syl',
  // },
  // {
  //   pid: 17,
  //   risk: 1,
  //   lpSymbol: 'USDC-BUSD PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'usdc-busd',
  // },
  // {
  //   pid: 5,
  //   risk: 1,
  //   lpSymbol: 'USDC-BUSD GOOSE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x680dd100e4b394bda26a59dd5c119a391e747d18',
  //   },
  //   tokenSymbol: 'USDC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'usdc-busd',
  // },
  {
    pid: 14,
    risk: 3,
    lpSymbol: 'BNB-BUSD PCS LP',
    lpAddresses: {
      97: '0xa79fe8865fb3c3c053ee63ba8b7f90dda5c3f334',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x094616f0bdfb0b526bd735bf66eca0ad254ca81f',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    logoName: 'bnb-busd',
  },
  {
    pid: 2,
    risk: 3,
    lpSymbol: 'BNB-BUSD GOOSE LP',
    lpAddresses: {
      97: '0xa79fe8865fb3c3c053ee63ba8b7f90dda5c3f334',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x094616f0bdfb0b526bd735bf66eca0ad254ca81f',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    logoName: 'bnb-busd',
  },
  // {
  //   pid: 15,
  //   risk: 2,
  //   lpSymbol: 'BTCB-BNB PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x61EB789d75A95CAa3fF50ed7E47b96c132fEc082',
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   logoName: 'btcb-bnb',
  // },
  // {
  //   pid: 3,
  //   risk: 2,
  //   lpSymbol: 'BTCB-BNB GOOSE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
  //   },
  //   tokenSymbol: 'BTCB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   logoName: 'btcb-bnb',
  // },
  // {
  //   pid: 16,
  //   risk: 2,
  //   lpSymbol: 'ETH-BNB PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   logoName: 'eth-bnb',
  // },
  // {
  //   pid: 4,
  //   risk: 2,
  //   lpSymbol: 'ETH-BNB GOOSE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x70d8929d04b60af4fb9b58713ebcf18765ade422',
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   logoName: 'eth-bnb',
  // },
  // {
  //   pid: 18,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BNB PCS LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   logoName: 'cake-bnb',
  // },
  {
    pid: 7,
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'CRY',
    lpAddresses: {
      97: '0xe22f6a3d99d52b721ce69ec061c04f896f7b474d',
      56: '0x6357d33da4c00fda43db2d5f84a3ea798bc6b534', // CRY-BUSD LP
    },
    tokenSymbol: 'CRY',
    tokenAddresses: {
      97: '0x548afC24e769726d6A47EC3AC9b44E1d37ad6bD2',
      56: '0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
    logoName: 'cry',
  },
  // {
  //   pid: 24,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'EGLD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x85889A1C541EA4f026C02c7793E0B729cC71D84a', // EGLD-BUSD LP
  //   },
  //   tokenSymbol: 'EGLD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbf7c81fff98bbe61b40ed186e4afd6ddd01337fe',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'egld',
  //  },
  //  {
  //    pid: 10,
  //    risk: 2,
  //    isTokenOnly: true,
  //    lpSymbol: 'BTCB',
  //    lpAddresses: {
  //      97: '',
  //      56: '0xb8875e207ee8096a929d543c9981c9586992eacb', // BTCB-BUSD LP
  //    },
  //    tokenSymbol: 'BTCB',
  //    tokenAddresses: {
  //      97: '',
  //      56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //    },
  //    quoteTokenSymbol: QuoteToken.BUSD,
  //    quoteTokenAdresses: contracts.busd,
  //    logoName: 'btcb',
  //  },
  //  {
  //    pid: 11,
  //    risk: 2,
  //    isTokenOnly: true,
  //    lpSymbol: 'ETH',
  //    lpAddresses: {
  //      97: '',
  //      56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //    },
  //    tokenSymbol: 'ETH',
  //    tokenAddresses: {
  //      97: '',
  //      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //    },
  //    quoteTokenSymbol: QuoteToken.BUSD,
  //    quoteTokenAdresses: contracts.busd,
  //    logoName: 'eth',
  //  },
  //  {
  //    pid: 8,
  //    risk: 1,
  //    isTokenOnly: true,
  //    lpSymbol: 'BUSD',
  //    lpAddresses: {
  //      97: '',
  //      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // CRY-BUSD LP (BUSD-BUSD will ignore)
  //    },
  //    tokenSymbol: 'BUSD',
  //    tokenAddresses: {
  //      97: '',
  //      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //    },
  //    quoteTokenSymbol: QuoteToken.BUSD,
  //    quoteTokenAdresses: contracts.busd,
  //    logoName: 'busd',
  //  },
  //  {
  //    pid: 37,
  //    risk: 1,
  //    isTokenOnly: true,
  //    lpSymbol: 'USDT',
  //    lpAddresses: {
  //      97: '',
  //      56: '0x7efaef62fddcca950418312c6c91aef321375a00', // CRY-BUSD LP (BUSD-BUSD will ignore)
  //    },
  //    tokenSymbol: 'USDT',
  //    tokenAddresses: {
  //      97: '',
  //      56: '0x55d398326f99059ff775485246999027b3197955',
  //    },
  //    quoteTokenSymbol: QuoteToken.BUSD,
  //    quoteTokenAdresses: contracts.busd,
  //    logoName: 'usdt',
  //  },
  //  {
  //    pid: 9,
  //    risk: 3,
  //    isTokenOnly: true,
  //    lpSymbol: 'WBNB',
  //    lpAddresses: {
  //      97: '',
  //      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //    },
  //    tokenSymbol: 'WBNB',
  //    tokenAddresses: {
  //      97: '',
  //      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //    },
  //    quoteTokenSymbol: QuoteToken.BUSD,
  //    quoteTokenAdresses: contracts.busd,
  //    logoName: 'wbnb',
  //  },
  //  {
  //    pid: 12,
  //    risk: 4,
  //    isTokenOnly: true,
  //    lpSymbol: 'CAKE',
  //    lpAddresses: {
  //      97: '',
  //      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
  //    },
  //    tokenSymbol: 'CAKE',
  //    tokenAddresses: {
  //      97: '',
  //      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //    },
  //    quoteTokenSymbol: QuoteToken.BUSD,
  //    quoteTokenAdresses: contracts.busd,
  //    logoName: 'cake',
  //  },
  //  {
  //   pid: 26,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUNNY',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x3bf6fa45b3a1bcfdbce9687ebca67bc316faa996', // BUNNY-BUSD LP
  //   },
  //   tokenSymbol: 'BUNNY',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xc9849e6fdb743d08faee3e34dd2d1bc69ea11a51',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'bunny',
  //  },
  // {
  //   pid: 6,
  //   risk: 4,
  //   lpSymbol: 'CAKE-BNB GOOSE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  //   logoName: 'cake-bnb',
  // },
  // {
  //   pid: 43,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BAND',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc7fee99cdaf79eeb7b5ce84964bd644bd3510f0a', // BAND-BUSD LP
  //   },
  //   tokenSymbol: 'BAND',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xAD6cAEb32CD2c308980a548bD0Bc5AA4306c6c18',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'band',
  // },
  // {
  //   pid: 41,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'LTC',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x9b60db1da3bec30ef144ba5a908147c562ff822a', // LTC-BUSD LP
  //   },
  //   tokenSymbol: 'LTC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x4338665CBB7B2485A8855A139b75D5e34AB0DB94',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'ltc',
  // },
  // {
  //   pid: 39,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'BAT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x422e73ed458760517ec46c049f791d7cba8a5624', // BAT-BUSD LP
  //   },
  //   tokenSymbol: 'BAT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x101d82428437127bf1608f699cd651e6abf9766e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'bat',
  // },
  // {
  //   pid: 21,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'PMON',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xcdb0016d97fd0e7ec2c3b78aa4786cbd8e19c14c', // PMON-BUSD LP
  //   },
  //   tokenSymbol: 'PMON',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x1796ae0b0fa4862485106a0de9b654efe301d0b2',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'pmon',
  // },
  // {
  //   pid: 22,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAPS',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x86351828bfd3c7fbaff6e512474484c639d75923', // CAPS-BUSD LP
  //   },
  //   tokenSymbol: 'CAPS',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xffba7529ac181c2ee1844548e6d7061c9a597df4',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'caps',
  // }, 
  // {
  //   pid: 32,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'REEF',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xe3ed7c4990f610b0171454fd001d2fac306f7326', // REEF-BUSD LP
  //   },
  //   tokenSymbol: 'REEF',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf21768ccbc73ea5b6fd3c687208a7c2def2d966e',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  //   logoName: 'reef',
  //  },

]

export default farms