import Link from 'next/link';

const ProductCard = ({ product }) => {
  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <figure className="h-64 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg">{product.name}</h2>
          <div className="badge badge-secondary">${product.price}</div>
        </div>
        <div className="flex items-center gap-1 mt-1 text-sm text-base-content/70">
          <span className="text-yellow-500">★</span>
          <span>{product.rating}</span>
        </div>
        <p className="text-sm mt-2 line-clamp-2">{product.description}</p>
        <div className="card-actions justify-end mt-4">
          <Link href={`/products/${product.id}`} className="btn btn-primary w-full">
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
