import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faHeadset, faLock, faGift } from '@fortawesome/free-solid-svg-icons';

const Services = () => {
  const features = [
    {
      icon: faTruck,
      title: 'Free Shipping',
      description: 'Get FREE delivery on first five orders !!!!',
    },
    {
      icon: faHeadset,
      title: '24/7 Support',
      description: "No matter the time of day, we're here to help.",
    },
    {
      icon: faLock,
      title: 'Money Back',
      description: 'Full refund in case a order cancels within 3 days',
    },
    {
      icon: faGift,
      title: 'Gift Coupons',
      description: 'Coupons will be povided to the lucky customers',
    },
  ];

  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {features.map((feature, index) => (
          <div 
            key={index} 
            className="flex border-2 border-black overflow-hidden transition-transform duration-300 hover:scale-105 hover:border-teal-400"
          >
            {/* Icon Section */}
            <div className="bg-black flex items-center justify-center px-6 py-2">
              <FontAwesomeIcon 
                icon={feature.icon} 
                className="text-white text-2xl hover:text-teal-400"
              />
            </div>

            {/* Content Section */}
            <div className="flex-1 px-4 py-4 bg-white">
              <h3 className="text-teal-400 font-bold text-sm mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-700 text-xs leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;