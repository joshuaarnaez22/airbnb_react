import Head from 'next/head'
import { Header, Banner, SmallCard,MediumCard,LargeCard,Footer } from './reusable-components'


export default function Home({exploreData,exploreData2}) {
  return (
    <div className="">
      <Head>
        <title>Air-bnb-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>


      {/* components */}
      <Header/>
      <Banner/>
      
      <main className="max-w-7xl mx-auto px-8 sm:px-16 ">
          <section className="pt-6">
              <h2 className="text-1xl font-bold pb-5 sm:text-2xl md:text-3xl lg:text-4xl">Expore Nearby</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {exploreData?.map(({img,location,distance}) => (
                <SmallCard key={img} img={img} location={location} distance={distance}/>
              ))}
              </div>
              
          </section>
               
          <section className="pt-6">
          <h2 className="text-1xl sm:text-2xl md:text-3xl lg:text-4xl py-8 font-bold">Live Anywhere</h2>
          <div className="flex space-x-3 overflow-x-scroll overflow-y-hidden scrollbar-hide">
              {exploreData2?.map(({img, title}) => (
                  <MediumCard key={img}img={img} title={title}/>
              ))}
          </div>
          </section>

                <LargeCard
                img="https://links.papareact.com/4cj"
                title="The Greatest Outdoors"
                decription="Wishlists curated by airbnd"
                buttontext="Get Inspired"
                />
      </main>
      <Footer/>
    </div>
  )
}

export async function getStaticProps(){
    const exploreData = await fetch('https://links.papareact.com/pyp').then((res) => res.json())
    const exploreData2 = await fetch('https://links.papareact.com/zp1').then((res) => res.json())
    

    return {
        props: {
            exploreData,
            exploreData2
        }
    }
}