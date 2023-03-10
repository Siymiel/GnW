import Head from 'next/head';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSlider from "@/components/HeroSlider";
import WorkWithUs from '@/sections/aboutus/WorkWithUs';
import Partners from '@/sections/aboutus/Partners';
import Contact from '@/sections/aboutus/Contact';
export default function AboutUs() {
    return (
      <>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main>
          <NavBar />
          <HeroSlider />
          <section className="pt-36  max-w-4xl mx-auto py-20">
            <h1 className="text-4xl pb-10 font-bold tracking-wide text-center text-gray-700 uppercase">
              Who we are
            </h1>
            <p className="text-lg font-normal leading-8 tracking-wide text-center text-gray-500">
              LeadVision is quickly becoming the leader in lead generation for
              niche markets. Through a combination of inbound marketing
              techniques, our team of experts generate sales leads for products
              and services in industries such as industrial equipment, solar
              power, and moving. We are a creative bunch who seek out obscure
              markets and insert ourselves to provide marketing support to
              hundreds of companies in over seven countries.
            </p>
          </section>
          <WorkWithUs />
          <Partners />
          <Contact />
          <Footer />
        </main>
      </>
    );
}