import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactInfo = () => {
  return (
    <div className="bg-black p-5 md:p-10 shadow-2xl">
            <div className="space-y-3 md:space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-teal-400 text-black border border-black w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-gray-300">+1 234 567 8901</p>
                  <p className="text-gray-300">+1 (683) 345-2093</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-400 text-black border border-black w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-gray-300">mail@example.com</p>
                  <p className="text-gray-300">eshoppy@mail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-teal-400 text-black border border-black w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div className="">
                  <p className="text-gray-300">Broome St, California, USA</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-teal-400 text-black border border-black w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-gray-300">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p className="text-gray-300">Sat - Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default ContactInfo