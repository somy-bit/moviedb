import Image from 'next/image'
import Thumbnail from './Thumbnail.js'

function Results({results}){

    let data = results.results;
    console.log(data)

    return(
        <div className='px-3 my-5 sm:grid md:grid-cols-2 
        xl:grid-cols-3 3xl:flex flex-wrap justify-center'>
            {data.map((item)=>
                <Thumbnail key={item.id} item={item} />
            )
           }
        </div>
    );
}

export default Results
