import productsData from "@/data/products.json";
import ProductCard from "@/components/ui/ProductCard";

const Home = () => {
  const popularProducts = productsData.slice(0, 3);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Hero Section */}
      <section className="bg-primary text-primary-content py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Summer Sale 50% OFF</h1>
          <p className="text-xl mb-8">Hot Deals 🔥 on all summer essentials. Do not miss out!</p>
          <button className="btn btn-secondary btn-lg">Shop Now</button>
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
      <section className="bg-base-200 py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Summer Care Tips</h2>
          <p className="text-base-content/70">Stay hydrated and protect your skin with our expert advice!</p>
        </div>
      </section>
      
      <section className="py-16 px-4 container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Top Brands</h2>
        <p className="text-base-content/70">SunShade | GlowDerma | SummerVibe | AquaCool</p>
      </section>
    </div>
  );
}

export default Home;
