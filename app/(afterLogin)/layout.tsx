import { ReactNode } from "react";
import { LogoArea } from "./_components/LogoArea";
import { NavMenu } from "./_components/NavMenu";
import { UserMenu } from "./_components/UserMenu";

export default function AfterLoginLayout({ children }: { children: ReactNode }) {

  return (
    <div className="sm:flex">
      <aside className="flex w-full sm:w-[231px] sm:flex-col">
        <LogoArea />
        <UserMenu />
        <NavMenu />
      </aside>
      <main>
        {children}
      </main>
    </div>
  )
}