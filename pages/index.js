import {
  AdvancedOptionsModal,
  SwapComponent,
  TokenListModal,
  ConnectListModal
} from "./app/components/index";

export default function Example() {
  return (
    <>
      <SwapComponent />
      <TokenListModal />
      <AdvancedOptionsModal />
      <ConnectListModal />   
    </>
  );
}
