export default function ContactPage() {
    return (
        <div className="bg-secondary min-h-screen flex flex-col px-4 py-10">
            <h2 className="text-4xl text-center text-black mt-14 mb-4">Contact Us</h2>
            <p className="text-lg text-gray-500 text-center mb-10">
                Get in touch with us, we’d love to hear from you!
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full max-w-6xl mx-auto">
                {/* Contact Form Section */}
                <div className="bg-white shadow-lg text-black rounded-lg p-6">
                    <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                    <form className="space-y-4">
                        <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
                        <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
                        <textarea placeholder="Message" rows={4} className="w-full p-3 border resize-none rounded-md"></textarea>
                        <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                            Send Message
                        </button>
                    </form>
                </div>

                {/* Contact Information Section */}
                <div className="bg-white shadow-lg text-black rounded-lg p-6 flex flex-col justify-center">
                    <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                    <p className="text-gray-600 mb-2">
                        📍 Address: Andador Vecinal 10381, Valle Redondo, Tijuana, B.C.
                    </p>
                    <p className="text-gray-600 mb-2">
                        📞 Phone: +52 664 626 8795
                    </p>
                    <p className="text-gray-600">
                        ✉️ Email: info@casapiaconstruccion.com
                    </p>
                </div>
            </div>

            {/* Google Maps Section */}
            <div className="w-full h-[400px] mt-12">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1375.0804918517601!2d-116.80866509696742!3d32.463482254710215!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947851a84432b%3A0x89af8401eb17c742!2sCasapia%20Construccion%20S.%20De%20RL.%20de%20CV.!5e0!3m2!1ses-419!2smx!4v1739560608818!5m2!1ses-419!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    );
}


