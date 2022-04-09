import requests from '../Utils/requests'
import { useRouter } from 'next/router'

function Nav() {

    const router = useRouter();

    return (

        <nav className="relative">
            <div className="flex overflow-x-scroll whitespace-nowrap last:pr-20 px-10 scrollbar-hide sm:px-20 space-x-10 sm:space-x-20 ">
                {Object.entries(requests).map(([key, { title, url }]) => (

                    <h2
                        onClick={()=>router.push(`?genre=${key}`)}
                        key={key}
                        className="text-xl transition duration-100 transform cursor-pointer 
                                  hover:scale-125 hover:text-white active:text-red-500">
                        {title}
                    </h2>
                ))}
            </div>

            <div className="absolute top-0 right-0 w-1/12 h-10 bg-gradient-to-l from-[#06202A]"></div>
        </nav>
    );
}

export default Nav;