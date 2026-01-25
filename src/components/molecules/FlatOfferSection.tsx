import { Link } from "react-router";

const FlatOfferSection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 my-16">
      {/* Women's Offer - Left Side (Shadow from Top-Left to Bottom-Right) */}

      <div className="relative h-64 md:h-96 overflow-hidden group cursor-pointer">
        <Link to="/women-wear">
          <img
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&h=600&fit=crop"
            alt="Women's Fashion"
            className="w-full h-full object-cover"
          />

          <div className="diagonal-overlay-left"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-wide">
              Flat <span className="text-teal-400">50%</span> Offer
            </h2>
          </div>
        </Link>
      </div>

      {/* Men's Offer - Right Side (Shadow from Top-Right to Bottom-Left) */}
      <div className="relative h-64 md:h-96 overflow-hidden group cursor-pointer">
        <Link to="/men-wear">
          <img
            src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=800&h=600&fit=crop"
            alt="Men's Fashion"
            className="w-full h-full object-cover"
          />

          {/* Diagonal Shadow Overlay - From Top-Right Corner */}
          <div className="diagonal-overlay-right"></div>

          {/* Text Content */}
          <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white tracking-wide">
              Flat <span className="text-teal-400">50%</span> Offer
            </h2>
          </div>
        </Link>
      </div>

      <style>{`
        /* Left Image - Shadow sweeps from Top-Left (0,0) to Bottom-Right (100%,100%) */
        .diagonal-overlay-left {
          position: absolute;
          inset: 0;
          background: black;
          opacity: 0.75;
          z-index: 5;
          clip-path: polygon(0 0, 0 0, 0 0);
          transition: clip-path 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .group:hover .diagonal-overlay-left {
          clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
        }

        /* Right Image - Shadow sweeps from Top-Right (100%,0) to Bottom-Left (0,100%) */
        .diagonal-overlay-right {
          position: absolute;
          inset: 0;
          background: black;
          opacity: 0.75;
          z-index: 5;
          clip-path: polygon(100% 0, 100% 0, 100% 0);
          transition: clip-path 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          pointer-events: none;
        }

        .group:hover .diagonal-overlay-right {
          clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);
        }
      `}</style>
    </section>
  );
};

export default FlatOfferSection;
