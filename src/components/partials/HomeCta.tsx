import { IconBrandWhatsapp } from "@tabler/icons-react"
import { Button } from "../ui/button"
import { GoogleMapEmbed } from "./GoogleMapEmbed"
import { useTranslation } from "react-i18next"

export const HomeCta = () => {

    const { t } = useTranslation();

    return (
        <div className="overflow-hidden bg-white">
            <div className="max-w-sm mx-4 sm:mx-auto sm:max-w-7xl grid grid-cols-12 gap-4 sm:gap-16" >
                <div className="col-span-12 sm:col-span-6">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">{t('about.title')}</h2>
                    <p className="w-full mt-6 text-base">
                        {t('about.desc')}
                    </p>
                    <a href="https://wa.me/6281217067080 " target="_blank">
                        <Button className="mt-4 w-48 text-sm bg-green-600 hover:bg-green-700" >
                            <IconBrandWhatsapp className="h-5 w-5 mr-2" />
                            Contact Us
                        </Button>
                    </a>
                </div>
                <div className="col-span-12 sm:col-span-6">
                    <div className="w-full" >
                        <GoogleMapEmbed lat={-7.6092343} lng={112.5928383} />
                    </div>
                </div>
            </div>
        </div>
    )
}