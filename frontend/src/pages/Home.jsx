
import BestSeller from '../components/BestSeller'
import Hero from '../components/hero'
import LatestCollections from '../components/LatestCollections'
import NewsletterBox from '../components/NewsLetterBox'
import OurPolicy from '../components/OurPolicy'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestCollections/>
      <BestSeller/>
      <OurPolicy/>
      <NewsletterBox/>
      
    </div>
  )
}

export default Home
