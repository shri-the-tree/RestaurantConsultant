import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <div className="lg:w-2/3 mx-auto">
          <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
            <Image
              alt="gallery"
              src="/images/restaurant-banner.jpg" // Replace with your image path
              layout="fill"
              objectFit="cover"
              className="opacity-25 absolute inset-0"
            />
            <div className="text-center relative z-10 w-full">
              <h2 className="text-2xl text-gray-900 font-medium title-font mb-2">Restaurant Roulette</h2>
              <p className="leading-relaxed">Discover your next favorite dining experience.</p>
              <Link href="/restaurants" className="mt-3 text-indigo-500 inline-flex items-center">
                Explore Restaurants
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className="flex flex-wrap -mx-2">
            <div className="px-2 w-1/2">
              <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                <Image
                  alt="gallery"
                  src="/images/featured-restaurant.jpg" // Replace with your image path
                  layout="fill"
                  objectFit="cover"
                  className="opacity-25 absolute inset-0"
                />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-xl text-gray-900 font-medium title-font mb-2">Featured Restaurant</h2>
                  <p className="leading-relaxed">Experience our top-rated dining spot of the week.</p>
                  <Link href="/featured" className="mt-3 text-indigo-500 inline-flex items-center">
                    Learn More
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            {/* You can add more sections here as needed */}
          </div>
        </div>
      </div>
    </section>
  );
}