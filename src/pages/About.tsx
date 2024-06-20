import { images } from "@/constant/image"

const stats = [
    { label: 'Transactions every 24 hours', value: '44 million' },
    { label: 'Assets under holding', value: '$119 trillion' },
    { label: 'New users annually', value: '46,000' },
]

export const About = () => {
    return (
        <main className="my-12" >
            {/* Content section */}
            <div className="mx-auto max-w-7xl">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our mission</h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto space-y-4">
                            <p className="text-base text-gray-600">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
                                Eleifend egestas fringilla sapien.  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
                                Eleifend egestas fringilla sapien.
                            </p>
                            <p className="text-base text-gray-600">
                                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
                                Eleifend egestas fringilla sapien.  Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At arcu, sit dui mi, nibh dui, diam
                                eget aliquam. Quisque id at vitae feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
                                Eleifend egestas fringilla sapien.
                            </p>
                        </div>
                        <div className="lg:flex lg:flex-auto lg:justify-center">
                            <dl className="w-64 space-y-8 xl:w-80">
                                {stats.map((stat) => (
                                    <div key={stat.label} className="flex flex-col-reverse gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
                                        <dd className="text-5xl font-semibold tracking-tight text-gray-900">{stat.value}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team section */}
            <div className="mx-auto mt-8 max-w-7xl sm:mt-16">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our team</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Sit facilis neque ab nulla vel. Cum eos in laudantium. Temporibus eos totam in dolorum. Nemo vel facere
                        repellendus ut eos dolores similique.
                    </p>
                </div>
                <ul
                    role="list"
                    className="mx-auto mt-20 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-16 text-center sm:grid-cols-3 md:grid-cols-4 lg:mx-0 lg:max-w-none lg:grid-cols-5 xl:grid-cols-6"
                >
                    {images.map((person) => (
                        <li key={person.original}>
                            <img className="mx-auto h-32 w-32 rounded-full" src={person.original} alt="" />
                            <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">{person.caption}</h3>
                            <p className="text-sm leading-6 text-gray-600">{person.thumbnailCaption}</p>
                        </li>
                    ))}
                </ul>
            </div>

        </main>
    )
}