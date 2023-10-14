import Image from "next/image"
import Title from "../title/Title"
import Button from "../button/Button"
import Link from "next/link"

export default function FamilySection() {

    return (
        <>
            <div className="w-full bg-[url('/imgs/bg-gray.svg')] bg-top-left bg-no-repeat md:px-2 mt-12">
                <div className="px-44 sm:px-0 md:px-4 sm:pt-0 sm:text-center sm:gap-12 flex items-center justify-between sm:flex-col">
                    <div className="w-[40%] z-50 -mt-8 md:-mt-2 sm:w-full">
                        <Image
                            className="w-full"
                            src={"/imgs/family.jpg"} width={200} height={100} alt="..." />
                    </div>
                    <div className="w-1/2 flex flex-col gap-12 items-center ">
                        <Title title="Family Gathering"
                            p="We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all." />
                        <Button />
                        <div className="flex flex-col gap-2 text-xl text-gray-600 items-center">
                            <Link href={"#"}>FAMILY GATHERING</Link>
                            <Link href={"#"}>SPECIAL EVENTS</Link>
                            <Link href={"#"}>SOCIAL EVENTS</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}