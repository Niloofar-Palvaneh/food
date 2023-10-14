import Image from "next/image"
import Title from "../title/Title"

export default function FoodSection(){

    return(
        <>
          <div className="w-full bg-[url('/imgs/bg-gray-r.svg')] bg-right-bottom bg-no-repeat md:px-2 mt-12">
                <div className="px-44 sm:px-0 md:px-4 sm:pt-0 sm:text-center sm:gap-12 flex items-center justify-between sm:flex-col-reverse">
                    <Title title="The most locally sourced food"
                     p="All our ingredients come directly from our farm or local fishery. So you can be sure that you’re eating the freshest, most sustainable food." />
                    <div className="w-[40%] z-50 -mt-8 md:-mt-2 sm:w-full">
                        <Image
                            className="w-full"
                            src={"/imgs/food.jpg"} width={200} height={100} alt="..." />
                    </div>
                </div>
            </div>
        </>
    )
}