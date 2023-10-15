

export default function Footer(){

    return(
        <>
        <div className="mt-24">
            <div className="bg-[url('/imgs/footer.jpg')] bg-cover flex items-center justify-center flex-col gap-4 py-8">
                <h2 className="text-3xl font-bold text-red-100">
                    If you want best food ?!
                </h2>
                <p className="text-xl text-green-200">
                    come here!
                </p>
            </div>
            <div className="bg-black text-white flex items-start justify-around pt-8 ">
                <ul className="flex flex-col gap-4">
                    <li>footer-item-1</li>
                    <li>footer-item-2</li>
                </ul>
                <ul className="flex flex-col gap-4">
                    <li>footer-item-3</li>
                    <li>footer-item-4</li>
                    <li>footer-item-5</li>
                    <li>footer-item-6</li>
                </ul>
                <ul className="flex flex-col gap-4">
                    <li>footer-item-3</li>
                    <li>footer-item-4</li>
                    <li>footer-item-5</li>
                </ul>
            </div>
        </div>
        </>
    )
}