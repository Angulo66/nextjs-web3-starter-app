import {
  AdvancedOptionsModal,
  SwapComponent,
  TokenListModal,
  SwapHeader,
} from "./app/components/index";

export default function Example() {
  return (
    <>
      <SwapHeader />
      <SwapComponent />
      <TokenListModal />
      <AdvancedOptionsModal />
    </>
  );
}
