import { Container } from '@/components/Container'

export const metadata = {
  title: 'Home',
}

export default function Home() {
  return (
    <Container className="mt-16 sm:mt-32">
      <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
        Darrin Deal
      </h1>
      <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
        I&rsquo;m a web and mobile app developer focused on Laravel, React Native and Swift. I build apps that help people in their everyday lives.
      </p>
    </Container>
  )
}
