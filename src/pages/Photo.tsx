import { HomeHistory } from "@/components/partials/HomeHistory";

export const Photo = () => {


    return (
        <div className="max-w-7xl mx-auto" >
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mt-8 mb-4">Our Gallery</h2>
            <p className="text-base" >
                Petirtaan Jolotundo is located on the northern slopes of Mount Penanggungan, in Seloliman Village, Trawas, Mojokerto, East Java. Discovered by Dutch archaeologists around 1885, it was opened to the public in 1984 and restored between 1991 and 1994. 
                The temple measures 15 meters wide, 15.5 meters long, and 5.8 meters high, and is made of finely chiseled andesite stone. Managed by the Balai Pelestarian Kebudayaan Jawa Timur, Jolotundo Temple symbolizes Mount Penanggungan, surrounded by eight mountains. It features 38 showers in total, with 13 in the upper center and 16 below, and contains symbols in Sanskrit and ancient Javanese language.
            </p>
            {/* historry */}
            <HomeHistory />
        </div>
    )
}