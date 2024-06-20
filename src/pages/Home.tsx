import { HomeBanner } from "@/components/partials/HomeBanner";
import { HomeExplore } from "@/components/partials/HomeExplore";
import { HomeHistory } from "@/components/partials/HomeHistory";
import HomeStat from "@/components/partials/HomeStat";
import { HomeCta } from "../components/partials/HomeCta";

export const Home = () => {

    // const { t } = useTranslation();

    return (
        <>
            {/* banner */}
            <HomeBanner />

            {/* explore */}
            <HomeExplore />


            {/* historry */}
            <HomeHistory />

            {/* facility */}
            <HomeStat />

            {/* map */}
            <HomeCta />

        </>
    )
}