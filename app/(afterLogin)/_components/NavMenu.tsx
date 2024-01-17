'use client'

import Link from "next/link";
import { useSelectedLayoutSegments } from "next/navigation"

export const NavMenu = () => {
  const segments = useSelectedLayoutSegments();
  console.log(segments)

  return (
    <nav className="">

      <div className="flex w-full h-full p-2 bg-slate-700 text-white sm:hidden">
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>

      <ul className="hidden sm:block">
        <li>
          <Link href={"/dashboard"}>대시보드</Link>
        </li>
        <li>
          <Link href={"/library"}>라이브러리</Link>
        </li>
        <li>
          <Link href={"/management"}>관리</Link>
        </li>
      </ul>
    </nav>
  )
}