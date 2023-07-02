import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
   <Link href="/signup"><button class="bg-transparent hover:bg-blue-500 text-blue-600 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded ">
   Connect Wallet
</button>
</Link>

    </main>
  )
}
