import Title from "../title/Title"
import HighlightBox from "../highlightBox/HighlightBox"

export default function HighlightSection(){
    return(
        <>
           <div className="w-full bg-black md:px-2 -mt-8 sm:mt-0 text-white sm:mt-12 sm:pt-4 pb-4">
                <div className="px-44 sm:px-0 md:px-4 sm:pt-0 sm:text-center sm:gap-12 flex items-center justify-between sm:flex-col">
                    <Title title="A few highlights from our menu"
                     p="We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season." />
                    <div className="w-[50%] z-50 -mt-8 md:-mt-2 sm:w-full flex flex-col gap-8 mt-24">
                    <HighlightBox title="Seared Salmon Fillet" p="Our locally sourced salmon served with a refreshing buckwheat summer salad." src="/imgs/h3.jpg"/>
                    <HighlightBox title="Rosemary Filet Mignon" p="Our prime beef served to your taste with a delicious choice of seasonal sides." src="/imgs/h2.jpg"/>
                     <HighlightBox title="Seared Salmon Fillet" p="Our locally sourced salmon served with a refreshing buckwheat summer salad." src="/imgs/h1.jpg"/>
                    </div>
                </div>
            </div>
        </>
    )
}