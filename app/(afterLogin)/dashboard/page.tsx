import { Suspense } from "react";

export default function DashboardPage() {

  return (
    <div>

      
      <Suspense fallback={<div>SmallSkeleton</div>}>
        <div>대시보드 페이지</div>
      </Suspense>
    </div>
  )
}