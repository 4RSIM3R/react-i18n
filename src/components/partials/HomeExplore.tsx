import { explore } from "@/constant/ui"
import { useTranslation } from "react-i18next"

export const HomeExplore = () => {

    const { t } = useTranslation();

    return (
        <div className="max-w-sm sm:max-w-7xl mx-4 sm:mx-auto mt-16" >
            <div className="flex flex-row justify-between" >
                <div className="max-w-4xl space-y-4" >
                    <p className="text-2xl font-semibold" >{t('home.explore.title')}</p>
                    <p className="text-base" >
                        {t('home.explore.desc')}
                    </p>
                </div>

            </div>

            <div className="grid grid-cols-12 gap-4 mt-8" >
                {
                    explore.map((e) => (
                        <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                            <img className="absolute inset-0 w-full h-full object-cover" src={e.image} alt="Descriptive alt text" />
                            <div className="absolute inset-0 bg-black opacity-50"></div>
                            <div className="relative p-4 flex flex-col items-start justify-end h-full">
                                <p className="text-white">
                                    {e.title}
                                </p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    )
}