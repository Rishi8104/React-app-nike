import {Navbar} from './Components/Navbar.jsx'
import {PopularProductCard,
  CustomerReviews,
  Footer,
  Hero,
  Service,
  SpecialOffer,
  Subscribe,
  SuperQuality
}from './Sectons'

const App =()=>{
  return(
    <main className="relative">
      <Navbar/>
    <section className='xl:padding-1 wide:padding-r padding-b'>
      <Hero/>
    </section>
    <section className='padding'>
    <PopularProductCard/>
    </section>
    <section className='padding'>
    <SuperQuality/>
    </section>
    <section className='padding-x py-10'>
    <Service/>
    </section>
    <section className='padding-x py-10'>
    <Service/>
    </section>
    <section className='padding'>
    <SpecialOffer/>
    </section>
    <section className='bg-pale-blue padding'>
    <CustomerReviews/>
    </section>
    <section className='padding-x sm:py-32 py-16 w-full'>
    <Subscribe/>
    </section>
    <section className='bg-black padding-x padding-t pb-8'>
    <Footer/>
    </section>
    </main>
  );
};

export default App;