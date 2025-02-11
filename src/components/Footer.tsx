import Link from "next/link";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-10">
      {/* Sección superior con enlaces */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2">
            <li><Link href="/about/mission" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/careers" className="hover:text-white transition">Careers</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Services</h3>
          <ul className="space-y-2">
            <li><Link href="/services/web" className="hover:text-white transition">Web Development</Link></li>
            <li><Link href="/services/mobile" className="hover:text-white transition">Mobile Apps</Link></li>
            <li><Link href="/services/erp" className="hover:text-white transition">ERP Solutions</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2">
            <li><Link href="/faq" className="hover:text-white transition">FAQ</Link></li>
            <li><Link href="/help" className="hover:text-white transition">Help Center</Link></li>
            <li><Link href="/terms" className="hover:text-white transition">Terms of Service</Link></li>
          </ul>
        </div>
        <div>
          <h3 className="text-white font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <Link href="#" className="hover:text-white transition"><FaFacebookF /></Link>
            <Link href="#" className="hover:text-white transition"><FaTwitter /></Link>
            <Link href="#" className="hover:text-white transition"><FaInstagram /></Link>
            <Link href="#" className="hover:text-white transition"><FaLinkedinIn /></Link>
          </div>
        </div>
      </div>
      
      {/* Sección inferior con copyright */}
      <div className="max-w-7xl mx-auto px-6 text-center pt-6 text-gray-500">
        <p>&copy; {new Date().getFullYear()} Casapia. All rights reserved.</p>
      </div>
    </footer>
  );
}
