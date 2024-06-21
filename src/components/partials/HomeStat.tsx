// const stats = [
//   { label: 'Founded', value: '2021' },
//   { label: 'Employees', value: '37' },
//   { label: 'Countries', value: '12' },
//   { label: 'Raised', value: '$25M' },
// ]

export default function HomeStat() {
  return (
    <div className="">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <p className="text-base font-semibold leading-7">Relic of Raja Udayana</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">A better workflow</h1>
          <div className="mt-10 grid max-w-xl grid-cols-1 gap-8 text-base leading-7 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                Jolotundo Temple currently has 2 functions.
              </p>
              <p className="mt-8">
                The first is a religious function, where the temple is used for ngalap berkah, prayers, meditation, and rituals.
                Well, on certain days held religious activities such as the night of 1 Suro many tourists come to bathe in order to obtain blessings
                to welcome the Islamic New Year. Likewise, local residents carry out a tradition to ruwat the source as a form of their gratitude for
                the clear water source from this temple which they use for their daily lives. This tradition is carried out by
                bringing Tumpeng (a package of rice with complete side dishes served in large portions) to this temple and then praying together.
              </p>
            </div>
            <div>
              <p>
                The second function of this temple is also a natural tourism object. The most common activity is bathing in the clear water that flows inside the temple.
                This water is drinkable and has a high mineral and oxygen content.
                And there are those who believe it can cure all diseases and if bathing here can make younger.
              </p>
            </div>
          </div>
          {/* <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
            {stats.map((stat, statIdx) => (
              <div key={statIdx} className="flex flex-col gap-y-3 border-l border-white/20 pl-6">
                <dd className="text-3xl font-semibold tracking-tight ">{stat.value}</dd>
                <dt className="text-base leading-7">{stat.label}</dt>
              </div>
            ))}
          </dl> */}
        </div>
      </div>
    </div>
  )
}
