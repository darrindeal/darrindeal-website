import { SimpleLayout } from '@/components/SimpleLayout'

export const metadata = {
  title: 'Contact',
}

export default function Contact() {
  return (
    <SimpleLayout title="Contact" intro="Get in touch with me.">
      <p className="text-base text-zinc-600 dark:text-zinc-400">
        Feel free to reach me at{' '}
        <a href="mailto:hello@darrindeal.com" className="text-teal-500 hover:underline">
          hello@darrindeal.com
        </a>
        .
      </p>
    </SimpleLayout>
  )
}
