import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center p-24">
      <Link href="/signup"><button class="bg-transparent hover:bg-blue-500 text-blue-600 hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-bold ">
        Connect Wallet
        </button>
      </Link>
    </div>
  
    
  )
}
