export default function ProductsLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <div className="skeleton h-12 w-64 mx-auto mb-4"></div>
        <div className="skeleton h-6 w-96 mx-auto"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="card bg-base-100 shadow-xl overflow-hidden animate-pulse">
            <div className="skeleton h-64 w-full rounded-none"></div>
            <div className="card-body">
              <div className="skeleton h-8 w-3/4 mb-2"></div>
              <div className="skeleton h-4 w-1/2 mb-4"></div>
              
              <div className="flex justify-between items-center mt-6">
                <div className="skeleton h-8 w-20"></div>
                <div className="skeleton h-12 w-32"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
