export default function ProfileLoading() {
  return (
    <div className="container mx-auto px-4 py-12 flex justify-center">
      <div className="max-w-2xl w-full bg-base-100 shadow-2xl rounded-3xl p-8">
        <div className="skeleton h-10 w-48 mx-auto mb-8"></div>
        
        <div className="flex flex-col items-center sm:flex-row sm:items-start gap-8">
          <div className="skeleton w-32 h-32 rounded-full shrink-0"></div>
          
          <div className="flex-1 space-y-4 w-full text-center sm:text-left mt-4 sm:mt-0">
            <div>
              <div className="skeleton h-4 w-16 mx-auto sm:mx-0 mb-2"></div>
              <div className="skeleton h-8 w-48 mx-auto sm:mx-0"></div>
            </div>
            
            <div className="pt-2">
              <div className="skeleton h-4 w-16 mx-auto sm:mx-0 mb-2"></div>
              <div className="skeleton h-6 w-56 mx-auto sm:mx-0"></div>
            </div>
            
            <div className="pt-8">
              <div className="skeleton h-12 w-32 rounded-lg mx-auto sm:mx-0"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
