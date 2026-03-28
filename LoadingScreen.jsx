export default function LoadingScreen() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 text-slate-100">
      <div className="flex flex-col items-center gap-6">
        <div className="relative h-24 w-24 animate-spin rounded-full border-4 border-blue-500/40 border-t-transparent"></div>
        <div className="space-y-2 text-center">
          <p className="text-lg font-semibold">Ravindra IAS</p>
          <p className="text-sm text-slate-400">Building the most effective UPSC journey for you.</p>
        </div>
      </div>
    </div>
  );
}
