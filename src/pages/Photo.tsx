import React from "react";
import { useTranslation } from "react-i18next";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";

export const Photo = () => {

    const { t } = useTranslation();

    const [_, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const toggleOpen = (state: boolean) => () => setOpen(state);

    const updateIndex = ({ index: current }: { index: number }) => setIndex(current);

    const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

    const images: SlideImage[] = [
        {
            src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/gempeng.jpg",
            height: 256,
            width: 384,
        },
        {
            src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/saka.jpg",
            height: 256,
            width: 384,
        },
        {
            src: "https://pub-c8bebddd72ea42bb9b2a388bb3d5cca5.r2.dev/cungkup.jpg",
            height: 256,
            width: 384,
        },
        {
            src: "https://media-cdn.tripadvisor.com/media/photo-s/08/e7/a3/75/candi-jolotundo.jpg",
            height: 256,
            width: 384,
        }
    ];

    const texts = ["gempeng", "saka", "cungkup", "statue"]

    const slides = images.map(({ src, width, height }) => ({
        src,
        width,
        height,
        srcSet: breakpoints.map((breakpoint) => ({
            src: src,
            width: breakpoint,
            height: Math.round(((height ?? 1) / (width ?? 1)) * breakpoint),
        })),
    }));



    return (
        <div className="max-w-sm mx-4 sm:max-w-7xl sm:mx-auto" >
            <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">{t('gallery.title')}</h2>
            <p className="text-base" >
                {t('gallery.desc')}
            </p>
            {/* historry */}
            <div className="max-w-sm sm:max-w-7xl mx-4 sm:mx-auto mt-16 text-center" >
                <Lightbox
                    index={index}
                    slides={slides}
                    plugins={[Inline]}
                    on={{
                        view: updateIndex,
                        click: toggleOpen(true),
                    }}
                    carousel={{
                        padding: 0,
                        spacing: 0,
                        imageFit: "cover",
                    }}
                    inline={{
                        className: "mx-auto h-96 max-w-2xl"
                    }}
                />

                <div className="max-w-sm mx-auto space-y-2 text-center my-8" >
                    <p className="text-lg font-semibold" >{t(`gallery.${texts[index]}.title`)}</p>
                    <p className="text-sm sm:text-base" >
                        {t(`gallery.${texts[index]}.desc`)}
                    </p>
                </div>
            </div>


        </div>
    )
}