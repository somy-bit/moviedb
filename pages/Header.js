import {
    HomeIcon,
    BadgeCheckIcon,
    UserIcon,
    LightningBoltIcon,
    SearchIcon,
    CollectionIcon

} from '@heroicons/react/outline'
import HeaderItem from './HeaderItem';
import Image from 'next/image';


function Header() {

    return (

        <div className='flex flex-col items-center sm:flex-row justify-between m-2'>
            <div className='flex flex-row flex-grow justify-evenly max-w-2xl m-5'>
                <HeaderItem Icon={HomeIcon} title="HOME" />
                <HeaderItem Icon={BadgeCheckIcon} title="VERIFIED" />
                <HeaderItem Icon={LightningBoltIcon} title="TRENDING" />
                <HeaderItem Icon={CollectionIcon} title="COLLECTIONS" />
                <HeaderItem Icon={UserIcon} title="ACCOUNT" />
                <HeaderItem Icon={SearchIcon} title="SEARCH" />
            </div>
            <div>
                <Image className='object-contain' src='http://links.papareact.com/ua6' width={200} height={100} alt='hulu' />
            </div>
        </div>

    );
}

export default Header