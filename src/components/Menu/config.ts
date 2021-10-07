import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Buy CRY',
        href: 'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
      },
      {
        label: 'Liquidity',
        href: 'https://cryptosphace.gitbook.io/cryptospace/products/yield-farming/how-to-enter-in-pools',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Staking',
    icon: 'PoolIcon',
    href: '/staking',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
   {
     label: 'Lottery',
     icon: 'TicketIcon',
     href: '/lottery',
   },
   // {
    // label: 'Referral',
    // icon: 'ReferralIcon',
    // href: '/referral',
  //  },
   {
     label: 'Collectible NFTs (soon)',
     icon: 'NftIcon',
     href: '#',
   },
   {
    label: 'Launchpad (soon)',
    icon: 'LaunchIcon',
    href: '#',
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'Token',
        href: 'https://pancakeswap.info/token/0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
      },
      {
        label: 'BscScan',
        href: 'https://bscscan.com/token/0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
      },
      {
        label: 'Vfat',
        href: 'https://vfat.tools/bsc/cryptosphere/',
      },
    ],
  },
  {
    label: 'Listing',
    icon: 'ListingIcon',
    items: [
      {
        label: 'PooCoin',
        href: 'https://poocoin.app/tokens/0x5C2C6c0FdE46fb928cD60C9cbc6f9A94775C12B1',
      }, 
      {
        label: 'DappRadar',
        href: 'https://dappradar.com/binance-smart-chain/defi/cryptospace',
      },  
      {
        label: 'Coingecko',
        href: 'https://www.coingecko.com/en/coins/cryptosphere-token',
      },       
    ],
  },
  {
    label: 'Audits',
    icon: 'AuditIcon',
    items: [
      {
        label: 'RugDoc',
        href: 'https://rugdoc.io/project/cryptosphere/',
      }, 
      {
        label: 'TechRate',
        href: '#',
      },  
      {
        label: 'CertiK',
        href: 'https://www.certik.org/projects/cryptospace',
      },       
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Docs',
        href: 'https://cryptospace-finance.gitbook.io/cryptospace/',
      },
      {
        label: 'Contracts',
        href: 'https://cryptospace-finance.gitbook.io/cryptospace/others/contracts',
      },
//      {
//        label: 'Blog',
//        href: '',
//      },
    ],
  },
//  {
//    label: 'Partnerships/IFO',
//    icon: 'GooseIcon',
//    href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
//  },
//  {
//    label: 'Audit by Hacken',
//    icon: 'AuditIcon',
//    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
//  },
//  {
//    label: 'Audit by CertiK',
//    icon: 'AuditIcon',
//    href: 'https://certik.org/projects/goose-finance',
//  },
]

export default config
