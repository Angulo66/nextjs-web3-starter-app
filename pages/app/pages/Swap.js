import {
  AdvancedOptionsModal,
  SwapComponent,
  TokenListModal,
  SwapHeader,
} from "../components/";

export default function Swap({ pageProps }) {
  return (
    <>
      <SwapHeader />
      <SwapComponent />
      <TokenListModal />
      <AdvancedOptionsModal />
    </>
  );
}
