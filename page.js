import Image from 'next/image';
import Link from "next/link";

// Sample data for restaurants
const restaurants = [
  {
    id: 1,
    name: '3 Mangoes',
    description: 'Delicious Indian cuisine with a focus on mango dishes.',
    image: '/images/mango2.jpg',
    rating: 4.5,
    website: 'https://www.zomato.com/bangalore/3-mangos-juice-and-snacks-shanti-nagar-bangalore', // Add restaurant website URL
  },
  {
    id: 2,
    name: 'Pasta Street',
    description: 'Authentic Italian pasta and pizza with generous cheese.',
    image: '/images/pasta.jpg',
    rating: 4.2,
    website: 'https://www.zomato.com/bangalore/pasta-street-cunningham-road', // Add restaurant website URL
  },
  {
    id: 3,
    name: 'Daily Sushi',
    description: 'Fresh and innovative sushi rolls.',
    image: '/images/sushi1.jpeg',
    rating: 4.8,
    website: 'https://www.zomato.com/bangalore/daily-sushi-church-street-bangalore', // Add restaurant website URL
  },
  {
    id: 4,
    name: 'Kailash Parbhat',
    description: 'North Indian feast served extravagantly.',
    image: '/images/north1.jpg',
    rating: 4.4,
    website: 'https://www.zomato.com/bangalore/kailash-parbat-2-jayanagar-bangalore', // Add restaurant website URL
  },
];

export default function Home() {
  return (
      <div className="bg-gray-50 min-h-screen">
        <header className="bg-white shadow-sm">
          <div className="container mx-auto flex justify-between items-center p-4">
            <a className="font-semibold text-xl text-gray-800">Restaurant Roulette</a>
            <nav>
              <Link href="/app/homepage.js" className="text-gray-600 hover:text-gray-800 px-3">
                Home
              </Link>
              <a className="text-gray-600 hover:text-gray-800 px-3">Restaurants</a>
              <a className="text-gray-600 hover:text-gray-800 px-3">Favorites</a>
            </nav>
          </div>
        </header>

        <main className="container mx-auto py-8">
          <h1 className="text-3xl font-light text-gray-800 mb-8">Featured Restaurants</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Map over the restaurants array to create multiple listings */}
            {restaurants.map((restaurant) => (
                <div key={restaurant.id} className="bg-white p-6 rounded-lg shadow-sm">
                  <Image
                      src={restaurant.image}
                      alt={restaurant.name}
                      width={300}
                      height={200}
                      className="w-full h-48 object-cover mb-4 rounded"
                  />
                  <h2 className="text-xl font-medium text-gray-800 mb-2">{restaurant.name}</h2>
                  <p className="text-gray-600 mb-4">{restaurant.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-gray-800">Rating: {restaurant.rating}/5</span>
                    <a
                        href={restaurant.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                    >
                      View Menu
                    </a>
                  </div>
                </div>
            ))}
          </div>
        </main>
      </div>
  );
}
