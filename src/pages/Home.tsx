import { HomeBanner } from "@/components/partials/HomeBanner";
import { HomeExplore } from "@/components/partials/HomeExplore";
import HomeStat from "@/components/partials/HomeStat";

export const Home = () => {

    // const { t } = useTranslation();

    return (
        <>
            {/* banner */}
            <HomeBanner />

            {/* explore */}
            <HomeExplore />

            {/* facility */}
            <HomeStat />

        </>
    )
}