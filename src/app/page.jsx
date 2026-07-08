import productsData from "@/data/products.json";
import ProductCard from "@/components/ui/ProductCard";
import Link from "next/link";

export const metadata = {
  title: 'Home',
};

const Home = () => {
  const popularProducts = productsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="hero-gradient text-primary-content py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 drop-shadow-md">Summer Sale 50% OFF</h1>
          <p className="text-2xl font-semibold mb-8 drop-shadow-lg tracking-wide text-white/90">
            <span className="text-yellow-300 font-bold uppercase animate-pulse">Hot Deals 🔥</span> on all summer essentials. <br className="sm:hidden" />
            Do not miss out!
          </p>
          <Link href="/products" className="btn btn-secondary btn-lg shadow-xl hover:scale-105 transition-transform">Shop Now</Link>
        </div>
      </section>

      {/* Popular Products Section */}
      <section className="py-16 px-4 container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">Popular Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {popularProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Extra Sections */}
      <section className="bg-base-200 py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Summer Care Tips</h2>
            <p className="text-base-content/70 text-lg max-w-2xl mx-auto">Stay hydrated and protect your skin with our expert advice for a perfect summer experience!</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-xl border-t-4 border-secondary hover:-translate-y-2 transition-transform">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">💧</div>
                <h3 className="card-title text-xl">Stay Hydrated</h3>
                <p className="text-base-content/70">Drink at least 8 glasses of water a day to keep your body refreshed under the hot sun.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl border-t-4 border-primary hover:-translate-y-2 transition-transform">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🧴</div>
                <h3 className="card-title text-xl">Apply Sunscreen</h3>
                <p className="text-base-content/70">Always use SPF 30+ sunscreen and reapply every two hours when outdoors.</p>
              </div>
            </div>
            
            <div className="card bg-base-100 shadow-xl border-t-4 border-accent hover:-translate-y-2 transition-transform">
              <div className="card-body items-center text-center">
                <div className="text-5xl mb-4">🕶️</div>
                <h3 className="card-title text-xl">Wear Protection</h3>
                <p className="text-base-content/70">Protect your eyes with UV-blocking sunglasses and wear wide-brimmed hats.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="py-20 px-4 container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-2">Top Brands We Trust</h2>
          <div className="divider w-24 mx-auto bg-primary h-1 rounded-full"></div>
        </div>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-80">
          <div className="text-3xl font-black text-base-content hover:text-primary transition-colors cursor-pointer grayscale hover:grayscale-0">☀️ SunShade</div>
          <div className="text-3xl font-black text-base-content hover:text-secondary transition-colors cursor-pointer grayscale hover:grayscale-0">✨ GlowDerma</div>
          <div className="text-3xl font-black text-base-content hover:text-accent transition-colors cursor-pointer grayscale hover:grayscale-0">🌴 SummerVibe</div>
          <div className="text-3xl font-black text-base-content hover:text-info transition-colors cursor-pointer grayscale hover:grayscale-0">🌊 AquaCool</div>
        </div>
      </section>
    </div>
  );
}

export default Home;
