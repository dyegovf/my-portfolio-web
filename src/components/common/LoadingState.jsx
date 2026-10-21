import { Spin } from "antd";

export function LoadingState({ fullscreen = true }) {
  const containerClass = fullscreen
    ? "min-h-screen bg-slate-100 text-slate-950"
    : "h-full min-h-150 w-full bg-transparent text-slate-950";

  return (
    <div className={`grid place-items-center ${containerClass}`}>
      <Spin description="Loading..." />
    </div>
  );
}
