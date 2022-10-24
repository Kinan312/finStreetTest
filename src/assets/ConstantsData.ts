import {tron} from './images/tronXML';
import {solana} from './images/solanaXML';
import {cardano} from './images/cardanoXML';
import {ethereum} from './images/ethereumXML';
import {bitcoin} from './images/bitcoinXML';
import {Data} from '../interfaces/dataTableInterface';

export const dataTable: Data[] = [
  {
    seq: '01',
    currentName: 'Quantlase Chain',
    short: 'QL',
    price: 'AED 78.485.1',
    Change: '+7.45',
    logo: tron,
    chainKey: ['31uqnp^cVW14vn30@hIK', 'fjEq@4^tdS8W5&g5^@vH'],
  },
  {
    seq: '02',
    currentName: 'Bitcoin',
    short: 'BTC',
    price: 'AED 75.485.1',
    Change: '+5.45',
    logo: bitcoin,
    chainKey: ['3rrnp^cVW1453bvgf0@hIK', 'trfgbv@4^tdS8W5&g5^@vH'],
  },
  {
    seq: '03',
    currentName: 'Ethereum',
    short: 'ETH',
    price: 'AED 64.485.1',
    Change: '+4.45',
    logo: ethereum,
    chainKey: ['31uqnp^cVWt543gf30@hIK', 'fjEq@4^tnm33&g5^@vH'],
  },
  {
    seq: '04',
    currentName: 'Cardano',
    short: 'ADA',
    price: 'AED 54.485.1',
    Change: '+3.45',
    logo: cardano,
    chainKey: ['iuyguqnp^cVW14vn30@hIK', 'fbbbq@4^tdfssd5&g5^@vH'],
  },
  {
    seq: '05',
    currentName: 'Solana',
    short: 'SOL',
    price: 'AED 44.485.1',
    Change: '+2.45',
    logo: solana,
    chainKey: ['31tttnp^cVW14vn30@re', 'fjEq@4^tdjhhghg5^@vH'],
  },
];
