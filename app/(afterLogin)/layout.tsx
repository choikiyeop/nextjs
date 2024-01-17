import { ReactNode } from "react";
import { LogoLink } from "./_components/LogoLink";
import { NavMenu } from "./_components/NavMenu";
import { UserDropdown } from "./_components/UserDropdown";

export default function AfterLoginLayout({ children }: { children: ReactNode }) {

  return (
    <div className="sm:flex">
      <aside className="flex w-full min-w-[231px] sm:w-[231px] sm:flex-col">
        <LogoLink />
        <UserDropdown />
        <NavMenu />
      </aside>
      <main className="w-full">
        {children}
      </main>
    </div>
  )
}