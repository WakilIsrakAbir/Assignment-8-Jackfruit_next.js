import productsData from "@/data/products.json";
import Link from 'next/link';

export async function generateMetadata({ params }) {
  const { id } = await params;
  const product = productsData.find(p => p.id.toString() === id);
  
  if (!product) {
    return { title: 'Product Not Found' };
  }
  
  return {
    title: product.name,
    description: product.description,
  };
}

import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const ProductDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const { id } = await params;
  const product = productsData.find(p => p.id.toString() === id);

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Product Not Found</h1>
        <Link href="/products" className="btn btn-primary">Back to Products</Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        <div className="md:w-1/2">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <div>
              <div className="badge badge-primary mb-2">{product.category}</div>
              <h1 className="text-4xl font-bold">{product.name}</h1>
              <p className="text-xl text-base-content/70 mt-2">by {product.brand}</p>
            </div>
            <div className="text-3xl font-bold text-secondary">${product.price}</div>
          </div>
          
          <div className="flex items-center gap-2 mb-6">
            <span className="text-yellow-500 text-xl">★</span>
            <span className="text-lg font-medium">{product.rating}</span>
            <span className="text-base-content/50">|</span>
            <span className={product.stock > 0 ? "text-success" : "text-error"}>
              {product.stock > 0 ? `In Stock (${product.stock})` : "Out of Stock"}
            </span>
          </div>

          <p className="text-lg mb-8">{product.description}</p>
          
          <div className="flex gap-4 mt-auto">
            <button className="btn btn-primary flex-1 btn-lg">Add to Cart</button>
            <button className="btn btn-outline btn-lg">♥</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailsPage;
