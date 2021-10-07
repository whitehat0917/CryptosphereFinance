import ReferralsAbi from '../config/abi/referral.json'
import { getContract } from './web3'

// contract addresses
const RefferalContractAddress = "0x1f6b4E566b8A32bf98360e3Ce669B52E0D77E14C";
// constract
const RefferalContract = getContract(ReferralsAbi, RefferalContractAddress);

export const getReferralCount = async (address: string) => {
  const response = await RefferalContract.methods.referralsCount(address).call();
  return response;
}
export const gettotalReferralCommissions = async (address: string) => {
  const response = await RefferalContract.methods.totalReferralCommissions(address).call();
  return response;
}
export const getReferralData = async (account: string) => {
  let redirect = 'false';
  if (account) {
    if (window.location.href.includes("?ref")) {
      const refAddress = window.location.href.split("=")[1];
      await RefferalContract.methods.recordReferral(account, refAddress);
      // console.log(response)
      redirect = 'true';
    }
  }
  return redirect;

}
