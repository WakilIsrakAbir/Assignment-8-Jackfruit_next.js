import productsData from "@/data/products.json";
import ProductCard from "@/components/ui/ProductCard";

export const metadata = {
  title: 'Products',
  description: 'Browse our collection of summer essentials.',
};

const ProductsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-10 text-center">Our Summer Collection</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {productsData.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
