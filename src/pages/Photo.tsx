import { HomeHistory } from "@/components/partials/HomeHistory";
import { useTranslation } from "react-i18next";

export const Photo = () => {

    const { t } = useTranslation();
    return (
        <div className="max-w-sm mx-4 sm:max-w-7xl sm:mx-auto" >
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">{t('gallery.title')}</h2>
            <p className="text-base" >
                {t('gallery.desc')}
            </p>
            {/* historry */}
            <HomeHistory />
        </div>
    )
}