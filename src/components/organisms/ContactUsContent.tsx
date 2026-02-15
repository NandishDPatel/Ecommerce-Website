import ContactForm from "../molecules/ContactForm";
import ContactInfo from "../molecules/ContactInfo";
import MapBox from "../molecules/MapBox";

export default function ContactUsContent() {
  return (
    <>
      {/* Contact Section */}
      <div className="mx-auto">
        {/* Contact Info and Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 p-4 sm:p-6 md:p-10 px-4 sm:px-6 md:px-8 lg:px-32 gap-8 md:gap-12 mb-4 md:mb-16 bg-white">
          {/* Contact Information */}
          <ContactInfo />

          {/* Contact Form */}
          <ContactForm />
        </div>

        {/* Map Section */}
        <MapBox />
      </div>
    </>
  );
}
