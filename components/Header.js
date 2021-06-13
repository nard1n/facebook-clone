import Image from "next/image";
import {
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    FlagIcon,
    PlayIcon,
    SearchIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";

function Header() {
    return (
        <div>
            {/* left */}
            <div className="flex items-center">
                {/* fb icon */}
                <Image src="https://links.papareact.com/5me" width={40} height={40} layout="fixed" />
            
                <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
                    {/* search bar */}
                    <SearchIcon className="h-6 text-gray-600" />
                    <input type="text" className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-500" placeholder="Search Facebook"></input>
                </div>
            </div>
            {/* center */}

            {/* right */}

        </div>
    )
}

export default Header