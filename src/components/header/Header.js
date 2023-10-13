import Image from "next/image"
import Button from "../button/Button"

export default function Header() {

    return (
        <>
            <div className="h-screen w-full bg-[url('/imgs/head-bg.jpg')] sm:bg-[url('/imgs/head-bg-sm.jpg')] 
            md:bg-[url('/imgs/head-bg-sm.jpg')] md:bg-top bg-cover bg-no-repeat md:px-2">
                <div className="text-white px-44 sm:px-4 pt-24 md:px-4 md:pt-96 md:text-center  
                md:gap-8
                sm:pt-48 sm:text-center sm:gap-12 flex flex-col gap-24 ">
                    <h1 className="text-5xl font-bold sm:text-3xl">
                        header logo
                    </h1>
                    <div className="flex flex-col gap-8">
                        <h2 className="text-4xl sm:text-2xl ">
                            Exquisite dining since 1989
                        </h2>
                        <p className="text-xl w-[480px] sm:w-full md:w-full">
                            Experience our seasonal menu in beautiful country surroundings. Eat the freshest produce from the comfort of our farmhouse.
                        </p>
                    </div>
                    <Button/>
                </div>
            </div>
        </>
    )
}