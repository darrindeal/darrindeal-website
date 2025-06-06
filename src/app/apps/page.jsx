import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoHelioStream from '@/images/logos/helio-stream.svg'

const apps = [
  {
    name: 'Planetaria',
    subtitle: 'Explore the universe from your phone.',
    link: {
      href: '#',
    },
    logo: logoPlanetaria,
  },
  {
    name: 'Animaginary',
    subtitle: 'Bring your stories to life with animation.',
    link: {
      href: '#',
    },
    logo: logoAnimaginary,
  },
  {
    name: 'HelioStream',
    subtitle: 'Stream video across the galaxy.',
    link: {
      href: '#',
    },
    logo: logoHelioStream,
  },
]

export const metadata = {
  title: 'Apps',
  description: 'The apps I\'ve built and maintain.',
}

export default function Apps() {
  return (
    <SimpleLayout title="Apps" intro="The apps I\'ve built and maintain.">
      <ul role="list" className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
        {apps.map((app) => (
          <Card as="li" key={app.name}>
            <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md ring-1 shadow-zinc-800/5 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image src={app.logo} alt="" className="h-8 w-8" unoptimized />
            </div>
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <Card.Link href={app.link.href}>{app.name}</Card.Link>
            </h2>
            <Card.Description>{app.subtitle}</Card.Description>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
