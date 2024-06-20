import { Button } from "@/components/ui/button";
import { IconBowlSpoon, IconHome, IconHome2, IconLayoutBoard, IconToiletPaper } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Facility = () => {

    const { t } = useTranslation();
    const [facility, setFacility] = useState<string>("facility.toilet");

    const facilities: Record<string, JSX.Element> = {
        "facility.toilet": <IconToiletPaper />,
        "facility.guesthouse": <IconHome />,
        "facility.information": <IconLayoutBoard />,
        "facility.gazebo": <IconHome2 />,
        "facility.foodcourt": <IconBowlSpoon />,
    }

    return (
        <div className="max-w-7xl mx-auto my-8 px-4 sm:px-0" >
            <p className="text-xl font-medium" >{t('facility.title')}</p>
            <p className="text-sm mt-2 mb-8" >{t('facility.desc')}</p>
            <div className="grid grid-cols-12 gap-4 " >
                <div className="col-span-12 sm:col-span-3 space-y-0 sm:space-y-2 space-x-2 sm:space-x-0 flex flex-row sm:flex-col items-center sm:items-start justify-start overflow-x-scroll sm:overflow-hidden" >
                    {
                        Object.keys(facilities).map((e) =>
                            <Button className="w-56 flex items-start justify-start" onClick={() => setFacility(e)} variant={facility == e ? 'default' : 'outline'} >
                                {facilities[e]}
                                {t(`${e}.title`)}
                            </Button>
                        )
                    }
                </div>
                <div className="col-span-12 sm:col-span-9 space-y-4" >
                    <div className="max-w-xl space-y-2" >
                        <p className="text-lg font-medium" >{t(`${facility}.title`)}</p>
                        <p className="text-sm" >{t(`${facility}.desc`)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}