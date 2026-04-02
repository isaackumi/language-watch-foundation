import HomeIntro from '@/components/sections/HomeIntro'
import About from '@/components/sections/About'
import Services from '@/components/sections/Services'
import TeamPreview from '@/components/sections/TeamPreview'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeIntro />
      <About />
      <Services />
      <TeamPreview />
      <Contact />
    </main>
  )
}
