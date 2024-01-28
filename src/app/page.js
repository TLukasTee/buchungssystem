'use client'

import { Hero } from "@/components/Hero";
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter()

  return (
    <main>
      <Hero/>
    </main>
  )
}