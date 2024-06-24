import { candi } from "@/constant/ui"
import { ChevronDownIcon } from "lucide-react"
import { useTranslation } from "react-i18next"

export const HomeBanner = () => {

    const { t } = useTranslation();

    return (
        <div className="max-w-sm sm:max-w-7xl mx-auto h-screen relative">

            <img src={candi} alt="Jolotundo Background" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />


            <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
            <div className="relative h-full w-full p-8 flex flex-col items-center justify-between max-w-sm mx-auto rounded-2xl text-white">
                <h1 className="text-center text-3xl font-dancing">
                    {t('welcome_to')} <br /> Petirtaan Jolotundo
                </h1>
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-center">
                        {t('home.banner')}
                    </p>
                    <div className="flex items-center justify-center w-10 h-12 rounded-full border border-white">
                        <ChevronDownIcon className="text-white h-6 w-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}