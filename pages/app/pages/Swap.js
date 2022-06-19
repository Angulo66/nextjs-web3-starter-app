import {
  AdvancedOptionsModal,
  SwapComponent,
  TokenListModal,
  ConnectListModal,
  SwapHeader,
} from "../components/";

export default function Swap({ pageProps }) {
  return (
    <>
      <SwapHeader />
      <SwapComponent />
      <TokenListModal />
      <AdvancedOptionsModal />
      <ConnectListModal />
    </>
  );
}
