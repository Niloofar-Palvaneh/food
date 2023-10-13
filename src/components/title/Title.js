
export default function Title({ title  , p}) {
    return (
        <>
            <div className="w-[40%] sm:w-full">
                <div className="flex items-center gap-1 sm:justify-center sm:mb-4">
                    <div className="w-[10px] h-[10px] border border-red-800 rounded-full"></div>
                    <div className="w-[65px] h-[1px] rounded bg-red-500"></div>
                </div>
                <div className=" flex flex-col gap-12">
                    <h3 className="text-4xl font-bold sm:text-xl">
                        {title}
                    </h3>
                    <p className="">
                        {p}
                    </p>
                </div>
            </div>
        </>
    )
}