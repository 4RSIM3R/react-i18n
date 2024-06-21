import { HomeHistory } from "@/components/partials/HomeHistory";

export const Photo = () => {


    return (
        <div className="max-w-7xl mx-auto" >
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl my-8">Our Gallery</h2>
            {/* historry */}
            <HomeHistory />
        </div>
    )
}