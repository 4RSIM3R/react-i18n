import { useTranslation } from "react-i18next"

export const HomeHistory = () => {

    const { t } = useTranslation();

    return (
        <div className="max-w-sm sm:max-w-7xl mx-4 sm:mx-auto mt-16" >

            <ul className="timeline timeline-vertical">

                <li className="mx-8" >
                    <hr />
                    <div className="timeline-start mr-8 w-full">
                        <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden w-full" >
                            <img className="absolute inset-0 w-full h-full object-cover" src="https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/gempeng.jpg" alt="Descriptive alt text" />
                        </div>
                    </div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box rounded-lg p-0 ml-8 w-full">
                        <div className="max-w-md m-4 space-y-4" >
                            <p className="text-lg font-semibold" >{t('gallery.gempeng.title')}</p>
                            <p className="text-sm sm:text-base" >
                                {t('gallery.gempeng.desc')}
                            </p>
                        </div>
                    </div>
                    <hr />
                </li>

                <li className="mx-8" >
                    <hr />
                    <div className="timeline-start timeline-box rounded-lg p-0 mr-8 w-full">
                        <div className="max-w-md m-4 space-y-4" >
                            <p className="text-lg font-semibold" >{t('gallery.saka.title')}</p>
                            <p className="text-sm sm:text-base" >
                                {t('gallery.saka.desc')}
                            </p>
                        </div>
                    </div>

                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end ml-8 w-full">
                        <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                            <img className="absolute inset-0 w-full h-full object-cover" src="https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/saka.jpg" alt="Descriptive alt text" />
                        </div>
                    </div>
                    <hr />
                </li>

                <li className="mx-8" >
                    <hr />
                    <div className="timeline-start mr-8 w-full">
                        <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                            <img className="absolute inset-0 w-full h-full object-cover" src="https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/cungkup.jpg" alt="Descriptive alt text" />
                        </div>
                    </div>
                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end timeline-box rounded-lg p-0 ml-8 w-full">
                        <div className="max-w-md m-4 space-y-4" >
                            <p className="text-lg font-semibold" >{t('gallery.cungkup.title')}</p>
                            <p className="text-sm sm:text-base" >
                                {t('gallery.cungkup.desc')}
                            </p>
                        </div>
                    </div>
                    <hr />
                </li>

                <li className="mx-8" >
                    <hr />
                    <div className="timeline-start timeline-box rounded-lg p-0 mr-8 w-full">
                        <div className="max-w-md m-4 space-y-4" >
                            <p className="text-lg font-semibold" >{t('gallery.statue.title')}</p>
                            <p className="text-sm sm:text-base" >
                                {t('gallery.statue.desc')}
                            </p>
                        </div>
                    </div>

                    <div className="timeline-middle">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                    </div>
                    <div className="timeline-end ml-8 w-full">
                        <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                            <img className="absolute inset-0 w-full h-full object-cover" src="https://media-cdn.tripadvisor.com/media/photo-s/08/e7/a3/75/candi-jolotundo.jpg" alt="Descriptive alt text" />
                        </div>
                    </div>
                    <hr />
                </li>

            </ul>

        </div>
    )
}