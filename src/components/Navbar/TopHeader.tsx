import Link from "next/link";
import { FaFacebookF, FaTwitter, FaPhone, FaYoutube } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="w-full bg-green-600 text-white py-1">
      <div className="container mx-auto px-6 flex justify-between items-center">
        {/* Organization Name */}
        <div className="font-bold text-sm md:text-base">
          BANGLADESH ENGINEERS COUNCIL
        </div>

        {/* Navigation and Social Links */}
        <div>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-3 md:space-x-5 text-xs md:text-sm">
              {/* Navigation Links */}
              <Link href="/about" className="hover:underline">
                About Us
              </Link>
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy
              </Link>
              <Link href="/faq" className="hover:underline">
                Faq
              </Link>

              {/* Social Media Icons */}
              <div className="flex items-center space-x-2">
                <Link
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-800 p-1 rounded-sm hover:opacity-90 flex items-center justify-center"
                >
                  <FaFacebookF size={14} />
                </Link>
                <Link
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-400 p-1 rounded-sm hover:opacity-90 flex items-center justify-center"
                >
                  <FaTwitter size={14} />
                </Link>
                <Link
                  href="tel:+8801234567890"
                  className="bg-green-700 p-1 rounded-sm hover:opacity-90 flex items-center justify-center"
                >
                  <FaPhone size={14} />
                </Link>
                <Link
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 p-1 rounded-sm hover:opacity-90 flex items-center justify-center"
                >
                  <FaYoutube size={14} />
                </Link>
              </div>
            </div>
          </div>
          <div className="lg:hidden block">
            <button className="text-green-600 bg-white px-2 py-1 text-xs ">Become A Member</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
