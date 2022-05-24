import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import { WalletLinkConnector } from "@web3-react/walletlink-connector";
import { ALL_SUPPORTED_CHAIN_IDS, RPC_URLS, POLLING_INTERVAL } from "../constants/chains";

export const injected = new InjectedConnector({
    supportedChainIds: ALL_SUPPORTED_CHAIN_IDS,
});

export const walletconnect = new WalletConnectConnector({
    rpc: { 1: RPC_URLS[1] },
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
    pollingInterval: POLLING_INTERVAL,
    chainId: 1,
});

export const walletlink = new WalletLinkConnector({
    url: RPC_URLS[1],
    appName: "my-app",
});