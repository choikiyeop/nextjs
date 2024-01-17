import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export const UserMenu = () => {

  return (
    <div className="flex w-full h-[132px] items-center space-x-2 pl-4 bg-slate-700">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="user" />
        <AvatarFallback>NO</AvatarFallback>
      </Avatar>
      <h2 className="text-xs font-semibold text-white">관리자</h2>
      
    </div>
  )
}