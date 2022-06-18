import Card from "../templates/Card";
import {
  SwapButton,
  SwapComponentHeader,
  SwapInput,
  SwapOutput,
} from "../molecules/index";

function ReverseInputsComponent() {
  return (
    <div className="flex justify-center rounded-r-sm">
      <button className="rounded-full bg-white border-2 border-gray-200 cursor-pointer -mb-3 hover:scale-[1.11]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="blue"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </button>
    </div>
  );
}

export default function SwapComponent() {
  return (
    <Card>
      <SwapComponentHeader />
      <SwapInput />
      <ReverseInputsComponent />
      <SwapOutput />
      <SwapButton />
    </Card>
  );
}
