import ContactForm from "../molecules/ContactForm";
import ContactInfo from "../molecules/ContactInfo";
import MapBox from "../molecules/MapBox";

export default function ContactUsContent() {
  return (
    <>
      {/* Contact Section */}
      <div className="mx-auto">
        {/* Contact Info and Form Grid */}
        <div className="grid md:grid-cols-2 p-10 px-8 md:px-32 gap-12 mb-4 md:mb-16 bg-white">
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
