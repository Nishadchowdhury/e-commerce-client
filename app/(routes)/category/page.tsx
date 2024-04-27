import { Link2 } from "lucide-react";
import Link from "next/link";

interface pageProps {

}
const page: React.FC<pageProps> = () => {


    return (
        <div className='flex items-center justify-center h-screen w-full ' >
            With out an Id you can not see anything here. <Link href={'/'} > Store <Link2 size={15} /> </Link>
        </div>
    )

}

export default page;