import { candi, gallery } from "@/constant/ui"

export const HomeExplore = () => {
    return (
        <div className="max-w-7xl mx-auto mt-16" >
            <div className="flex flex-row justify-between" >
                <div className="max-w-2xl space-y-4" >
                    <p className="text-2xl" >Explore Jolotundo <span className="font-medium" >Cultural Aspects</span></p>
                    <p className="text-base" >
                        Today I gave inspiration for UI's exploration of travel website design for the Indonesian island of Bali.
                        This website is designed for prospective visitors to explore a wide variety of activities and cultures in Bali.I hope you like it
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