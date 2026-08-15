interface UserProp{
    title:string;
}   

export default function Button ({title}:UserProp){
    return(
            <button className="w-36 h-10 bg-white rounded-4xl text-black hover:cursor-pointer">
                {title}
            </button>
    )
}