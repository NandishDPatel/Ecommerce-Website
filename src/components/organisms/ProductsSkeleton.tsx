export const ProductsSkeleton = () => {
  return (
    <div className="flex gap-2 p-8 mx-auto animate-pulse">
      {/* 1. Filter Column Skeleton */}
      <div className="mt-8 w-64 hidden md:block">
        <div className="h-8 w-3/4 bg-gray-200 mb-4 rounded"></div>
        {[...Array(5)].map((_, i) => (
          <div key={i} className="h-4 w-full bg-gray-100 mb-2 rounded"></div>
        ))}
      </div>

      <div className="flex-1">
        {/* 2. Sort Bar Skeleton */}
        <div className="flex justify-end py-5">
          <div className="h-8 w-40 bg-gray-200 rounded"></div>
        </div>

        {/* 3. Products Grid Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="flex flex-col gap-2">
              <div className="aspect-[3/4] w-full bg-gray-200 rounded-lg"></div>
              <div className="h-4 w-2/3 bg-gray-200 rounded mt-2"></div>
              <div className="h-4 w-1/2 bg-gray-100 rounded"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};