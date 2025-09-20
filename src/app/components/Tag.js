// components/Tag.js
export default function Tag({ kind = "qualified", label, className = "" }) {
  const defaultLabels = {
    hot: "Hot",
    warm: "Warm",
    qualified: "Qualified",
    proposal: "Proposal",
  };

  const styles = {
    hot: "bg-[#C6585DFF] text-white border border-red-100",
    warm: "bg-[#3671BAFF] text-white border border-yellow-100",
    qualified: "bg-[#6C9D76FF] text-white border border-blue-100",
    proposal: "bg-[#F3F4F6FF] text-black border border-gray-100",
  };

  const text = label ?? defaultLabels[kind] ?? "Tag";
  const style = styles[kind] ?? styles.qualified;

  return (
    <span
      className={`inline-flex items-center px-2 py-0.5 rounded-[9999px] text-xs font-[400] ${style} ${className}`}
      aria-label={text}
    >
      {text}
    </span>
  );
}
