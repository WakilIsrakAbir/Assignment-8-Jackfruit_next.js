const ProductDetailsPage = ({ params }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-4">Product Details</h1>
      <p className="text-lg">Product ID: {params.id}</p>
      <p className="text-base-content/70 mt-4">Full product details will be displayed here.</p>
    </div>
  );
}

export default ProductDetailsPage;
