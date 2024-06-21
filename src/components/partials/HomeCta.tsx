import { IconBrandWhatsapp } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { GoogleMapEmbed } from "./GoogleMapEmbed"

export const HomeCta = () => {
    return (
        <div className="overflow-hidden bg-white">
            <div className="mx-auto max-w-7xl lg:flex">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
                    <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our people</h2>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit. Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                            fugiat veniam occaecat fugiat. Quasi aperiam sit non sit neque reprehenderit.
                        </p>
                        <a href="https://wa.me/6281217067080 " target="_blank">
                            <Button className="mt-4 w-48 text-sm bg-green-600 hover:bg-green-700" >
                                <IconBrandWhatsapp className="h-5 w-5 mr-2" />
                                Contact Us
                            </Button>
                        </a>
                    </div>
                    <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                        <GoogleMapEmbed lat={-7.6092343} lng={112.5928383} />
                    </div>
                </div>
            </div>
        </div>
    )
}