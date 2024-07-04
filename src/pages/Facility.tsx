import { Button } from "@/components/ui/button";
import { CustomLightbox } from "@/components/ui/custom-lighbox";
import { IconBowlSpoon, IconHome, IconHome2, IconLayoutBoard, IconToiletPaper } from "@tabler/icons-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { SlideImage } from "yet-another-react-lightbox";

export const Facility = () => {

    const { t } = useTranslation();
    const [facility, setFacility] = useState<string>("facility.toilet");

    const facilities: Record<string, JSX.Element> = {
        "facility.toilet": <IconToiletPaper className="h-4 w-4 mr-2" />,
        "facility.guesthouse": <IconHome className="h-4 w-4 mr-2" />,
        "facility.information": <IconLayoutBoard className="h-4 w-4 mr-2" />,
        "facility.gazebo": <IconHome2 className="h-4 w-4 mr-2" />,
        "facility.foodcourt": <IconBowlSpoon className="h-4 w-4 mr-2" />,
    }

    const images: Record<string, Array<SlideImage>> = {
        "facility.toilet": [
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/toilet.jpg",
                height: 256,
                width: 384,
            },
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/toilet_1.jpeg",
                height: 256,
                width: 384,
            }
        ],
        "facility.guesthouse": [
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/guest_house.jpg",
                height: 256,
                width: 384,
            },
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/guest_house_1.jpeg",
                height: 256,
                width: 384,
            }
        ],
        "facility.gazebo": [
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/gazebo.jpg",
                height: 256,
                width: 384,
            }
        ],
        "facility.foodcourt": [
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/foodcourt.jpg",
                height: 256,
                width: 384,
            },
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/foodcourt_1.jpg",
                height: 256,
                width: 384,
            },
        ],
        "facility.information": [
            {
                src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/information_board.jpg",
                height: 256,
                width: 384,
            },
        ]
    }

    return (
        <div className="max-w-7xl mx-auto my-8 px-4 sm:px-0" >
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">{t('facility.title')}</h2>
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
                    <div className="max-w-xl space-y-4" >
                        <p className="text-xl font-semibold" >{t(`${facility}.title`)}</p>
                        {/* <img className="h-64 w-96 object-cover rounded-sm" src={images[facility]} alt="" /> */}
                        <div className="max-h-64 max-w-96 object-cover rounded-sm" >
                            
                        </div>
                        <CustomLightbox images={images[facility]} />
                        <p className="" >{t(`${facility}.desc`)}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}