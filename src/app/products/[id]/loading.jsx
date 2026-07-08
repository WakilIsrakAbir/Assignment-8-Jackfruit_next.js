export default function ProductDetailsLoading() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="bg-base-100 shadow-xl rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Image Skeleton */}
        <div className="md:w-1/2">
          <div className="skeleton h-[500px] w-full rounded-none"></div>
        </div>
        
        {/* Details Skeleton */}
        <div className="md:w-1/2 p-8 flex flex-col justify-center">
          <div className="flex justify-between items-start mb-4">
            <div className="w-full">
              <div className="skeleton h-6 w-24 mb-4"></div>
              <div className="skeleton h-10 w-3/4 mb-2"></div>
              <div className="skeleton h-6 w-1/3"></div>
            </div>
            <div className="skeleton h-10 w-24"></div>
          </div>
          
          <div className="skeleton h-8 w-48 mb-8 mt-4"></div>
          
          {/* Description Lines */}
          <div className="space-y-3 mb-10">
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-full"></div>
            <div className="skeleton h-4 w-5/6"></div>
            <div className="skeleton h-4 w-4/6"></div>
          </div>
          
          <div className="flex gap-4 mt-auto">
            <div className="skeleton h-14 flex-1 rounded-lg"></div>
            <div className="skeleton h-14 w-16 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
