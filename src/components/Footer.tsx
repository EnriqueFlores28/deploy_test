import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 text-sm py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Sección superior con enlaces */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 border-b border-gray-700 pb-6">
          <div className="text-center md:text-left">
            <h3 className="text-white font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/mission" className="hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
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
