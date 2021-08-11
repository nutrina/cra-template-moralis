import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useMoralis } from "react-moralis";
import { ethers } from "ethers";
import { getBalancesAsync, selectBalance, selectNetworks } from './walletSlice';
import styles from './Wallet.module.css';

function Wallet() {
  const { isAuthenticated, user } = useMoralis();
  const dispatch = useDispatch();
  const balance = useSelector(selectBalance);
  const networks = useSelector(selectNetworks);

  const accounts = !user ? [] : user.get('accounts').map((account) => '0x...' + account.slice(account.length - 4, account.length));

  useEffect(() => {
    if (isAuthenticated && user) {
      dispatch(getBalancesAsync({ accounts: user.get('accounts') }));
    }
  }, [isAuthenticated, dispatch, user])

  const balancesUi = networks.map((network, idx) => {
    const chainBalance = balance.value[network.network];
    let assets = null;
    let progressIndicator = null;
    if (chainBalance && chainBalance.status === "fulfilled") {
      if (chainBalance.value.assets.length > 0) {
        const rows = chainBalance.value.assets.map((asset, aidx) => {
          const amount = ethers.utils.formatUnits(asset.balance, asset.decimals);
          return <tr key={aidx}>
            <td>{asset.symbol}</td>
            <td>{asset.name}</td>
            <td>{asset.tokenAddress}</td>
            <td>{amount}</td>
          </tr>
        });

        assets = <table className={styles.amountTable}>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Name</th>
              <th>Token Address</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      } else {
        assets = <div>You do not have any assets yet.</div>
      }
    }

    progressIndicator = (balance.status === "loading") ? <div> loading ... </div> : null;

    return <div key={idx} className={styles.tableSection}>
      <div >
        <div className={styles.sectionHeader}>{network.displayName} { }</div>
        {progressIndicator}
      </div>
      {assets}
    </div>;
  });

  const progressIndicator = (balance.status === "loading" && balancesUi.length === 0) ? <div><span> loading ... </span></div> : null;
  const error = (balance.status === "failed") ? <div>Failed to load balances</div> : null;

  return (
    <div>
      <div align="center"
        p="2"
        justify="center"
        wrap="wrap">
        Your accounts: {accounts}
      </div>
      {progressIndicator}
      {error}
      {balancesUi}
    </div>
  );
}

export default Wallet;