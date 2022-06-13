import Image from 'next/image'
import { ThumbUpIcon } from '@heroicons/react/outline'

export default function Thumbnail({ item }) {

    const BASE_URL = "https://image.tmdb.org/t/p/original";
    return (
        <div className='p-2 group cursor-pointer transition 
        duration-200 transform ease-in sm:hover:scale-105 hover:z-50'>
            <Image
                alt='movie banner'
                layout='responsive'
                width={1820}
                height={1080}
                src={`${BASE_URL}${item.backdrop_path || item.poster_path}` ||
                    `${BASE_URL}${item.poster_path}`
                }
            />
            <div className='p-2'>
                <p className='truncate max-w-md'>{item.overview}</p>

                <h2 className='mt-2 text-white text-2xl transition-all
                duration-100 ease-in-out group-hover:text-bold '>
                    {item.title || item.original_name}
                </h2>

                <p className='flex items-center opacity-0 group-hover:opacity-100'>
                    {item.media_type && `${item.media_type}${'  .  '}`}
                    {item.release_date || item.first_air_date}{' . '}
                    <ThumbUpIcon className='ml-1 p-1 w-7' />{"   "}{item.vote_count}
                </p>
            </div>
        </div>
    )
}