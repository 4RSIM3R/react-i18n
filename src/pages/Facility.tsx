import { Button } from "@/components/ui/button";
import { IconBowlSpoon, IconHome, IconHome2, IconLayoutBoard, IconToiletPaper } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

export const Facility = () => {

    const { t } = useTranslation();
    const [facility, setFacility] = useState<string>("facility.toilet");

    const facilities: Record<string, JSX.Element> = {
        "facility.toilet": <IconToiletPaper className="h-4 w-4 mr-2" />,
        "facility.guesthouse": <IconHome className="h-4 w-4 mr-2" />,
        "facility.information": <IconLayoutBoard className="h-4 w-4 mr-2" />,
        "facility.gazebo": <IconHome2  className="h-4 w-4 mr-2"/>,
        "facility.foodcourt": <IconBowlSpoon className="h-4 w-4 mr-2" />,
    }

    return (
        <div className="max-w-7xl mx-auto my-8 px-4 sm:px-0" >
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">{t('facility.title')}</h2>
            <p className="text-base mt-2 mb-8" >{t('facility.desc')}</p>
            <div className="grid grid-cols-12 gap-4 " >
                <div className="col-span-12 sm:col-span-3 space-y-0 sm:space-y-2 space-x-2 sm:space-x-0 flex flex-row sm:flex-col items-center sm:items-start justify-start overflow-x-scroll sm:overflow-hidden" >
                    {
                        Object.keys(facilities).map((e) =>
                            <Button className="w-56 flex items-center justify-start" onClick={() => setFacility(e)} variant={facility == e ? 'default' : 'outline'} >
                                {facilities[e]}
                                {t(`${e}.title`)}
                            </Button>
                        )
                    }
                </div>
                <div className="col-span-12 sm:col-span-9 space-y-4" >
                    <div className="max-w-xl space-y-2" >
                        
                        <p className="text-xl font-medium" >{t(`${facility}.title`)}</p>
                        <p className="" >{t(`${facility}.desc`)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}