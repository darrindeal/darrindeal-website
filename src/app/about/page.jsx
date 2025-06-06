import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  XIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-orange-500 dark:text-zinc-200 dark:hover:text-orange-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-orange-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description:
    'I\'m Spencer Sharp. I live in New York City, where I design the future.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            My name is Darrin Deal.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>I'm a builder at heart—whether that's spinning up a fresh Laravel app, sketching 
              out a React Native screen on an iPad, or fine-tuning a Swift side project at 
              midnight because inspiration struck. I run <a href="https://wellspring.marketing">Wellspring</a>, 
              my small-business marketing business where we treat every project like it's 
              our own brand on the line. I also have my personal app 
              experiments that keep my dev muscles up and my curiosity peaked.</p>

            <p>Home base is Indianapolis, where I'm a happily married, a father, chief backyard BBQ tinker-er, and full-time wrangler of two dogs and one chill cat. Those BBQ on the weekends remind me why I love building things in the first place: craft, patience, and a payoff you can share.</p>
            
            <p>On the tech front, PHP, Laravel, Livewire, React Native, and Swift are my go-to. I'm forever chasing that sweet spot where clean code, intuitive UX, and solid marketing collide to create something users actually rave about and can use.</p>

            <p>If you ar into dev stories, hard-won marketing lessons, the occasional brisket tip, or the thoughtful husband/dad comment, I'd love to stay in touch. Join the newsletter and let's keep building cool stuff together.</p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://x.com/darrindeal" icon={XIcon}>
              Follow on X
            </SocialLink>
            <SocialLink href="https://instagram.com/darrindeal" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/darrindeal" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/darrindeal/" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
