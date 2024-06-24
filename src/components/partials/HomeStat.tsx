import { useTranslation } from "react-i18next"

export default function HomeStat() {

  const { t } = useTranslation();

  return (
    <div className="my-16">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <h1 className="mt-2 text-2xl font-semibold">{t('home.stat.title')}</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 lg:max-w-none lg:grid-cols-2">
            <div>
              <p className="">
                {t('home.stat.desc_1')}
              </p>
            </div>
            <div>
              <p>
                {t('home.stat.desc_2')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
