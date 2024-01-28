
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'


export function Hero() {
  return (
    <Container   className="text-center mt-64" >
      <h1 className="mx-auto max-w-4xl  mb-8 font-display text-5xl font-medium tracking-tight text-slate-900 sm:text-7xl">
        REIFEN ECKMANN{' '} </h1>
      <span className="relative text-cyan-500    text-2xl font-medium tracking-tight  font-display ">Wir sind die Kraft zwischen Auto     und Straße</span>

      
      <div className="mt-10 flex justify-center gap-x-6 ">
        <Button href="/terminkalender" className='bg-cyan-600'>Online Termin vereinbaren</Button>
       
      </div>
        {/** <div className="mt-36 lg:mt-44">
        <p className="font-display text-2xl text-slate-900">
          Unsere Partner
        </p>
      <ul
          role="list"
          className="mt-8 flex items-center justify-center gap-x-8 sm:flex-col  sm:gap-x-0 sm:gap-y-10 xl:flex-row xl:gap-x-12 xl:gap-y-0"
        >
          {[
            [
              { name: 'Transistor', logo: logoTransistor },
              { name: 'Tuple', logo: logoTuple },
              { name: 'StaticKit', logo: logoStaticKit },
              { name: 'StaticKit', logo: logo3 },
            ],
            [
              { name: 'Mirage', logo: logoMirage },
              { name: 'Laravel', logo: logoLaravel },
              { name: 'Statamic', logo: logoStatamic },
              { name: 'Statamic', logo: logo2 },
            ],
          ].map((group, groupIndex) => (
            <li key={groupIndex}>
              <ul
                role="list"
                className="flex flex-col items-center gap-y-8 sm:flex-row sm:gap-x-12 sm:gap-y-0"
              >
                {group.map((company) => (
                  <li key={company.name} className="flex">
                    <Image  src={company.logo} alt={company.name} unoptimized />
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>*/}
    </Container>
  )
}
