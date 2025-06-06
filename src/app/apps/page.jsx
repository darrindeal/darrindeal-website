import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Apps',
}

const apps = [
  { name: 'Pitlog', role: 'Owner & Developer' },
  { name: 'GarageNotes', role: 'Owner & Developer' },
  { name: 'TapList.Cloud', role: 'Owner & Developer' },
  { name: 'iHeartUs', role: 'Primary Developer' },
]

export default function Apps() {
  return (
    <SimpleLayout title="Apps" intro="Some of the apps I've worked on.">
      <ul role="list" className="space-y-4">
        {apps.map((app) => (
          <li key={app.name} className="text-base text-zinc-800 dark:text-zinc-100">
            <span className="font-medium">{app.name}</span> - {app.role}
          </li>
        ))}
      </ul>
    </SimpleLayout>
  )
}
