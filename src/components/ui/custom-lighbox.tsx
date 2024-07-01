import React from "react";
import Lightbox, { SlideImage } from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";

type CustomLightboxProps = {
    images: Array<SlideImage>
} & React.HTMLAttributes<HTMLDivElement>;

export const CustomLightbox: React.FC<CustomLightboxProps> = ({ images, ...props }) => {
    const [_, setOpen] = React.useState(false);
    const [index, setIndex] = React.useState(0);

    const toggleOpen = (state: boolean) => () => setOpen(state);

    const updateIndex = ({ index: current }: { index: number }) => setIndex(current);

    const breakpoints = [3840, 1920, 1080, 640, 384, 256, 128];

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
        <Lightbox
            {...props}
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
                style: {
                    width: "100%",
                    aspectRatio: "16 / 9",
                    maxWidth: "900px",
                    margin: "0 auto",
                },
            }}
        />
    );
}
