export default function Card({ children }) {
  return (
    <div className="flex w-full h-fit pt-12">
      <div className="w-full flex items-center justify-center">
        <div className="bg-white py-20 rounded-3xl border-2 border-gray-100 px-10">
          {children}
        </div>
      </div>
    </div>
  );
}
