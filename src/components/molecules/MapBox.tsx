const MapBox = () => {
  return (
    <div className="mb-8 md:mb-16 p-4 sm:p-6 md:p-8 md:px-16 lg:px-32 bg-black">
      <h2 className="text-2xl sm:text-3xl text-white text-center mb-6 md:mb-8">Find Us Here</h2>
      <div className="overflow-hidden shadow-lg rounded-lg h-[280px] sm:h-[350px] md:h-[450px]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.489290162139!2d-118.27111652424168!3d34.108221473135934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0ce990cf877%3A0xaf369d2722cd74ee!2sBroome%20St.%20General%20Store!5e0!3m2!1sen!2sus!4v1768917348807!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: '280px' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="E-Shoppy Location Map"
        ></iframe>
      </div>
    </div>
  );
};

export default MapBox;
