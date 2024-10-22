import { ReactNode } from "react";

export default function PhotoLayout({ children }: { children: ReactNode }) {
  return (
    <div>
      <div>레이아웃</div>
      {children}
    </div>
  );
}
