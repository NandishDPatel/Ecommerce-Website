const MensCollection = () => {
  return (
    <section className="bg-black py-16 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Left Side - Image */}
        <div className="flex justify-center">
          <img
            src="src\assets\posters\men-collection.jpeg"
            alt="Women's Fashion"
            className="w-full max-w-md object-cover"
          />
        </div>

        {/* Right Side - Content */}
        <div className="text-white space-y-6">
          <h2 className="text-4xl md:text-5xl mb-6">
            Men's Collections
          </h2>

          <p className="text-gray-300 leading-relaxed">
            With our decade of experience of the industry, we are offering a
            quality array of Exclusive Shirt to our customers at reasonable
            rates. Known for manufacturing, supplying and wholesaling an
            extensive collection of high-grade Shirts, Neelkanth Collection
            was established in the year at 2010.
          </p>

          <p className="text-gray-300 leading-relaxed">
            The product array offered is inclusive of optimum quality Casual
            Shirts, Formal Shirt, Partywear Shirts, Designer Shirts,
            Exclusive Shirt and Ethnic Shirt. With the support of latest
            machines and technology, our talented professionals precisely
            designed in accordance with the industry defined norms.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MensCollection;