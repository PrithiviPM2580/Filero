export default function NeumorphismCard() {
  return (
    <div className="relative w-80">
      {/* 3D depth layers */}
      <div className="absolute inset-x-1 top-5 h-full rounded-[28px] bg-[#cfd8e6]" />
      <div className="absolute inset-x-0.5 top-2.5 h-full rounded-[30px] bg-[#dde5f0]" />

      {/* Main card */}
      <div className="shadow-[ -10px_-10px_20px_rgba(255,255,255,0.95), 10px_10px_20px_rgba(163,177,198,0.28), 0_24px_35px_rgba(163,177,198,0.22) ] relative rounded-[32px] border border-white/80 bg-[#e9edf5] p-6">
        {/* Top highlight */}
        <div className="absolute top-0 right-6 left-6 h-px bg-white/90" />

        {/* Bottom glossy edge */}
        <div className="absolute inset-x-5 -bottom-1 h-3 rounded-full bg-white/85 blur-sm" />

        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-slate-500">Paid Invoices</p>
            <h2 className="mt-1 text-3xl font-bold text-slate-800">
              $9,034.49
            </h2>
          </div>

          <div className="shadow-[ -4px_-4px_10px_rgba(255,255,255,0.9), 4px_4px_10px_rgba(163,177,198,0.25) ] flex h-12 w-12 items-center justify-center rounded-2xl bg-[#e9edf5]">
            💳
          </div>
        </div>

        <p className="mb-4 text-sm text-slate-400">Current financial year</p>

        <div className="shadow-[ inset_-2px_-2px_4px_rgba(255,255,255,0.85), inset_2px_2px_5px_rgba(163,177,198,0.22) ] h-2.5 rounded-full bg-[#dde5f0]">
          <div className="h-full w-3/4 rounded-full bg-linear-to-r from-violet-500 to-cyan-400" />
        </div>
      </div>
    </div>
  )
}
