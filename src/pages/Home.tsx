import { candi, gallery } from "@/constant/ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";

export const Home = () => {

    // const { t } = useTranslation();

    return (
        <>
            {/* banner */}
            <div className="max-w-sm sm:max-w-7xl mx-auto h-screen relative">

                <img src={candi} alt="Jolotundo Background" className="absolute inset-0 w-full h-full object-cover rounded-2xl" />


                <div className="absolute inset-0 bg-black opacity-60 rounded-2xl"></div>
                <div className="relative h-full w-full p-8 flex flex-col items-center justify-between max-w-sm mx-auto rounded-2xl text-white">
                    <h1 className="text-center text-3xl font-dancing">
                        Welcome To <br /> Candi Pertirtaan Jolotundo
                    </h1>
                    <div className="flex flex-col items-center space-y-4">
                        <p className="text-center">
                            Amertamanthana yang menceritakan proses mendapatkan air suci dengan perantara Gunung Mahameru ketika dililit ular Batara Wasuki.
                        </p>
                        <div className="flex items-center justify-center w-10 h-12 rounded-full border border-white">
                            <ChevronDownIcon className="text-white h-6 w-6" />
                        </div>
                    </div>
                </div>
            </div>

            {/* explore */}
            <div className="max-w-7xl mx-auto mt-16" >
                <div className="flex flex-row justify-between" >
                    <div className="max-w-2xl space-y-4" >
                        <p className="text-2xl" >Explore Jolotundo <span className="font-medium" >Cultural Aspects</span></p>
                        <p className="text-base" >
                            Today I gave inspiration for UI's exploration of travel website design for the Indonesian island of Bali.
                            This website is designed for prospective visitors to explore a wide variety of activities and cultures in Bali.I hope you like it
                        </p>
                    </div>

                </div>

                <div className="grid grid-cols-12 gap-4 mt-8" >
                    {
                        gallery.map(() => (
                            <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                                <img className="absolute inset-0 w-full h-full object-cover" src={candi} alt="Descriptive alt text" />

                                <div className="absolute inset-0 bg-black opacity-50"></div>

                                <div className="relative p-4 flex flex-col items-end justify-end h-full">
                                    <p className="text-white">
                                        Here's some text inside the card content with p-8 padding.
                                    </p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>

            {/* historry */}
            <div className="max-w-7xl mx-auto mt-16" >
                <div className="max-w-2xl space-y-4" >
                    <p className="text-2xl" >Jolotundo <span className="font-medium" >History</span> Timeline</p>
                    <p className="text-slate-800 text-base" >
                        Today I gave inspiration for UI's exploration of travel website design for the Indonesian island of Bali.
                        This website is designed for prospective visitors to explore a wide variety of activities and cultures in Bali.I hope you like it
                    </p>
                </div>

                <ul className="timeline timeline-vertical mt-8">

                    <li>
                        <hr />
                        <div className="timeline-start mr-8">
                            <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                                <img className="absolute inset-0 w-full h-full object-cover" src={candi} alt="Descriptive alt text" />

                                <div className="absolute inset-0 bg-black opacity-50"></div>

                                <div className="relative p-4 flex flex-col items-end justify-end h-full">
                                    <p className="text-white">
                                        Here's some text inside the card content with p-8 padding.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box rounded-lg p-0 ml-8 ">
                            <div className="max-w-md m-4 space-y-4" >
                                <p className="font-medium" >Title of event - 1987</p>
                                <p className="text-sm" >
                                    Petirtaan Jolotundo terletak di lereng di utara Gunung Penanggungan, Desa Seloliman,
                                    Kecamatan Trawas. Jarak dari kota Surabaya +55km, dapat di capai dengan kendaraan pribadi roda 2
                                </p>
                            </div>
                        </div>
                        <hr />
                    </li>

                    <li >
                        <hr />
                        <div className="timeline-start timeline-box rounded-lg p-0 mr-8 ">
                            <div className="max-w-md m-4 space-y-4" >
                                <p className="font-medium" >Title of event - 1987</p>
                                <p className="text-sm" >
                                    Petirtaan Jolotundo terletak di lereng di utara Gunung Penanggungan, Desa Seloliman,
                                    Kecamatan Trawas. Jarak dari kota Surabaya +55km, dapat di capai dengan kendaraan pribadi roda 2
                                </p>
                            </div>
                        </div>

                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end ml-8">
                            <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                                <img className="absolute inset-0 w-full h-full object-cover" src={candi} alt="Descriptive alt text" />

                                <div className="absolute inset-0 bg-black opacity-50"></div>

                                <div className="relative p-4 flex flex-col items-end justify-end h-full">
                                    <p className="text-white">
                                        Here's some text inside the card content with p-8 padding.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </li>

                    <li>
                        <hr />
                        <div className="timeline-start mr-8">
                            <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                                <img className="absolute inset-0 w-full h-full object-cover" src={candi} alt="Descriptive alt text" />

                                <div className="absolute inset-0 bg-black opacity-50"></div>

                                <div className="relative p-4 flex flex-col items-end justify-end h-full">
                                    <p className="text-white">
                                        Here's some text inside the card content with p-8 padding.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end timeline-box rounded-lg p-0 ml-8 ">
                            <div className="max-w-md m-4 space-y-4" >
                                <p className="font-medium" >Title of event - 1987</p>
                                <p className="text-sm" >
                                    Petirtaan Jolotundo terletak di lereng di utara Gunung Penanggungan, Desa Seloliman,
                                    Kecamatan Trawas. Jarak dari kota Surabaya +55km, dapat di capai dengan kendaraan pribadi roda 2
                                </p>
                            </div>
                        </div>
                        <hr />
                    </li>

                    <li >
                        <hr />
                        <div className="timeline-start timeline-box rounded-lg p-0 mr-8 ">
                            <div className="max-w-md m-4 space-y-4" >
                                <p className="font-medium" >Title of event - 1987</p>
                                <p className="text-sm" >
                                    Petirtaan Jolotundo terletak di lereng di utara Gunung Penanggungan, Desa Seloliman,
                                    Kecamatan Trawas. Jarak dari kota Surabaya +55km, dapat di capai dengan kendaraan pribadi roda 2
                                </p>
                            </div>
                        </div>

                        <div className="timeline-middle">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" /></svg>
                        </div>
                        <div className="timeline-end ml-8">
                            <div className="h-40 sm:h-80 col-span-12 sm:col-span-3 relative shadow-lg rounded-lg overflow-hidden" >
                                <img className="absolute inset-0 w-full h-full object-cover" src={candi} alt="Descriptive alt text" />

                                <div className="absolute inset-0 bg-black opacity-50"></div>

                                <div className="relative p-4 flex flex-col items-end justify-end h-full">
                                    <p className="text-white">
                                        Here's some text inside the card content with p-8 padding.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <hr />
                    </li>

                </ul>

                <div className="flex items-center justify-center mt-8" >
                    <button type="button" className="text-white bg-slate-950 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-3">
                        Download Naskah
                    </button>
                </div>

            </div>

            {/* facility */}
            

            {/* map */}


        </>
    )
}