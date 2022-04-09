



function HeaderItem({Icon,title}){

    return(
        <div className="group w-10 flex flex-col  items-center cursor-pointer
        sm:w-18 hover:text-white
        ">
            <Icon className='h-8 group-hover:animate-bounce mb-1'/>
            <text className="tracking-widest  opacity-0 group-hover:opacity-100">{title}</text>
        </div>
    );
}

export default HeaderItem