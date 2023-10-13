import Image from "next/image"
import Title from "../title/Title"

export default function EnjoySection() {

    return (
        <>
            <div className="w-full bg-[url('/imgs/bg-gray.svg')] bg-left bg-no-repeat md:px-2">
                <div className="px-44 sm:px-0 md:px-4 sm:pt-0 sm:text-center sm:gap-12 flex items-center justify-between sm:flex-col">
                    <div className="w-[40%] z-50 -mt-8 md:-mt-2 sm:w-full">
                        <Image
                            className="w-full"
                            src={"/imgs/jangle.jpg"} width={200} height={100} alt="..." />
                    </div>
                    <Title title="Enjoyable place for all the family"
                     p="Our relaxed surroundings make dining with us a great experience for everyone. We can even arrange a tour of the farm before your meal." />
                </div>
            </div>
        </>
    )
}