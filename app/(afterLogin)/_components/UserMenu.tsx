import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const UserMenu = () => {

  return (
    <div className="flex w-full h-[132px] items-center px-4 bg-slate-700">
      <DropdownMenu>
        <DropdownMenuTrigger className="flex w-full space-x-2 items-center outline-none">
          <Avatar className="h-8 w-8">
            <AvatarImage src="https://github.com/shadcn.png" alt="user" />
            <AvatarFallback>···</AvatarFallback>
          </Avatar>
          <h2 className="text-xs font-semibold text-white">관리자</h2>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-52">
          <DropdownMenuItem>로그아웃</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  )
}