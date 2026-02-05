import { customerImages } from "@/utils/data/customerPostData";

const CustomerPosts = () => {
  
  return (
    <>
      <div>
        <h3 className="text-xl font-semibold mb-6">Customer Posts</h3>
        <div className="grid grid-cols-4 gap-2">
          {customerImages.map((img, index) => (
            <div
              key={index}
              className="w-16 h-16 overflow-hidden hover:opacity-75 transition-opacity"
            >
              <img
                src={img}
                alt={`Customer ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomerPosts;
