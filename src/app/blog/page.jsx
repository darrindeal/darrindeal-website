import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Blog',
}

export default function Blog() {
  return (
    <SimpleLayout title="Blog" intro="Thoughts and updates.">
      <p className="text-base text-zinc-600 dark:text-zinc-400">Blog posts will appear here soon.</p>
    </SimpleLayout>
  )
}
