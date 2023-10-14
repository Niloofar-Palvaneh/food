import Link from "next/link"

export default function Button() {
    return (
        <>
            <div>
                <Link href={"#"}
                    className="border border-2 border-white w-max text-md px-8 py-4 bg-black text-white hover:border-black
                    transition ease-in-out delay-150 duration-300 hover:bg-white hover:text-black"
                >
                    BOOK A TABLE
                </Link>
            </div>
        </>
    )
}