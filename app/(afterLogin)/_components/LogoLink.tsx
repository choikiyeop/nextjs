import Image from "next/image"
import Link from "next/link"

export const LogoLink = () => {
  return (
    <Link href={"/"} className="sm:h-16">
      <Image src={"/vercel.svg"} alt="Logo" width={200} height={120}/>
    </Link>
  )
}