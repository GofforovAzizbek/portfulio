export default function SkeletonCard() {
  return (
    <div className="w-full h-48 bg-[#0a0a0a] border border-gray-800 rounded-3xl relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-800/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
      <div className="p-8 space-y-4">
        <div className="w-1/3 h-6 bg-gray-800 rounded-lg" />
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 bg-gray-900 rounded-xl" />
          ))}
        </div>
      </div>
    </div>
  );
}
