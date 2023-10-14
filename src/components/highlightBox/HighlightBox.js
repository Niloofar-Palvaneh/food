import Title from "../title/Title"
import Image from "next/image"

export default function HighlightBox({title , p , src}) {

    return (
        <>
            <div className="flex items-center gap-24 sm:gap-2 justify-between sm:flex-col  ">
                <div className="flex items-center relative w-full sm:justify-center ">
                    <Image src={src} width={180} height={180} alt="..." />
                    <div className="w-[60px] h-[1px] bg-red-600 absolute top-8 left-[67%] sm:hidden"></div>
                </div>
                <div className="flex flex-col gap-4">
                    <h3 className="font-bold text-xl">
                        {title}
                    </h3>
                    <p className="text-sm">
                        {p}
                    </p>
                </div>
            </div>
        </>
    )
}