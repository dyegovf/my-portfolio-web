import { Spin } from "antd";

export function LoadingState() {
  return (
    <div className="min-h-screen grid place-items-center bg-slate-100 text-slate-950">
      <Spin description="Loading..." />
    </div>
  );
}
