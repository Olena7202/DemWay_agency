import { Hero } from '../components/Hero'
import { Why } from '../components/Why'
import { ServicesTeaser } from '../components/ServicesTeaser'
import { OpeningOffers } from '../components/OpeningOffers'
import { Approach } from '../components/Approach'
import { WhyChoose } from '../components/WhyChoose'
import { Faq } from '../components/Faq'
import { Contact } from '../components/Contact'

export function HomePage() {
  return (
    <>
      <Hero />
      <Why />
      <ServicesTeaser />
      <OpeningOffers />
      <Approach />
      <WhyChoose />
      <Faq />
      <Contact />
    </>
  )
}
