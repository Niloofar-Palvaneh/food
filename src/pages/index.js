import Image from 'next/image'
import Header from '@/components/header/Header'
import EnjoySection from '@/components/enjoySection/EnjoySection'
import FoodSection from '@/components/foodSection/FoodSection'
import HighlightSection from '@/components/highlightSection/HighlightSection'
import FamilySection from '@/components/familySection/FamilySection'
import Footer from '@/components/footer/Footer'

export default function Home() {
  return (
    <>
    <Header/>
    <EnjoySection/>
    <FoodSection/>
    <HighlightSection/>
    <FamilySection/>
    <Footer/>
    </>
  )
}
