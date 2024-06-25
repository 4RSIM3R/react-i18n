import { ChevronDownIcon } from "lucide-react"
import { useTranslation } from "react-i18next"

export const HomeBanner = () => {

    const { t } = useTranslation();

    return (
        <div className="max-w-sm sm:max-w-7xl mx-4 sm:mx-auto h-screen relative">

            <img src="https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/landscape.jpg" alt="Jolotundo Background" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />


            <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
            <div className="relative h-full w-full p-8 flex flex-col items-center justify-between max-w-sm mx-auto rounded-2xl text-white">
                <h1 className="text-center text-2xl sm:text-3xl font-dancing">
                    {t('welcome_to')} <br /> Petirtaan Jolotundo
                </h1>
                <div className="flex flex-col items-center space-y-4">
                    <p className="text-base text-center">
                        {t('home.banner')}
                    </p>
                    <div className="flex items-center justify-center w-8 h-8 sm:w-12 sm:h-12 rounded-full border border-white">
                        <ChevronDownIcon className="text-white w-4 h-4 sm:h-6 sm:w-6" />
                    </div>
                </div>
            </div>
        </div>
    )
}