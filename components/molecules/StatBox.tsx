type StatBoxProps = {
  label: string;
  value: string;
};

export default function StatBox({ label, value }: StatBoxProps) {
  return (
    <div className="rounded-lg border border-slate-200 bg-white p-4">
      <p className="text-sm text-slate-500">{label}</p>
      <p className="text-2xl font-bold text-slate-900">{value}</p>
    </div>
  );
}
