import Image from "next/image";

export default function ContactPage() {
    return (
        <div className="relative min-h-screen">
            <div className="absolute inset-0">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1456.848438195803!2d-116.80918783800098!3d32.46340157952854!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d947851a84432b%3A0x89af8401eb17c742!2sCasapia%20Construccion%20S.%20De%20RL.%20de%20CV.!5e0!3m2!1ses-419!2smx!4v1739558123336!5m2!1ses-419!2smx"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                ></iframe>
                <div className="absolute inset-0 bg-black bg-opacity-60"></div>
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 pt-24 md:pt-32">
                <h2 className="text-4xl text-white text-center mb-4">Contact Us</h2>
                <p className="text-lg text-gray-300 text-center mb-6 md:mb-10">
                    Get in touch with us, we’d love to hear from you!
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 w-full max-w-sm md:max-w-5xl bg-white bg-opacity-60 p-6 md:p-8 rounded-lg shadow-lg relative z-20">
                    <div className="text-gray-800">
                        <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
                        <form className="space-y-4">
                            <input type="text" placeholder="Name" className="w-full p-3 border rounded-md" />
                            <input type="email" placeholder="Email" className="w-full p-3 border rounded-md" />
                            <textarea placeholder="Message" rows={4} className="w-full p-3 border rounded-md resize-none"></textarea>
                            <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
                                Send Message
                            </button>
                        </form>
                    </div>

                    <div className="text-gray-800 flex flex-col justify-center">
                        <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                        <p className="text-gray-700 mb-2 flex items-center">
                            <Image src="/svg/pin.svg" alt="Address Icon" width={20} height={20} className="mr-2" />
                            Address: Andador Vecinal 10381, Valle Redondo, Tijuana, B.C.
                        </p>
                        <p className="text-gray-700 mb-2 flex items-center">
                            <Image src="/svg/phone.svg" alt="Phone Icon" width={20} height={20} className="mr-2" />
                            Phone: +52 664 626 8795
                        </p>
                        <p className="text-gray-700 flex items-center">
                            <Image src="/svg/email.svg" alt="Email Icon" width={20} height={20} className="mr-2" />
                            Email: info@casapiaconstruccion.com
                        </p>
                        <p className="text-gray-700 mt-2 flex items-center">
                            <Image src="/svg/maps.svg" alt="Map Icon" width={20} height={20} className="mr-2" />
                            <a href="https://maps.app.goo.gl/5i75QzW1zmURErUSA" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                                View on Google Maps
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
