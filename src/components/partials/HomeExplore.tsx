import { candi, gallery } from "@/constant/ui"

export const HomeExplore = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16" >
            <div className="flex flex-row justify-between" >
                <div className="max-w-2xl space-y-4" >
                    <p className="text-2xl font-semibold" >Explore Jolotundo <span className="font-medium" >Cultural Aspects</span></p>
                    <p className="text-base" >
                        Jolotundo Temple, a relic of Raja Udayana in Penanggungan forest, East Java, serves both religious and tourism purposes.
                        For religious activities, it hosts prayers, meditation, and rituals. Locals also perform the ruwat tradition here with Tumpeng.
                        As a tourism spot, visitors enjoy bathing in its mineral-rich, drinkable water, believed to have healing properties.
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-12 gap-4 mt-8" >
                {
                    gallery.map(() => (
                        <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                            <img className="absolute inset-0 w-full h-full object-cover" src={candi} alt="Descriptive alt text" />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative p-4 flex flex-col items-end justify-end h-full">
                                <p className="text-white">
                                    Here's some text inside the card content with p-8 padding.
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}