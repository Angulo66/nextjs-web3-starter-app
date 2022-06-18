import {
  AdvancedOptionsModal,
  SwapComponent,
  TokenListModal,
  ConnectListModal,
  SwapHeader,
} from "./app/components/index";

export default function Example() {
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
